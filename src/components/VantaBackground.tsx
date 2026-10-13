import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

export function VantaBackground() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return

    let destroyed = false
    let effect: { destroy: () => void } | undefined

    const start = async () => {
      const [{ default: FOG }, THREE] = await Promise.all([
        import('vanta/dist/vanta.fog.min'),
        import('three'),
      ])
      if (destroyed || !ref.current) return
      window.THREE = THREE
      effect = FOG({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        highlightColor: 0x8aa63a,
        midtoneColor: 0x0c4a34,
        lowlightColor: 0x052015,
        baseColor: 0x03140e,
        blurFactor: 0.62,
        speed: 0.35,
        zoom: 0.55,
      })
    }

    void start()

    return () => {
      destroyed = true
      effect?.destroy()
    }
  }, [])

  return (
    <>
      <div ref={ref} className="vanta-layer" aria-hidden="true" />
      <div className="vanta-veil" aria-hidden="true" />
    </>
  )
}
