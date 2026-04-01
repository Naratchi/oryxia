import { useParams, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { projects } from '../data/projects'
import { ArrowLeft, ExternalLink } from 'lucide-react'

function CountUp({ target }: { target: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [displayed, setDisplayed] = useState('0')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const numeric = parseFloat(target.replace(/[^0-9.]/g, ''))
          const suffix = target.replace(/[0-9.]/g, '')
          if (isNaN(numeric)) { setDisplayed(target); return }
          const duration = 1600
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const cur = Math.floor(eased * numeric)
            setDisplayed(`${cur}${suffix}`)
            if (progress < 1) requestAnimationFrame(tick)
            else setDisplayed(target)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref}>{displayed}</div>
}

export default function ProjetDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0px', '60px'])

  const project = projects.find((p) => p.slug === slug)
  const nextProject = projects.find((p) => p.slug === project?.projetSuivant)

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#070708' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>Projet introuvable.</p>
          <button
            onClick={() => navigate('/projets')}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 100, padding: '10px 24px', color: '#fff', fontFamily: 'Inter' }}
          >
            ← Retour aux projets
          </button>
        </div>
      </div>
    )
  }

  const titleWords = project.nom.split(' ')

  return (
    <div style={{ background: '#070708', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div style={{ padding: 'clamp(90px, 12vw, 120px) clamp(24px, 5vw, 64px) 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => navigate('/projets')}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.36)',
                fontFamily: 'Inter',
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 32,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.36)')}
            >
              <ArrowLeft size={14} />
              Projets
            </button>
          </motion.div>
        </div>
      </div>

      {/* H1 */}
      <div style={{ padding: '0 clamp(24px, 5vw, 64px) 60px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: 800,
              fontSize: 'clamp(56px, 9vw, 120px)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              color: '#fff',
              margin: 0,
            }}
          >
            {titleWords.map((word, i) => (
              <div
                key={i}
                style={{ overflow: 'hidden', display: 'inline-block', marginRight: '0.25em' }}
              >
                <motion.div
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.85, delay: i * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </h1>
        </div>
      </div>

      {/* Hero image */}
      <div
        ref={heroRef}
        style={{ padding: '0 clamp(24px, 5vw, 64px) 0' }}
      >
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              height: 'clamp(300px, 50vw, 560px)',
              position: 'relative',
            }}
          >
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.nom}
                style={{
                  position: 'absolute',
                  top: '-10%',
                  left: 0,
                  width: '100%',
                  height: '120%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  willChange: 'transform',
                  y: imgY,
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: project.gradient2,
                }}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Metadata */}
      <div style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="projet-meta-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 0,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {[
              { label: 'Année', value: project.annee },
              { label: 'Secteur', value: project.secteur },
              { label: 'Services', value: project.services.join(' / ') },
              { label: 'Délai', value: project.timeline },
              { label: 'Site', value: project.url ?? 'Sur demande' },
            ].map((meta) => (
              <motion.div
                key={meta.label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                className="projet-meta-item"
                style={{
                  padding: '24px 16px',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div style={{ fontFamily: 'Inter', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)', marginBottom: 8 }}>
                  {meta.label}
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                  {meta.label === 'Site' && meta.value !== 'Sur demande' ? (
                    <a
                      href={meta.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#8b6cf7', textDecoration: 'none' }}
                    >
                      Voir le site <ExternalLink size={11} />
                    </a>
                  ) : meta.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <div style={{ padding: '0 clamp(24px, 5vw, 64px) clamp(60px, 8vw, 100px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="projet-intro-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 80,
              alignItems: 'start',
            }}
          >
            <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', paddingTop: 6 }}>
              Introduction
            </div>
            <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 20, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, margin: 0 }}>
              {project.intro}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Challenge + Solution */}
      <div style={{ padding: '0 clamp(24px, 5vw, 64px) clamp(60px, 8vw, 100px)', background: '#0c0c0e' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', paddingTop: 'clamp(60px, 8vw, 100px)' }}>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="projet-challenge-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 64,
            }}
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#8b6cf7', marginBottom: 20 }}>
                Challenge
              </div>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.82, margin: 0 }}>
                {project.challenge}
              </p>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#8b6cf7', marginBottom: 20 }}>
                Solution
              </div>
              <p style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.82, margin: 0 }}>
                {project.solution}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Results */}
      <div style={{ padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: 48 }}>
            Résultats
          </div>
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="projet-resultats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 0,
            }}
          >
            {project.resultats.map((r, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
                style={{
                  borderRight: '1px solid rgba(255,255,255,0.07)',
                  padding: '24px 48px 24px 0',
                }}
              >
                <div
                  className="grad-text"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 900,
                    fontSize: 'clamp(36px, 5vw, 56px)',
                    lineHeight: 1,
                  }}
                >
                  <CountUp target={r.valeur} />
                </div>
                <div style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.36)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {r.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Next project */}
      {nextProject && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div style={{ maxWidth: 1160, margin: '0 auto' }}>
            <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: 24 }}>
              Projet suivant
            </div>
            <motion.button
              onClick={() => navigate(`/projets/${nextProject.slug}`)}
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 32,
              }}
            >
              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 800,
                  fontSize: 'clamp(36px, 7vw, 88px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.04em',
                  color: '#fff',
                }}
              >
                {nextProject.nom}
              </span>
              <div
                style={{
                  width: 'clamp(48px, 6vw, 72px)',
                  height: 'clamp(48px, 6vw, 72px)',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#fff',
                }}
              >
                →
              </div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
