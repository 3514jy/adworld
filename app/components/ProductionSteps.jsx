const num = (i) => String(i + 1).padStart(2, '0')

// 음성광고 제작 과정 — 데스크톱 가로, 모바일 세로
export default function ProductionSteps({ steps }) {
  return (
    <div>
      <p className="text-white/90 text-sm sm:text-base font-semibold mb-5 sm:mb-6 flex items-center gap-2">
        <span className="w-1 h-4 bg-gold rounded-full inline-block" />제작 과정
      </p>
      <div className="hidden sm:block relative">
        <div className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-gold/40 via-gold/20 to-gold/40" aria-hidden="true" />
        <ol className="flex items-start justify-between">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col items-center text-center relative z-10 flex-1">
            <div className="w-10 h-10 rounded-full bg-slide-1 border-2 border-gold/50 flex items-center justify-center mb-3 shadow-[inset_0_0_8px_rgba(200,146,42,0.25)]">
              <span className="text-gold font-bold text-sm">{num(i)}</span>
            </div>
            <p className="text-gold text-sm font-bold mb-1">{s.title}</p>
            <p className="text-white/50 text-xs leading-relaxed max-w-[140px]">{s.desc}</p>
          </li>
        ))}
        </ol>
      </div>
      <ol className="sm:hidden flex flex-col">
        {steps.map((s, i) => (
          <li key={s.title} className="flex items-start gap-3">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-slide-1 border-2 border-gold/50 flex items-center justify-center shrink-0 shadow-[inset_0_0_8px_rgba(200,146,42,0.25)]">
                <span className="text-gold font-bold text-xs">{num(i)}</span>
              </div>
              {i < steps.length - 1 && <div className="w-px h-6 bg-gold/20" />}
            </div>
            <div className="pb-4">
              <p className="text-gold text-sm font-bold">{s.title}</p>
              <p className="text-white/50 text-xs mt-0.5">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
