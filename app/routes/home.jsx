import { Link } from 'react-router'
import { motion } from 'framer-motion'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import CtaBanner from '../components/CtaBanner'
import { seo } from '../lib/seo'
import { COMPANY, HERO_CARDS, MARQUEE_WORDS, ABOUT_CARDS, ABOUT_BADGES, KEY_NUMBERS } from '../data/site'

export const meta = () =>
  seo({
    title: '부산 오프라인 광고 전문 - (주)애드월드',
    description: '부산·울산·경남 오프라인 광고 전문 대행사 애드월드. 버스광고, 지하철광고, 전광판광고, 미디어폴 등 기획부터 집행까지 원스톱 서비스.',
    path: '/',
  })

const HEADLINE = '오프라인 광고의 모든 것'
const ABOUT_LINE1 = '안 해본 클라이언트는 있어도,'
const ABOUT_LINE2 = '한 번만 의뢰한 클라이언트는 없습니다.'

const letter = { hidden: { opacity: 0, y: 40, rotateX: -60 }, show: { opacity: 1, y: 0, rotateX: 0 } }

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[url('/images/hero-bg.png')] bg-center bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-b from-bg/75 via-bg/90 to-bg z-0" />
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-5 sm:px-6 pt-[120px] sm:pt-[140px] pb-16 sm:pb-24 flex flex-col flex-1 justify-center">
        <div className="text-center mb-10 sm:mb-14" style={{ perspective: 600 }}>
          <motion.h1
            className="text-[clamp(30px,6vw,68px)] font-black leading-[1.15] mb-4 sm:mb-5 flex flex-wrap justify-center"
            initial="hidden" animate="show" transition={{ staggerChildren: 0.06 }}
            aria-label={HEADLINE}
          >
            {[...HEADLINE].map((ch, i) => (
              <motion.span key={i} variants={letter} transition={{ duration: 0.5 }} aria-hidden="true" className={ch === ' ' ? 'inline-block w-[0.3em]' : 'inline-block'}>
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-[clamp(16px,2.5vw,28px)] leading-relaxed text-dim"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
          >
            기획부터 집행까지 함께하는 <span className="text-gold font-bold">원스톱 파트너</span> 애드월드
          </motion.p>
        </div>

        <motion.ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[900px] mx-auto w-full"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
        >
          {HERO_CARDS.map((c) => (
            <li key={c.href}>
              <Link to={c.href} className="group h-full rounded-2xl border-2 border-line hover:border-gold bg-card hover:bg-gold/5 shadow-sm hover:shadow-[0_8px_32px_rgba(212,169,16,0.15)] transition-all duration-300 flex flex-col items-center justify-center py-8 sm:py-10 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors">
                  <Icon name={c.icon} size={36} strokeWidth={1.5} className="text-gold sm:w-11 sm:h-11" />
                </div>
                <p className="text-sm sm:text-lg font-bold group-hover:text-gold transition-colors">{c.title}</p>
                <p className="text-[10px] sm:text-xs text-dim mt-1">{c.sub}</p>
              </Link>
            </li>
          ))}
        </motion.ul>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <Link to="/contact" className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-gold text-on-accent font-bold text-sm sm:text-base hover:bg-gold-light hover:scale-105 transition-all shadow-[0_0_24px_rgba(160,120,48,0.25)]">무료 상담 신청</Link>
          <Link to="/media/bus" className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border-2 border-gold/60 text-gold font-bold text-sm sm:text-base hover:bg-gold/10 hover:border-gold transition-all">광고 매체 보기</Link>
        </div>
      </div>
      <div className="relative z-10 bg-bg/80 backdrop-blur-sm border-t border-line/30 py-2.5 sm:py-3 px-4 sm:px-6">
        <p className="text-center text-[11px] sm:text-sm text-dim">
          {COMPANY.address} &nbsp; T. {COMPANY.tel} &nbsp; E-mail. {COMPANY.email}
        </p>
      </div>
    </section>
  )
}

function Marquee() {
  const row = (
    <span className="font-display text-[clamp(16px,3vw,32px)] font-bold whitespace-nowrap px-6 sm:px-10 text-dim opacity-50">
      {MARQUEE_WORDS.map((w, i) => (
        <span key={w}>{i > 0 && <span className="text-gold mx-2 sm:mx-4">·</span>}{w}</span>
      ))}
    </span>
  )
  return (
    <div className="border-t border-b border-line py-3 sm:py-5 overflow-hidden" aria-hidden="true">
      <div className="flex animate-marquee w-max">{row}{row}{row}{row}</div>
    </div>
  )
}

function About() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <SectionTitle eyebrow="About Us" title="고객이 만족하는 마케팅 에이전시" />
          <Reveal y={10}>
            <p className="text-[clamp(15px,2vw,20px)] text-dim leading-relaxed max-w-[700px] mx-auto">
              {ABOUT_LINE1}<br /><span className="text-gold font-semibold">{ABOUT_LINE2}</span>
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {ABOUT_CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1} className="bg-card border border-line rounded-xl px-5 sm:px-7 py-7 sm:py-9 text-center hover:border-gold/30 hover:-translate-y-1 transition-all shadow-sm">
              <Icon name={c.icon} size={32} strokeWidth={1.5} className="mx-auto mb-4 text-gold" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-sm sm:text-base text-dim leading-relaxed">{c.desc}</p>
            </Reveal>
          ))}
        </div>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {ABOUT_BADGES.map((b) => (
            <li key={b} className="px-4 py-2 rounded-full border border-line bg-card text-[13px] sm:text-sm text-dim">{b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function KeyNumbers() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <SectionTitle eyebrow="Key Numbers" title="왜 오프라인 광고인가?" className="mb-8 sm:mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {KEY_NUMBERS.map((k, i) => (
            <Reveal key={k.label} delay={i * 0.1} className="bg-card border border-line rounded-xl px-4 sm:px-6 py-8 sm:py-10 text-center hover:border-gold/30 hover:-translate-y-1 transition-all">
              <Icon name={k.icon} size={28} strokeWidth={1.5} className="mx-auto mb-3 text-gold/60" />
              <div className="font-display text-gold leading-none mb-1 flex items-baseline justify-center gap-1">
                <span className="text-[clamp(36px,5.5vw,60px)] font-extrabold">{k.value}</span>
                <span className="text-[clamp(16px,2.5vw,24px)] font-semibold">{k.unit}</span>
              </div>
              <p className="text-sm sm:text-base text-dim mt-2">{k.label}</p>
              <p className="text-[11px] sm:text-xs text-dim/70 mt-2 leading-relaxed">{k.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <KeyNumbers />
      <CtaBanner />
      <div className="pb-10 sm:pb-16" />
    </>
  )
}
