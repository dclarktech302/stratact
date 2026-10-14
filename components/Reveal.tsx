'use client'
import { useEffect, useRef, ReactNode, ElementType } from 'react'

type RevealType = 'up' | 'left' | 'rule'

interface RevealProps {
  type?: RevealType
  delay?: number
  children: ReactNode
  as?: ElementType
  className?: string
  style?: React.CSSProperties
}

const E = 'cubic-bezier(.16,1,.3,1)'

export function Reveal({ type = 'up', delay = 0, children, as: Tag = 'div', className, style }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = ref.current
    if (!el) return

    const ms = delay * 90

    if (type === 'rule') {
      el.style.transformOrigin = 'left'
      el.style.transform = 'scaleX(0)'
      el.style.transition = `transform 1100ms ${E} ${ms}ms`
    } else {
      el.style.opacity = '0'
      el.style.transform = type === 'left' ? 'translateX(-48px)' : 'translateY(28px)'
      el.style.transition = `opacity 800ms ${E} ${ms}ms, transform 800ms ${E} ${ms}ms`
    }

    const show = () => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' }
    )

    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.94) {
      show()
    } else {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [type, delay])

  return <Tag ref={ref} className={className} style={style}>{children}</Tag>
}
