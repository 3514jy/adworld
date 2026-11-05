import { useEffect, useState } from 'react'

// 특징 카드 — 하나씩 돌아가며 강조 (원본 동작)
export default function FeatureList({ items }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setActive((i) => (i + 1) % items.length), 2500)
    return () => clearInterval(t)
  }, [items.length])

  return (
    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
      {items.map((f, i) => {
        const on = i === active
        return (
          <li
            key={f.title}
            className="backdrop-blur-sm border rounded-2xl px-5 sm:px-7 py-4 sm:py-5 cursor-default transition-all duration-500"
            style={
              on
                ? { backgroundColor: 'color-mix(in srgb, var(--color-gold) 20%, transparent)', borderColor: 'color-mix(in srgb, var(--color-gold) 50%, transparent)', transform: 'translateX(8px) scale(1.02)' }
                : { backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }
            }
            onMouseEnter={() => setActive(i)}
          >
            <p className={`text-base sm:text-xl font-bold transition-colors duration-500 ${on ? 'text-gold' : 'text-white/60'}`}>{f.title}</p>
            <p className={`text-sm sm:text-base mt-1 leading-relaxed transition-colors duration-500 ${on ? 'text-white' : 'text-white/40'}`}>{f.desc}</p>
          </li>
        )
      })}
    </ul>
  )
}
