import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return null

  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])

  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const trail = useRef(Array(8).fill(null).map(() => ({ x: 0, y: 0 })))
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const lerps = [0.25, 0.20, 0.16, 0.13, 0.10, 0.08, 0.06, 0.05]

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const onHoverIn = (e: Event) => {
      const target = e.target as Element
      if (target.closest('a, button, [data-cursor-hover]')) setIsHover(true)
    }
    const onHoverOut = () => setIsHover(false)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onHoverIn)
    document.addEventListener('mouseout', onHoverOut)

    let raf: number
    const animate = () => {
      // Point principal — instantané
      if (cursorRef.current) {
        cursorRef.current.style.left = mouse.current.x + 'px'
        cursorRef.current.style.top = mouse.current.y + 'px'
      }

      // Anneau — lerp 0.12
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }

      // Trail — chaque point suit le précédent
      for (let i = 0; i < trail.current.length; i++) {
        const target = i === 0 ? mouse.current : trail.current[i - 1]
        trail.current[i].x += (target.x - trail.current[i].x) * lerps[i]
        trail.current[i].y += (target.y - trail.current[i].y) * lerps[i]
        const el = trailRefs.current[i]
        if (el) {
          el.style.left = trail.current[i].x + 'px'
          el.style.top = trail.current[i].y + 'px'
        }
      }

      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onHoverIn)
      document.removeEventListener('mouseout', onHoverOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Point principal */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          background: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s, width 0.2s, height 0.2s',
          ...(isHover ? { transform: 'translate(-50%, -50%) scale(2.2)' } : {}),
        }}
      />

      {/* Anneau */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: 36,
          height: 36,
          border: '1px solid rgba(255,255,255,0.20)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s, opacity 0.2s',
          ...(isHover ? { transform: 'translate(-50%, -50%) scale(1.6)', opacity: 0.4 } : {}),
        }}
      />

      {/* Traînée */}
      {Array(8).fill(null).map((_, i) => {
        const size = 6 - (i / 8) * 4
        const opacity = (1 - i / 8) * (isHover ? 0.175 : 0.35)
        return (
          <div
            key={i}
            ref={el => { trailRefs.current[i] = el }}
            style={{
              position: 'fixed',
              width: size,
              height: size,
              background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9990 - i,
              transform: 'translate(-50%, -50%)',
              opacity,
            }}
          />
        )
      })}
    </>
  )
}
