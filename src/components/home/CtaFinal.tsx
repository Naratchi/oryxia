import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CtaFinal() {
  const navigate = useNavigate()

  return (
    <section
      style={{
        background: '#0c0c0e',
        padding: 'clamp(80px, 10vw, 130px) clamp(24px, 5vw, 64px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #8b6cf7 0%, transparent 70%)',
          filter: 'blur(120px)',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: 'Inter',
              fontWeight: 800,
              fontSize: 'clamp(48px, 7vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              color: '#fff',
              margin: 0,
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
              >
                Votre projet est
              </motion.div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <span className="grad-text">le prochain.</span>
              </motion.div>
            </div>
          </h2>

          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 300,
              fontSize: 18,
              color: 'rgba(255,255,255,0.42)',
              maxWidth: 440,
              margin: '24px auto 48px',
              lineHeight: 1.82,
            }}
          >
            Un appel de 30 minutes pour définir votre projet et vous proposer une direction claire.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.button
              onClick={() => navigate('/contact')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="animate-pulse-glow"
              style={{
                background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
                border: 'none',
                borderRadius: 100,
                padding: '15px 44px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 13,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#fff',
              }}
            >
              Démarrer mon projet →
            </motion.button>

            <motion.button
              onClick={() => navigate('/projets')}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{
                borderColor: 'rgba(255,255,255,0.28)',
                color: '#fff',
              }}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.13)',
                borderRadius: 100,
                padding: '15px 44px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: 13,
                color: 'rgba(255,255,255,0.45)',
                transition: 'all 0.2s',
              }}
            >
              Voir nos projets
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
