import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { featuredProjects } from '../../data/projects'

const indices = ['01', '02', '03']

function ProjectRow({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => navigate(`/projets/${project.slug}`)}
      className="featured-project-row"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        minHeight: 300,
      }}
    >
      {/* Left info */}
      <motion.div
        animate={{ x: hovered ? 10 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="featured-project-left"
        style={{
          width: 'clamp(180px, 22vw, 280px)',
          flexShrink: 0,
          padding: '40px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          paddingRight: 32,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'Inter',
              fontSize: 11,
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.20)',
            }}
          >
            {indices[index]}
          </div>
          <div
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: 28,
              color: '#fff',
              letterSpacing: '-0.02em',
              marginTop: 12,
            }}
          >
            {project.nom}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 16 }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'Inter',
                  fontSize: 12,
                  color: 'rgba(255,255,255,0.36)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            fontFamily: 'Inter',
            fontSize: 11,
            color: 'rgba(255,255,255,0.22)',
          }}
        >
          {project.annee}
        </div>
      </motion.div>

      {/* Right visual */}
      <div className="featured-project-visual" style={{ flex: 1, position: 'relative', minHeight: 300, overflow: 'hidden' }}>
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background: 'linear-gradient(to right, rgba(7,7,8,0.95) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />

        {/* Background 1 (default) */}
        <motion.div
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: project.gradient1,
          }}
        />

        {/* Background 2 (hover) */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: project.gradient2,
          }}
        />

        {/* Image if available */}
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.nom}
            animate={{ opacity: hovered ? 0.5 : 0.25, scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              zIndex: 1,
            }}
          />
        )}

        {/* Category tag */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 3,
            background: 'rgba(7,7,8,0.80)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 100,
            padding: '5px 14px',
            fontFamily: 'Inter',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          {project.categorie}
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 3,
            color: '#fff',
          }}
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const navigate = useNavigate()

  return (
    <section
      id="projets"
      style={{
        background: '#070708',
        padding: 'clamp(64px, 10vw, 100px) clamp(24px, 5vw, 64px)',
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
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 72,
            flexWrap: 'wrap',
            gap: 24,
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
                marginBottom: 16,
              }}
            >
              Ce qu'on a fait.
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 800,
                  fontSize: 'clamp(42px, 5.5vw, 72px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.035em',
                  color: '#fff',
                  margin: 0,
                }}
              >
                Nos projets.
              </motion.h2>
            </div>
          </div>

          <motion.button
            onClick={() => navigate('/projets')}
            whileHover={{ x: 4 }}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'Inter',
              fontSize: 13,
              color: '#8b6cf7',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            Voir tous les projets →
          </motion.button>
        </motion.div>

        {/* Project rows */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {featuredProjects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
