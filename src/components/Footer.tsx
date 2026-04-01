import type React from 'react'
import { useNavigate } from 'react-router-dom'

type FooterLink = { label: string; href?: string; navigate?: string; scroll?: string }

const footerLinks: Record<string, FooterLink[]> = {
  Offres: [
    { label: 'Sites Web', navigate: '/', scroll: 'services' },
    { label: 'SEO & Google Ads', navigate: '/', scroll: 'services' },
    { label: 'Visuels 3D IA', navigate: '/', scroll: 'services' },
  ],
  Agence: [
    { label: 'Nos projets', navigate: '/projets' },
    { label: 'Notre process', navigate: '/', scroll: 'process' },
    { label: 'Contact', navigate: '/contact' },
  ],
  Contact: [
    { label: 'contact@oryxia-agency.com', href: 'mailto:contact@oryxia-agency.com' },
    { label: 'Bruxelles, Belgique' },
    { label: 'Réponse sous 24h' },
  ],
}

export default function Footer() {
  const navigate = useNavigate()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#070708',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: 'clamp(48px,8vw,64px) clamp(24px,5vw,64px) 32px',
      }}
    >
      {/* Mini CTA Band */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          marginBottom: 48,
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: 18,
            color: '#fff',
            letterSpacing: '-0.01em',
          }}
        >
          Prêt à démarrer votre projet ?
        </span>
        <button
          onClick={() => navigate('/contact')}
          style={{
            background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
            border: 'none',
            borderRadius: 100,
            color: '#fff',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: 12,
            padding: '12px 28px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          Parlons-en →
        </button>
      </div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}
      >
        {/* Logo + desc */}
        <div>
          <div
            style={{
              fontFamily: 'Gebuk, Inter, sans-serif',
              fontWeight: 'normal',
              fontSize: 22,
              color: '#fff',
              marginBottom: 14,
            }}
          >
            Oryxia
          </div>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 300,
              fontSize: 13,
              color: 'rgba(255,255,255,0.36)',
              lineHeight: 1.8,
              maxWidth: 220,
            }}
          >
            Agence web à Bruxelles. Sites premium, SEO & Google Ads, Visuels 3D IA.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <div
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 11,
                color: 'rgba(255,255,255,0.22)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: 18,
              }}
            >
              {title}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map((l) => {
                const isClickable = l.href || l.navigate
                const baseStyle = {
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.46)',
                  transition: 'color 0.2s',
                  cursor: isClickable ? 'pointer' : 'default',
                  textDecoration: 'none',
                  display: 'block',
                } as React.CSSProperties

                const handleClick = () => {
                  if (l.href) return // handled by <a>
                  if (l.navigate) {
                    navigate(l.navigate)
                    if (l.scroll) {
                      setTimeout(() => {
                        document.getElementById(l.scroll!)?.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }
                  }
                }

                return (
                  <li key={l.label}>
                    {l.href ? (
                      <a
                        href={l.href}
                        style={baseStyle}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.46)')}
                      >
                        {l.label}
                      </a>
                    ) : (
                      <span
                        style={baseStyle}
                        onClick={isClickable ? handleClick : undefined}
                        onMouseEnter={(e) => isClickable && (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => isClickable && (e.currentTarget.style.color = 'rgba(255,255,255,0.46)')}
                      >
                        {l.label}
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.07)',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
          © {year} Oryxia. Tous droits réservés.
        </span>
        <span style={{ fontFamily: 'Inter', fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
          Conçu avec intention · Bruxelles
        </span>
      </div>
    </footer>
  )
}
