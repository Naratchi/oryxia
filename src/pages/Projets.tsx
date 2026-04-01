import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

const categories = ['TOUS', 'PREMIUM 3D', 'SITES VITRINES', 'SITES BASIQUES']
const categoryCounts: Record<string, number> = {
  TOUS: projects.length,
  'PREMIUM 3D': projects.filter((p) => p.categorie === 'PREMIUM 3D').length,
  'SITES VITRINES': projects.filter((p) => p.categorie === 'SITES VITRINES').length,
  'SITES BASIQUES': projects.filter((p) => p.categorie === 'SITES BASIQUES').length,
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => navigate(`/projets/${project.slug}`)}
      whileHover={{ y: -8 }}
      style={{
        background: '#0c0c0e',
        border: `1px solid ${hovered ? 'rgba(139,108,247,0.22)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 6,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
    >
      {/* Visual */}
      <div style={{ aspectRatio: '16/10', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', inset: 0, background: project.gradient1 }}
        />
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', inset: 0, background: project.gradient2 }}
        />
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.nom}
            animate={{ opacity: hovered ? 0.5 : 0.25, scale: hovered ? 1.04 : 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute', inset: 0, width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top', zIndex: 1,
            }}
          />
        )}
        <div style={{
          position: 'absolute', top: 14, left: 14, zIndex: 2,
          background: 'rgba(7,7,8,0.80)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 100, padding: '4px 12px', fontFamily: 'Inter', fontSize: 9,
          textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.52)',
        }}>
          {project.categorie}
        </div>
        <div style={{
          position: 'absolute', top: 14, right: 14, zIndex: 2,
          fontFamily: 'Inter', fontSize: 11, color: 'rgba(255,255,255,0.30)',
        }}>
          {project.annee}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '24px 28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
          <div style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 19, color: '#fff', letterSpacing: '-0.02em' }}>
            {project.nom}
          </div>
          <div style={{
            border: '1px solid rgba(255,255,255,0.11)', borderRadius: 100, padding: '4px 10px',
            fontFamily: 'Inter', fontSize: 9, textTransform: 'uppercase', color: 'rgba(255,255,255,0.36)',
            whiteSpace: 'nowrap', marginLeft: 8, flexShrink: 0,
          }}>
            {project.tags[0]}
          </div>
        </div>
        <p style={{
          fontFamily: 'Inter', fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.44)',
          lineHeight: 1.7, marginBottom: 14, margin: '0 0 14px',
        }}>
          {project.intro.slice(0, 110)}…
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.services.slice(0, 3).map((s) => (
            <span key={s} style={{
              background: 'rgba(255,255,255,0.04)', borderRadius: 4, padding: '4px 10px',
              fontFamily: 'Inter', fontSize: 10, color: 'rgba(255,255,255,0.32)',
            }}>
              {s}
            </span>
          ))}
        </div>
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
          transition={{ duration: 0.2 }}
          style={{
            marginTop: 14, fontFamily: 'Inter', fontSize: 12, textTransform: 'uppercase',
            color: '#8b6cf7', letterSpacing: '0.1em',
          }}
        >
          Voir le projet →
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projets() {
  const [activeFilter, setActiveFilter] = useState('TOUS')
  const navigate = useNavigate()

  const filtered = activeFilter === 'TOUS'
    ? projects
    : projects.filter((p) => p.categorie === activeFilter)

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#070708', padding: 'clamp(120px, 15vw, 180px) clamp(24px, 5vw, 64px) 80px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 11 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ fontFamily: 'Inter', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: 20 }}>
              Nos réalisations
            </div>
          </motion.div>
          <h1 style={{
            fontFamily: 'Inter', fontWeight: 800,
            fontSize: 'clamp(56px, 9vw, 120px)',
            lineHeight: 0.92, letterSpacing: '-0.04em', color: '#fff', margin: 0,
          }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                Des sites qui
              </motion.div>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
              >
                <span className="grad-text">parlent d'eux-mêmes.</span>
              </motion.div>
            </div>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: '#070708', padding: '0 clamp(24px, 5vw, 64px) 48px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? 'linear-gradient(135deg, #8b6cf7, #f0566a)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'transparent' : 'rgba(255,255,255,0.13)',
                  borderRadius: 100,
                  padding: '8px 20px',
                  fontFamily: 'Inter',
                  fontSize: 12,
                  color: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.45)',
                  transition: 'all 0.2s',
                }}
              >
                {cat} ({categoryCounts[cat] ?? 0})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section style={{ background: '#070708', padding: '0 clamp(24px, 5vw, 64px) 100px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#070708', padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 64px)', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontFamily: 'Inter', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 24px' }}>
            Votre projet est le prochain.
          </h2>
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
              border: 'none', borderRadius: 100, padding: '14px 40px',
              fontFamily: 'Inter', fontWeight: 500, fontSize: 13,
              textTransform: 'uppercase', color: '#fff',
            }}
          >
            Démarrer mon projet →
          </motion.button>
        </motion.div>
      </section>
    </>
  )
}
