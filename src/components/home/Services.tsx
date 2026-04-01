import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ScrollStack, { ScrollStackItem } from '../ScrollStack'
// @ts-ignore
import BorderGlow from '../BorderGlow/BorderGlow'

export default function Services() {
  const navigate = useNavigate()

  return (
    <section
      id="services"
      style={{
        background: '#0c0c0e',
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
            marginBottom: 72,
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
              Nos services
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
              Tout ce qu'il faut pour{' '}
              <span className="grad-text">votre présence en ligne.</span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 300,
                fontSize: 16,
                color: 'rgba(255,255,255,0.42)',
                maxWidth: 320,
                lineHeight: 1.82,
                marginBottom: 28,
              }}
            >
              Pas de template. Pas de forfait. Chaque projet est construit pour votre secteur et vos objectifs.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: 'linear-gradient(135deg, #8b6cf7, #f0566a)',
                border: 'none',
                borderRadius: 100,
                padding: '13px 32px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#fff',
              }}
            >
              Parlons-en →
            </motion.button>
          </div>
        </motion.div>

        {/* ScrollStack — desktop */}
        <div className="services-stack-desktop">
          <ScrollStack>

            {/* 001 — Sites Web */}
            <ScrollStackItem>
              <div style={{ marginBottom: '16px' }}>
                <BorderGlow
                  backgroundColor="#0c0c0e"
                  borderRadius={12}
                  glowColor="139 108 247"
                  colors={['#8b6cf7', '#f0566a', '#c084fc']}
                  glowIntensity={0.8}
                >
                  <div style={{ padding: 'clamp(32px, 4vw, 52px) clamp(24px, 4vw, 56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontFamily: 'Inter', fontSize: '11px', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                        display: 'block', marginBottom: '16px',
                      }}>001</span>
                      <h3 style={{
                        fontFamily: 'Inter', fontWeight: 800,
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        letterSpacing: '-0.03em', color: '#ffffff',
                        lineHeight: 1.0, marginBottom: '24px',
                      }}>Sites Web</h3>
                      <p style={{
                        fontFamily: 'Inter', fontWeight: 300,
                        fontSize: '16px', color: 'rgba(255,255,255,0.48)',
                        lineHeight: 1.82, maxWidth: '560px', marginBottom: '32px',
                      }}>
                        Vitrines, e-commerce et landing pages sur mesure.
                        Livrés en 1 à 5 semaines, sans template, 100% personnalisés.
                        Chaque site est conçu pour convertir vos visiteurs en clients.
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Site Vitrine Essentiel', 'Site Premium 3D', 'Boutique E-Commerce', 'Landing Page', 'Refonte & Modernisation'].map(tag => (
                          <span key={tag} style={{
                            fontFamily: 'Inter', fontSize: '10px', fontWeight: 500,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            padding: '6px 16px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '100px',
                            color: 'rgba(255,255,255,0.36)',
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="service-card-arrow" style={{
                      width: '64px', height: '64px', flexShrink: 0, marginLeft: '32px',
                      border: '1px solid rgba(139,108,247,0.25)', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{
                        background: 'linear-gradient(135deg,#8b6cf7,#f0566a)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        fontSize: '24px', fontWeight: 700,
                      }}>→</span>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </ScrollStackItem>

            {/* 002 — SEO & Google Ads */}
            <ScrollStackItem>
              <div style={{ marginBottom: '16px' }}>
                <BorderGlow
                  backgroundColor="#0f0d18"
                  borderRadius={12}
                  glowColor="139 108 247"
                  colors={['#8b6cf7', '#f0566a', '#a855f7']}
                  glowIntensity={1.0}
                  fillOpacity={0.6}
                >
                  <div style={{ padding: 'clamp(32px, 4vw, 52px) clamp(24px, 4vw, 56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontFamily: 'Inter', fontSize: '11px', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                        display: 'block', marginBottom: '16px',
                      }}>002</span>
                      <h3 style={{
                        fontFamily: 'Inter', fontWeight: 800,
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '24px',
                        background: 'linear-gradient(135deg,#8b6cf7,#f0566a)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                      }}>SEO & Google Ads</h3>
                      <p style={{
                        fontFamily: 'Inter', fontWeight: 300,
                        fontSize: '16px', color: 'rgba(255,255,255,0.48)',
                        lineHeight: 1.82, maxWidth: '560px', marginBottom: '32px',
                      }}>
                        On ne fait pas de la visibilité pour cocher une case.
                        On met en place un système qui vous génère des clients chaque mois —
                        en organique avec le SEO, et en payant avec Google Ads.
                        Résultats SEO en 3 à 6 mois. Google Ads dès le premier jour.
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Audit & Stratégie SEO', 'Google Business Profile', 'Optimisation On-Page', 'Contenu & Blog', 'Suivi Mensuel', 'Création Campagnes Ads', 'Tracking Conversions', 'Rapport Mensuel'].map(tag => (
                          <span key={tag} style={{
                            fontFamily: 'Inter', fontSize: '10px', fontWeight: 500,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            padding: '6px 16px',
                            border: '1px solid rgba(139,108,247,0.25)',
                            borderRadius: '100px',
                            color: 'rgba(139,108,247,0.7)',
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="service-card-arrow" style={{
                      width: '64px', height: '64px', flexShrink: 0, marginLeft: '32px',
                      background: 'linear-gradient(135deg,#8b6cf7,#f0566a)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>→</span>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </ScrollStackItem>

            {/* 003 — Visuels 3D IA */}
            <ScrollStackItem>
              <div style={{ marginBottom: '16px' }}>
                <BorderGlow
                  backgroundColor="#0c0c0e"
                  borderRadius={12}
                  glowColor="240 86 106"
                  colors={['#f0566a', '#8b6cf7', '#c084fc']}
                  glowIntensity={0.8}
                >
                  <div style={{ padding: 'clamp(32px, 4vw, 52px) clamp(24px, 4vw, 56px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontFamily: 'Inter', fontSize: '11px', letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                        display: 'block', marginBottom: '16px',
                      }}>003</span>
                      <h3 style={{
                        fontFamily: 'Inter', fontWeight: 800,
                        fontSize: 'clamp(32px, 4vw, 52px)',
                        letterSpacing: '-0.03em', color: '#ffffff',
                        lineHeight: 1.0, marginBottom: '24px',
                      }}>Visuels 3D IA</h3>
                      <p style={{
                        fontFamily: 'Inter', fontWeight: 300,
                        fontSize: '16px', color: 'rgba(255,255,255,0.48)',
                        lineHeight: 1.82, maxWidth: '560px', marginBottom: '32px',
                      }}>
                        Rendus produit et ambiances générés par IA.
                        Sans shooting photo, sans studio, sans budget production.
                        Résultat professionnel en 48h, intégré directement dans votre site.
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Packshots Produit HD', 'Vidéo Produit Animée', 'Ambiances & Mises en Scène', 'Intégration Site', 'Déclinaisons Réseaux'].map(tag => (
                          <span key={tag} style={{
                            fontFamily: 'Inter', fontSize: '10px', fontWeight: 500,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            padding: '6px 16px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderRadius: '100px',
                            color: 'rgba(255,255,255,0.36)',
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="service-card-arrow" style={{
                      width: '64px', height: '64px', flexShrink: 0, marginLeft: '32px',
                      border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '24px', fontWeight: 700 }}>→</span>
                    </div>
                  </div>
                </BorderGlow>
              </div>
            </ScrollStackItem>

          </ScrollStack>
        </div>

        {/* Mobile fallback — flex-col sans sticky */}
        <div className="services-stack-mobile">
          {[
            {
              num: '001', title: 'Sites Web',
              desc: 'Vitrines, e-commerce et landing pages sur mesure. Livrés en 1 à 5 semaines, sans template, 100% personnalisés. Chaque site est conçu pour convertir vos visiteurs en clients.',
              tags: ['Site Vitrine Essentiel', 'Site Premium 3D', 'Boutique E-Commerce', 'Landing Page', 'Refonte & Modernisation'],
              accent: false,
            },
            {
              num: '002', title: 'SEO & Google Ads',
              desc: "On ne fait pas de la visibilité pour cocher une case. On met en place un système qui vous génère des clients chaque mois — en organique avec le SEO, et en payant avec Google Ads.",
              tags: ['Audit SEO', 'Google Business', 'On-Page', 'Campagnes Ads', 'Tracking', 'Rapport Mensuel'],
              accent: true,
            },
            {
              num: '003', title: 'Visuels 3D IA',
              desc: 'Rendus produit et ambiances générés par IA. Sans shooting photo, sans studio, sans budget production. Résultat professionnel en 48h.',
              tags: ['Packshots Produit HD', 'Vidéo Animée', 'Ambiances', 'Intégration Site'],
              accent: false,
            },
          ].map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-40px' }}
            >
              <BorderGlow
                backgroundColor={s.accent ? '#0f0d18' : '#0c0c0e'}
                borderRadius={12}
                glowColor={s.accent ? '139 108 247' : i === 2 ? '240 86 106' : '139 108 247'}
                colors={s.accent ? ['#8b6cf7', '#f0566a', '#a855f7'] : i === 2 ? ['#f0566a', '#8b6cf7', '#c084fc'] : ['#8b6cf7', '#f0566a', '#c084fc']}
                glowIntensity={s.accent ? 1.0 : 0.8}
                fillOpacity={s.accent ? 0.6 : 0.5}
              >
                <div style={{ padding: '32px 24px' }}>
                  <span style={{
                    fontFamily: 'Inter', fontSize: '11px', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)',
                    display: 'block', marginBottom: '12px',
                  }}>{s.num}</span>
                  <h3 style={{
                    fontFamily: 'Inter', fontWeight: 800, fontSize: '28px',
                    letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '16px',
                    ...(s.accent ? {
                      background: 'linear-gradient(135deg,#8b6cf7,#f0566a)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    } : { color: '#fff' }),
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: 'Inter', fontWeight: 300, fontSize: '14px',
                    color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, marginBottom: '20px',
                  }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {s.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: 'Inter', fontSize: '10px', fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '5px 12px',
                        border: `1px solid ${s.accent ? 'rgba(139,108,247,0.25)' : 'rgba(255,255,255,0.12)'}`,
                        borderRadius: '100px',
                        color: s.accent ? 'rgba(139,108,247,0.7)' : 'rgba(255,255,255,0.36)',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
