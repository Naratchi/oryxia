import { motion } from 'framer-motion'
import { Search, Palette, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Audit & Stratégie',
    duration: 'Semaine 1',
    icon: Search,
    desc: "On comprend votre business, vos clients et vos concurrents. Puis on définit exactement ce que votre site doit faire — et comment.",
  },
  {
    num: '02',
    title: 'Design & Maquettes',
    duration: 'Sem. 1–2',
    icon: Palette,
    desc: "Vous voyez votre site avant qu'il soit codé. Vous validez chaque écran avant le développement. Pas de surprise.",
  },
  {
    num: '03',
    title: 'Développement',
    duration: 'Sem. 2–5',
    icon: Code2,
    desc: "On développe exactement ce que vous avez validé. Animations, formulaires, SEO. Testé sur tous les appareils.",
  },
  {
    num: '04',
    title: 'Lancement & Suivi',
    duration: 'Après livraison',
    icon: Rocket,
    desc: "Mise en ligne, Analytics configuré, formation incluse. Disponibles pour les ajustements.",
  },
]

export default function Process() {
  return (
    <section
      id="process"
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
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 80,
            alignItems: 'flex-end',
            marginBottom: 88,
          }}
        >
          <div>
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
              Notre méthode
            </div>
            <h2
              style={{
                fontFamily: 'Inter',
                fontWeight: 800,
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                color: '#fff',
                margin: 0,
              }}
            >
              Un process clair.{' '}
              <span className="grad-text">Des résultats prévisibles.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 300,
              fontSize: 16,
              color: 'rgba(255,255,255,0.44)',
              lineHeight: 1.82,
            }}
          >
            On valide chaque étape avec vous avant d'avancer. Vous savez exactement où en est votre projet, à tout moment.
          </p>
        </motion.div>

        {/* Steps */}
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              style={{
                opacity: 0.65,
                display: 'grid',
                gridTemplateColumns: '72px 1.2fr 1fr',
                gap: 48,
                padding: '44px 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                alignItems: 'start',
                ...(i === steps.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.07)' }
                  : {}),
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.22 }}
              className="process-step"
            >
              <div
                className="grad-text process-step-num"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 900,
                  fontSize: 56,
                  lineHeight: 1,
                  paddingTop: 4,
                  paddingRight: 16,
                }}
              >
                {step.num}
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 8,
                  }}
                >
                  <step.icon
                    size={18}
                    style={{ color: '#8b6cf7', flexShrink: 0 }}
                  />
                  <div
                    className="process-step-title"
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 700,
                      fontSize: 24,
                      color: '#fff',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {step.title}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#8b6cf7',
                  }}
                >
                  {step.duration}
                </div>
              </div>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.42)',
                  lineHeight: 1.82,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
