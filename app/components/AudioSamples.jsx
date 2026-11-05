import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

// 음성광고 샘플 — 한 번에 하나만 재생
export default function AudioSamples({ items }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(null)

  useEffect(() => () => audioRef.current?.pause(), [])

  const toggle = (src) => {
    const audio = audioRef.current
    if (!audio) return
    if (playing === src) {
      audio.pause()
      setPlaying(null)
      return
    }
    audio.src = src
    audio.play().then(() => setPlaying(src)).catch(() => setPlaying(null))
  }

  return (
    <div>
      <p className="text-white/90 text-sm sm:text-base font-semibold mb-4 flex items-center gap-2">
        <span className="w-1 h-4 bg-gold rounded-full inline-block" />음성 샘플
      </p>
      <audio ref={audioRef} preload="none" onEnded={() => setPlaying(null)} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-8 sm:mb-10">
        {items.map((a) => {
          const on = playing === a.src
          return (
            <li key={a.src}>
              <button
                type="button"
                onClick={() => toggle(a.src)}
                aria-pressed={on}
                aria-label={`${a.name} 음성광고 샘플 ${on ? '일시정지' : '재생'}`}
                className={`w-full text-left flex items-center gap-3 bg-white/8 hover:bg-white/12 border rounded-xl px-4 py-3 cursor-pointer transition-all ${on ? 'border-gold/60' : 'border-white/15 hover:border-gold/40'}`}
              >
                <span className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${on ? 'bg-gold/50' : 'bg-gold/20'}`}>
                  <Icon name={on ? 'Pause' : 'Play'} size={16} className={`text-gold ${on ? '' : 'ml-0.5'}`} />
                </span>
                <span className="min-w-0">
                  <span className="block text-white text-sm font-semibold truncate">{a.name}</span>
                  <span className="block text-white/40 text-xs">{a.category}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
