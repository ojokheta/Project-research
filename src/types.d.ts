declare module 'vanta/dist/vanta.fog.min' {
  type VantaEffect = {
    destroy: () => void
    setOptions: (opts: Record<string, unknown>) => void
  }

  export default function FOG(options: Record<string, unknown>): VantaEffect
}

declare module 'three'
