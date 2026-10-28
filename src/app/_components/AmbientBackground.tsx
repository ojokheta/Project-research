'use client'

import { useEffect, useRef } from 'react'

type Blob = { x: number; y: number; r: number; color: string; ax: number; ay: number; sx: number; sy: number; ph: number }

/**
 * Calm animated backdrop — an organic gradient-mesh "fog" drawn on a 2D canvas.
 *
 * This is the light-weight stand-in for Vanta.js: Vanta's Fogs/Net effects run
 * on Three.js, which is heavy to ship and expensive on mobile GPUs, so we get
 * the same serene drifting-mist feel for a few KB with plain canvas 2D.
 *
 * Performance & accessibility safeguards:
 * - `prefers-reduced-motion` → paints one static frame, no rAF loop at all.
 * - Small screens → fewer blobs, device-pixel-ratio capped at 1, and the loop
 *   is throttled to ~30fps (motion is ambient; nobody will notice the delta).
 * - Desktop → DPR capped at 1.5, ~60fps.
 * - The loop pauses entirely while the tab is hidden and is cancelled on
 *   unmount, so no timers or frames leak between routes.
 */
export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.innerWidth < 700
    const dpr = Math.min(window.devicePixelRatio || 1, small ? 1 : 1.5)
    const frameGap = small ? 1000 / 30 : 0

    // Soft emerald/lime brand tints — deliberately desaturated so copy stays legible.
    const palette = ['#dff2e2', '#c9e9d2', '#eef7d0', '#d3efe0', '#cfe7d4', '#f2f8de']
    const blobs: Blob[] = Array.from({ length: small ? 4 : 7 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.18 + Math.random() * 0.22,
      color: palette[i % palette.length],
      ax: 0.04 + Math.random() * 0.07, // drift amplitude (x)
      ay: 0.05 + Math.random() * 0.08, // drift amplitude (y)
      sx: 0.00004 + Math.random() * 0.00006, // drift speed (x)
      sy: 0.00005 + Math.random() * 0.00007, // drift speed (y)
      ph: Math.random() * Math.PI * 2,
    }))

    let w = 0
    let h = 0
    let raf = 0
    let last = 0
    let alive = true

    const resize = () => {
      w = Math.max(1, Math.floor(window.innerWidth * dpr))
      h = Math.max(1, Math.floor(window.innerHeight * dpr))
      canvas.width = w
      canvas.height = h
      if (reduced) paint(0)
    }

    /** Draw one frame of drifting mist. `t` is a timestamp in ms. */
    const paint = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      for (const b of blobs) {
        const cx = (b.x + Math.sin(t * b.sx + b.ph) * b.ax) * w
        const cy = (b.y + Math.cos(t * b.sy + b.ph) * b.ay) * h
        const r = b.r * Math.max(w, h)
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        g.addColorStop(0, b.color + 'b3') // ~70% alpha core
        g.addColorStop(1, b.color + '00') // fully faded edge
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = (t: number) => {
      if (!alive) return
      raf = requestAnimationFrame(loop)
      if (t - last < frameGap) return
      last = t
      paint(t)
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else if (!reduced && alive) {
        raf = requestAnimationFrame(loop)
      }
    }

    resize()
    if (!reduced) raf = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient" aria-hidden="true" />
}
