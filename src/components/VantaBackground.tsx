import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@react-spring/web'

type VantaEffect = { destroy: () => void }
type FogModule = Record<string, unknown>

/**
 * The vanta UMD bundle exports `{ default: factory }`; depending on bundler
 * interop the namespace may or may not already be unwrapped. Dig for the
 * factory instead of trusting a single shape.
 */
function unwrapFog(mod: unknown): ((opts: Record<string, unknown>) => VantaEffect) | null {
  let candidate: unknown = mod
  for (let depth = 0; depth < 3; depth += 1) {
    if (typeof candidate === 'function') {
      return candidate as (opts: Record<string, unknown>) => VantaEffect
    }
    if (!candidate || typeof candidate !== 'object') return null
    candidate = (candidate as FogModule).default
  }
  return null
}

/**
 * The atmosphere layer.
 *
 * Vanta FOG runs at low opacity behind everything so it reads as depth rather
 * than content — it should never compete with the message. Disabled entirely
 * for reduced-motion users and skipped on low-powered viewports.
 */
export function VantaBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return
    if (window.matchMedia('(max-width: 640px)').matches) return

    let destroyed = false
    let effect: { destroy: () => void } | undefined

    const start = async () => {
      const [fogModule, THREE] = await Promise.all([
        import('vanta/dist/vanta.fog.min'),
        import('three'),
      ])
      if (destroyed || !ref.current) return
      window.THREE = THREE

      /*
       * The UMD build exports `{ default: factory }`, and bundler interop may
       * hand that object straight back instead of unwrapping it — so dig for
       * the actual factory rather than trusting one shape.
       */
      const FOG = unwrapFog(fogModule)
      if (!FOG) return

      effect = FOG({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x2f6b3f,
        midtoneColor: 0x0d4a33,
        lowlightColor: 0x06251a,
        baseColor: 0x04140d,
        blurFactor: 0.7,
        speed: 0.28,
        zoom: 0.62,
      })
    }

    void start()

    return () => {
      destroyed = true
      effect?.destroy()
    }
  }, [reduced])

  if (reduced) return null

  return (
    <>
      <div ref={ref} className="vanta-layer" aria-hidden="true" />
      <div className="vanta-veil" aria-hidden="true" />
    </>
  )
}
