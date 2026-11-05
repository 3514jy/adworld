import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon'

function Label({ children, className = '' }) {
  return (
    <p className={`text-white/90 font-semibold flex items-center gap-2 ${className}`}>
      <span className="w-1 h-4 bg-gold rounded-full inline-block" />{children}
    </p>
  )
}

function Thumb({ image, wide, onOpen }) {
  return (
    <button type="button" onClick={onOpen} className={`cursor-pointer group text-left ${wide ? 'col-span-full' : ''}`} aria-label={`${image.alt} 크게 보기`}>
      <div className={`${wide ? 'aspect-[5/1]' : 'aspect-[4/3]'} rounded-lg border border-white/20 overflow-hidden bg-white/10 group-hover:border-gold/60 transition-colors`}>
        <img alt={image.alt} loading="lazy" className="w-full h-full object-contain" src={image.src} />
      </div>
      <p className="text-[11px] sm:text-xs text-gold mt-1 sm:mt-1.5 text-center truncate font-medium">{image.alt}</p>
    </button>
  )
}

// 이미지 그룹: 제목 + 썸네일 그리드
export function GalleryGroup({ group, onOpen }) {
  return (
    <div>
      <Label className="text-sm sm:text-base mb-2 sm:mb-3">{group.title}</Label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {group.images.map((img, i) => (
          <Thumb key={img.src} image={img} wide={group.wide} onOpen={() => onOpen(group.images, i)} />
        ))}
      </div>
    </div>
  )
}

// 두 그룹을 데스크톱에서 한 줄에 나란히 (각 2장씩), 모바일에선 위아래로
export function GalleryPair({ pair, onOpen }) {
  return (
    <div>
      <div className="hidden sm:block">
        <div className="grid grid-cols-4 gap-3 mb-3">
          {pair.map((g) => <Label key={g.title} className="col-span-2 text-base">{g.title}</Label>)}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {pair.flatMap((g) => g.images.map((img, i) => (
            <Thumb key={img.src} image={img} onOpen={() => onOpen(g.images, i)} />
          )))}
        </div>
      </div>
      <div className="sm:hidden space-y-5">
        {pair.map((g) => (
          <div key={g.title}>
            <Label className="text-sm mb-2">{g.title}</Label>
            <div className="grid grid-cols-2 gap-2">
              {g.images.map((img, i) => <Thumb key={img.src} image={img} onOpen={() => onOpen(g.images, i)} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// 이미지 크게 보기 — Esc 닫기, ←/→ 이동
export function Lightbox({ images, index, onClose, onMove }) {
  const open = images && index !== null
  const go = useCallback((d) => onMove((index + d + images.length) % images.length), [index, images, onMove])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, go, onClose])

  if (!open) return null
  const img = images[index]
  const multi = images.length > 1

  return (
    <div role="dialog" aria-modal="true" aria-label={img.alt} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-10" onClick={onClose}>
      <button type="button" onClick={onClose} className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 text-white/70 hover:text-white cursor-pointer" aria-label="닫기">
        <Icon name="X" size={28} />
      </button>
      {multi && (
        <button type="button" onClick={(e) => { e.stopPropagation(); go(-1) }} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer" aria-label="이전 이미지">
          <Icon name="ChevronLeft" size={28} />
        </button>
      )}
      <figure className="max-w-full" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-h-[80vh] sm:max-h-[85vh] w-auto mx-auto rounded-lg" />
        <figcaption className="text-center text-white/70 text-sm mt-3">
          {img.alt}{multi && ` (${index + 1} / ${images.length})`}
        </figcaption>
      </figure>
      {multi && (
        <button type="button" onClick={(e) => { e.stopPropagation(); go(1) }} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer" aria-label="다음 이미지">
          <Icon name="ChevronRight" size={28} />
        </button>
      )}
    </div>
  )
}
