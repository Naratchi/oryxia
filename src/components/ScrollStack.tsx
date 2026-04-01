import type { ReactNode, CSSProperties } from 'react'

interface ScrollStackProps {
  children: ReactNode
  style?: CSSProperties
}

export default function ScrollStack({ children, style }: ScrollStackProps) {
  const items = Array.isArray(children) ? children : [children]

  return (
    <div style={{ position: 'relative', ...style }}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            position: 'sticky',
            top: '80px',
            zIndex: i + 1,
            // Scroll budget : chaque wrapper occupe 65vh dans le flux normal
            // → la card suivante met 65vh de scroll à atteindre top:80px
            minHeight: i < items.length - 1 ? '65vh' : 'auto',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export function ScrollStackItem({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) {
  return <div style={style}>{children}</div>
}
