'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = -100, my = -100, rx = -100, ry = -100
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', move)

    let raf: number
    const loop = () => {
      if (dot.current) {
        dot.current.style.left = mx + 'px'
        dot.current.style.top = my + 'px'
      }
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ring.current) {
        ring.current.style.left = rx + 'px'
        ring.current.style.top = ry + 'px'
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="cursor-dot fixed pointer-events-none z-[9999] w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A3D2B]"
      />
      <div
        ref={ring}
        className="cursor-ring fixed pointer-events-none z-[9998] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1A3D2B] opacity-50"
      />
    </>
  )
}
