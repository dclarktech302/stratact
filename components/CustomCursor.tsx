'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const loop = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`
      }
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor fixed top-0 left-0 w-2 h-2 bg-[#1A3D2B] rounded-full pointer-events-none z-[9999]" />
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0 w-8 h-8 border border-[#1A3D2B] rounded-full pointer-events-none opacity-50 z-[9998]" />
    </>
  )
}
