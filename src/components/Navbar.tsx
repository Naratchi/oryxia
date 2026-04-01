import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Projets', href: '#projets', route: '/#projets' },
  { label: 'Services', href: '#services', route: '/#services' },
  { label: 'Process', href: '#process', route: '/#process' },
  { label: 'Contact', href: '/contact', route: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (route: string) => {
    setMenuOpen(false)
    if (route.startsWith('/#')) {
      const id = route.replace('/#', '')
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
    } else {
      navigate(route)
    }
  }

  const handleLogoClick = () => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          backgroundColor: scrolled ? 'rgba(7,7,8,0.92)' : 'rgba(0,0,0,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          paddingTop: scrolled ? 18 : 28,
          paddingBottom: scrolled ? 18 : 28,
          borderBottomColor: scrolled ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0)',
        }}
        transition={{ opacity: { delay: 2.0, duration: 0.4 }, default: { duration: 0.4, ease: 'easeOut' } }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 'clamp(24px, 5vw, 64px)',
          paddingRight: 'clamp(24px, 5vw, 64px)',
          borderBottom: '1px solid transparent',
        }}
      >
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontFamily: 'Gebuk, Inter, sans-serif',
            fontWeight: 'normal',
            fontSize: 22,
            letterSpacing: '0em',
          }}
        >
          Oryxia
        </button>

        {/* Center links — desktop */}
        <div
          style={{ gap: 36, alignItems: 'center' }}
          className="hidden md:flex"
        >
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.route)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.45)',
                fontFamily: 'Inter',
                fontSize: 12,
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.09em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.13)',
              borderRadius: 100,
              color: '#fff',
              fontFamily: 'Inter',
              fontSize: 12,
              fontWeight: 500,
              padding: '10px 22px',
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            className="hidden sm:block"
          >
            Démarrer un projet →
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            style={{ background: 'none', border: 'none', color: '#fff', padding: 4 }}
            className="md:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 199,
              }}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 280,
                background: '#070708',
                zIndex: 200,
                display: 'flex',
                flexDirection: 'column',
                padding: '32px 28px',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                <button
                  onClick={handleLogoClick}
                  style={{ background: 'none', border: 'none', fontFamily: 'Gebuk, Inter, sans-serif', fontWeight: 'normal', fontSize: 20, color: '#fff' }}
                >
                  Oryxia
                </button>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {navLinks.map((l, i) => (
                  <motion.button
                    key={l.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => handleNav(l.route)}
                    style={{
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      color: '#fff',
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: 26,
                      cursor: 'pointer',
                      textAlign: 'left',
                      letterSpacing: '-0.02em',
                      padding: '12px 0',
                      display: 'block',
                      width: '100%',
                    }}
                  >
                    {l.label}
                  </motion.button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => { setMenuOpen(false); navigate('/contact') }}
                style={{
                  marginTop: 32,
                  background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
                  border: 'none',
                  borderRadius: 100,
                  color: '#fff',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: 13,
                  padding: '14px 24px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                Démarrer un projet →
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
