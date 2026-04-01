import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 15, suffix: '+', label: 'Projets livrés' },
  { value: 100, suffix: '%', label: 'Design sur mesure' },
  { value: 50, suffix: '+', label: 'Clients satisfaits' },
  { value: 24, suffix: 'h', label: 'Délai de réponse' },
]

function CounterStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const start = Date.now()
    const target = stat.value
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [isInView, stat.value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
      viewport={{ once: true, margin: '-80px' }}
      style={{
        padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 48px)',
      }}
    >
      <div
        className="grad-text"
        style={{
          fontFamily: 'Inter',
          fontWeight: 900,
          fontSize: 'clamp(48px, 6vw, 72px)',
          lineHeight: 1,
        }}
      >
        {count}{stat.suffix}
      </div>
      <div
        style={{
          fontFamily: 'Inter',
          fontWeight: 300,
          fontSize: 13,
          color: 'rgba(255,255,255,0.36)',
          marginTop: 12,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section style={{ background: '#0c0c0e', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)' }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`stats-cell${i < stats.length - 1 ? ' stats-cell-border' : ''}`}
          >
            <CounterStat stat={s} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
