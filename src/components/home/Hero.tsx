import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const stats = [
  { value: '15+', label: 'Projets livrés' },
  { value: '100%', label: 'Sur mesure' },
  { value: '24h', label: 'Réponse garantie' },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

  const { scrollYProgress } = useScroll({ target: containerRef })
  const videoYDesktop = useTransform(scrollYProgress, [0, 1], ['0px', '-80px'])
  const videoY = isMobile ? '0px' : videoYDesktop

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.playsInline = true
    video.play().catch(() => {})

    const handleTouch = () => { video.play().catch(() => {}) }
    document.addEventListener('touchstart', handleTouch, { once: true })
    return () => document.removeEventListener('touchstart', handleTouch)
  }, [])

  const lineVariants: Variants = {
    hidden: { y: '110%' },
    visible: (i: number) => ({
      y: '0%',
      transition: {
        delay: 1.4 + i * 0.12,
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    }),
  }

  return (
    <section
      ref={containerRef}
      className="hero-section"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 clamp(24px,5vw,64px) 80px',
      }}
    >
      {/* Video bg — zoom-out cinématique */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'absolute', inset: 0, zIndex: 0, y: videoY }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Fallback blobs (shown behind video) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#070708',
            zIndex: -1,
          }}
        >
          <div
            className="animate-drift1"
            style={{
              position: 'absolute',
              top: '10%',
              left: '20%',
              width: 600,
              height: 600,
              background: 'radial-gradient(circle, rgba(139,108,247,0.35) 0%, transparent 70%)',
              filter: 'blur(80px)',
              borderRadius: '50%',
            }}
          />
          <div
            className="animate-drift2"
            style={{
              position: 'absolute',
              top: '30%',
              right: '10%',
              width: 500,
              height: 500,
              background: 'radial-gradient(circle, rgba(196,90,245,0.25) 0%, transparent 70%)',
              filter: 'blur(80px)',
              borderRadius: '50%',
            }}
          />
          <div
            className="animate-drift3"
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '40%',
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(240,86,106,0.2) 0%, transparent 70%)',
              filter: 'blur(80px)',
              borderRadius: '50%',
            }}
          />
        </div>
      </motion.div>

      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          background:
            'linear-gradient(to bottom, rgba(7,7,8,0.82) 0%, rgba(7,7,8,0.15) 38%, rgba(7,7,8,0.10) 58%, rgba(7,7,8,0.92) 100%)',
        }}
      />

      {/* Reveal overlay — disparaît après le loader */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          background: '#070708',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="hero-content-grid"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1160,
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 48,
          alignItems: 'flex-end',
        }}
      >
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'Inter',
              fontSize: 10,
              fontWeight: 400,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              marginBottom: 20,
            }}
          >
            <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.15)' }} />
            Agence Web · Bruxelles · Belgique
            <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.15)' }} />
          </motion.div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: 800,
              fontSize: 'clamp(36px, 4.8vw, 72px)',
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: '#fff',
              margin: 0,
            }}
          >
            {['Se démarquer', 'commence par', 'votre site web.'].map((line, i) => (
              <div key={line} style={{ overflow: 'hidden' }}>
                <motion.div
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
          >
            <motion.button
              onClick={() => navigate('/projets')}
              whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.96 }}
              className="animate-pulse-glow"
              style={{
                marginTop: 44,
                background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
                borderRadius: 100,
                border: 'none',
                padding: '14px 40px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 13,
                textTransform: 'uppercase',
                color: '#fff',
                letterSpacing: '0.04em',
              }}
            >
              Découvrir nos projets →
            </motion.button>
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="hero-right"
          style={{ marginLeft: 'auto', marginTop: 0 }}
        >
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 300,
              fontSize: 17,
              color: 'rgba(255,255,255,0.48)',
              lineHeight: 1.82,
              maxWidth: 320,
            }}
          >
            Nous créons des expériences web qui marquent, attirent et convertissent.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255,255,255,0.10)',
                  paddingTop: 14,
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.32)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="grad-text"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    fontSize: 22,
                  }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
