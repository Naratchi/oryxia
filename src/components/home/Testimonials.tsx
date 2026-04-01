import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "En 3 semaines, notre cabinet avait enfin un site à la hauteur de notre expertise. Depuis, les patients arrivent déjà confiants — ils ont tout lu avant d'appeler.",
    name: 'Dr. Sophie Renard',
    role: 'Médecin généraliste, Bruxelles',
  },
  {
    quote:
      "Des packshots 3D de nos produits pour une fraction du prix d'un vrai shooting. Nos ventes en ligne ont triplé en 2 mois.",
    name: 'Marc Dubois',
    role: 'Fondateur, Maison Artisane',
  },
  {
    quote:
      "On diffuse maintenant sur Meta et TikTok avec des vidéos qui font vraiment pro. C'est ce qui nous manquait pour décoller.",
    name: 'Amira Khelifi',
    role: 'Directrice marketing, BeautyLab Bruxelles',
  },
]

export default function Testimonials() {
  return (
    <section
      style={{
        background: '#070708',
        padding: 'clamp(80px, 10vw, 130px) clamp(24px, 5vw, 64px)',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          style={{ marginBottom: 72 }}
        >
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: 18,
            }}
          >
            Ce que disent nos clients
          </div>
          <h2
            style={{
              fontFamily: 'Inter',
              fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: 0,
            }}
          >
            Ils nous ont fait confiance.{' '}
            <span className="grad-text">Voilà ce qu'ils en pensent.</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-80px' }}
            className="testimonial-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr clamp(180px, 22vw, 280px)',
              gap: 64,
              padding: '48px 0',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              ...(i === testimonials.length - 1
                ? { borderBottom: '1px solid rgba(255,255,255,0.07)' }
                : {}),
              alignItems: 'start',
            }}
          >
            {/* Left - quote */}
            <div>
              <div
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 900,
                  fontSize: 96,
                  lineHeight: 0.8,
                  marginBottom: -20,
                  background: 'linear-gradient(135deg, #8b6cf7 0%, #c45af5 50%, #f0566a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  opacity: 0.10,
                  userSelect: 'none',
                }}
              >
                "
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.8 }}
                viewport={{ once: true, margin: '-60px' }}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  fontSize: 'clamp(15px, 2.2vw, 20px)',
                  color: 'rgba(255,255,255,0.70)',
                  lineHeight: 1.75,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {t.quote}
              </motion.p>
            </div>

            {/* Right - author */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 + 0.35, duration: 0.6 }}
              viewport={{ once: true, margin: '-60px' }}
              style={{ textAlign: 'right' }}
            >
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 3, marginBottom: 16 }}>
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    style={{ color: '#8b6cf7', fill: '#8b6cf7' }}
                  />
                ))}
              </div>
              <div
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#fff',
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.34)',
                  marginTop: 4,
                }}
              >
                {t.role}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
