import { Link } from 'react-router'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import CtaBanner from '../components/CtaBanner'
import { PROCESS } from '../data/site'
import { SERVICES } from '../data/media'
import { seo } from '../lib/seo'

export const meta = () =>
  seo({
    title: '광고 진행 절차',
    description: '상담과 타겟 분석부터 매체 선정, 광고 기획·제작, 집행과 사후 관리까지. 애드월드의 오프라인 광고 진행 과정을 안내합니다.',
    path: '/process',
  })

const voiceSteps = SERVICES.find((s) => s.id === 'services-bus').steps

export default function Process() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
          <SectionTitle as="h1" eyebrow="Process" title="진행 프로세스" desc="상담부터 집행까지, 체계적인 프로세스로 진행됩니다." />
          <div className="relative mt-8 sm:mt-12">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gold via-line to-gold opacity-30" aria-hidden="true" />
          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="text-center relative">
                <Reveal delay={i * 0.1}>
                  <div className="font-display w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-card border-2 border-gold flex items-center justify-center mx-auto mb-3 sm:mb-5 text-xl sm:text-2xl font-bold text-gold relative z-10">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-sm sm:text-lg font-bold mb-1 sm:mb-2">{p.title}</h2>
                  <p className="text-xs sm:text-sm text-dim whitespace-pre-line">{p.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          <Reveal className="bg-card border border-line rounded-2xl p-6 sm:p-10">
            <h2 className="text-lg sm:text-xl font-bold mb-2">버스 음성광고는 이렇게 만들어져요</h2>
            <p className="text-sm sm:text-[15px] text-dim mb-6">계약부터 송출까지 아래 순서로 진행됩니다.</p>
            <ol className="space-y-3">
              {voiceSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4 items-start">
                  <span className="font-display text-gold font-bold w-8 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="font-semibold">{s.title}</span>
                    <span className="block text-sm text-dim">{s.desc}</span>
                  </span>
                </li>
              ))}
            </ol>
            <Link to="/media/bus" className="inline-block mt-6 text-sm font-semibold text-gold hover:underline">버스광고 자세히 보기</Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
      <div className="pb-10 sm:pb-16" />
    </>
  )
}
