const line1Items = [
  'Sites Web Premium', 'Design Sur Mesure', 'Visuels 3D IA', 'SEO & Google Ads',
  'E-Commerce', 'Landing Pages', 'Refonte Web', 'Résultats Mesurables',
]

const line2Items = [
  'Votre site en 2 à 5 semaines', '100% Sur Mesure', 'Zéro Template', 'SEO Intégré',
  'Mobile First', 'Livraison Garantie', 'Support Inclus', 'Basé à Bruxelles',
]

function MarqueeTrack({
  items,
  direction = 1,
  separator = 'dot',
}: {
  items: string[]
  direction?: 1 | 2
  separator?: 'dot' | 'square'
}) {
  const doubled = [...items, ...items]
  return (
    <div style={{ display: 'flex', overflow: 'hidden', padding: '6px 0' }}>
      <div
        className={direction === 1 ? 'animate-marquee1' : 'animate-marquee2'}
        style={{ display: 'flex', whiteSpace: 'nowrap', willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'Inter',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: 'rgba(255,255,255,0.28)',
                padding: '0 28px',
              }}
            >
              {item}
            </span>
            {separator === 'dot' ? (
              <span style={{ color: '#8b6cf7', fontSize: 18 }}>·</span>
            ) : (
              <span
                style={{
                  display: 'inline-block',
                  width: 4,
                  height: 4,
                  background: '#8b6cf7',
                  opacity: 0.6,
                  borderRadius: 1,
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: 120,
        background: '#0c0c0e',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Diagonal band */}
      <div
        style={{
          position: 'absolute',
          left: '-10%',
          right: '-10%',
          transform: 'rotate(-2deg)',
          background: 'rgba(255,255,255,0.025)',
          padding: '4px 0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <MarqueeTrack items={line1Items} direction={1} separator="dot" />
        <MarqueeTrack items={line2Items} direction={2} separator="square" />
      </div>

      {/* Fade edges */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 120,
          background: 'linear-gradient(to right, #0c0c0e, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 120,
          background: 'linear-gradient(to left, #0c0c0e, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
