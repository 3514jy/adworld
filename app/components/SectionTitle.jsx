import Reveal from './Reveal'

// 섹션·페이지 상단 제목. as="h1"이면 페이지 대표 제목으로 사용
export default function SectionTitle({ eyebrow, title, desc, as: Tag = 'h2', center = true, className = '' }) {
  return (
    <Reveal className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="font-display text-[12px] sm:text-[13px] tracking-[3px] uppercase text-gold mb-2 sm:mb-3">{eyebrow}</p>
      )}
      <Tag className="text-[clamp(24px,4vw,42px)] font-bold leading-tight mb-3 sm:mb-4">{title}</Tag>
      {desc && (
        <p className={`text-dim text-sm sm:text-base max-w-[560px] whitespace-pre-line ${center ? 'mx-auto' : ''}`}>{desc}</p>
      )}
    </Reveal>
  )
}
