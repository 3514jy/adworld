import { useState } from 'react'
import { NavLink } from 'react-router'
import Icon from './Icon'
import Reveal from './Reveal'
import FeatureList from './FeatureList'
import AudioSamples from './AudioSamples'
import ProductionSteps from './ProductionSteps'
import CtaBanner from './CtaBanner'
import { GalleryGroup, GalleryPair, Lightbox } from './Gallery'
import { MEDIA_NAV } from '../data/site'

function Tag({ children, small }) {
  return small ? (
    <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gold/15 text-gold text-xs sm:text-sm font-semibold border border-gold/25">{children}</span>
  ) : (
    <span className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold/20 text-gold text-sm sm:text-base font-semibold border border-gold/30">{children}</span>
  )
}

// 매체 간 이동 탭 (실제 링크라 검색엔진도 따라감)
function MediaTabs() {
  return (
    <nav aria-label="광고 매체" className="border-b border-line bg-bg">
      <ul className="max-w-[1100px] mx-auto px-5 sm:px-8 flex gap-1 sm:gap-2 overflow-x-auto">
        {MEDIA_NAV.map((m) => (
          <li key={m.to} className="shrink-0">
            <NavLink
              to={m.to}
              className={({ isActive }) => `block px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-[15px] font-semibold border-b-2 transition-colors ${isActive ? 'border-gold text-gold' : 'border-transparent text-dim hover:text-gold'}`}
            >
              {m.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function MediaPage({ media }) {
  const [box, setBox] = useState({ images: null, index: null })
  const open = (images, index) => setBox({ images, index })

  return (
    <>
      <div className="pt-16 sm:pt-[72px]">
        <MediaTabs />
      </div>

      <section className={`relative overflow-hidden ${media.bg}`}>
        <div className="relative z-10 max-w-[1100px] mx-auto w-full px-5 sm:px-8 py-16 sm:py-24">
          <Reveal className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
              <Icon name={media.icon} size={28} strokeWidth={1.5} className="text-gold sm:w-8 sm:h-8" />
            </div>
            <h1 className="text-white text-2xl sm:text-4xl font-bold">{media.title}</h1>
          </Reveal>
          <Reveal y={20}>
            <p className="text-white/80 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8 max-w-[750px]">{media.desc}</p>
          </Reveal>
          <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap">
            {media.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>

          <FeatureList items={media.features} />

          <Reveal className="mt-8 sm:mt-10">
            {media.audio && <AudioSamples items={media.audio} />}
            {media.steps && <ProductionSteps steps={media.steps} />}

            {(media.pairs || media.groups) && (
              <div className="space-y-6 sm:space-y-8">
                {media.pairs?.map((p, i) => <GalleryPair key={i} pair={p} onOpen={open} />)}
                {media.groups?.map((g) => <GalleryGroup key={g.title} group={g} onOpen={open} />)}
              </div>
            )}
          </Reveal>

          {media.subSections?.map((sub) => (
            <Reveal key={sub.title} className="pt-10 sm:pt-14 mt-10 sm:mt-14 border-t border-white/10">
              <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">{sub.title}</h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 max-w-[750px]">{sub.desc}</p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {sub.tags.map((t) => <Tag key={t} small>{t}</Tag>)}
              </div>
              <div className="space-y-6 sm:space-y-8">
                {sub.groups.map((g) => <GalleryGroup key={g.title} group={g} onOpen={open} />)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="py-6 sm:py-10">
        <CtaBanner />
      </div>

      <Lightbox
        images={box.images}
        index={box.index}
        onClose={() => setBox({ images: null, index: null })}
        onMove={(index) => setBox((b) => ({ ...b, index }))}
      />
    </>
  )
}
