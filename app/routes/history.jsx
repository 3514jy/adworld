import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { VISION, HISTORY, NETWORK } from '../data/site'
import { seo } from '../lib/seo'

export const meta = () =>
  seo({
    title: '회사 연혁',
    description: '2010년 부산 버스 음성광고 매체사로 시작한 애드월드. 부산·양산·울산·창원 네트워크와 매체사 연혁을 소개합니다.',
    path: '/history',
  })

export default function History() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-[900px] mx-auto px-5 sm:px-6">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="font-display text-[12px] sm:text-[13px] tracking-[3px] uppercase text-gold mb-2 sm:mb-3">Our History</p>
          <h1 className="text-[clamp(28px,5vw,48px)] font-bold leading-tight mb-4 sm:mb-6">주식회사 애드월드</h1>
          <p className="text-dim text-base sm:text-lg max-w-[600px] mx-auto whitespace-pre-line leading-relaxed">
            {'안 해본 클라이언트는 있어도,\n한 번만 의뢰한 클라이언트는 없습니다.'}
          </p>
        </Reveal>

        <Reveal className="bg-card border border-line rounded-2xl p-6 sm:p-10 mb-12 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-gold">VISION</h2>
          <p className="text-[15px] sm:text-base leading-relaxed mb-3">{VISION.lead}</p>
          <p className="text-sm sm:text-[15px] text-dim leading-relaxed">{VISION.sub}</p>
        </Reveal>

        <section>
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-12">연혁</h2>
          <div className="relative">
            <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-line sm:-translate-x-0.5" aria-hidden="true" />
            <ol>
              {HISTORY.map((h, i) => {
                const left = i % 2 === 0
                return (
                  <li key={`${h.year}-${h.title}`}>
                    <Reveal y={20} className={`relative flex items-start mb-8 sm:mb-10 ${left ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                      <div className="absolute left-5 sm:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-card -translate-x-1/2 mt-1.5 z-10" aria-hidden="true" />
                      <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${left ? 'sm:pr-4 sm:text-right' : 'sm:pl-4 sm:text-left sm:ml-auto'}`}>
                        <span className="font-display text-2xl sm:text-3xl font-bold text-gold">{h.year}</span>
                        <h3 className="text-[15px] sm:text-lg font-bold mt-1">{h.title}</h3>
                        {h.desc && <p className="text-sm text-dim mt-1">{h.desc}</p>}
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 sm:mb-8">네트워크</h2>
          <ul className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {NETWORK.map((n) => (
              <li key={n.city} className="bg-card border border-line rounded-xl p-5 sm:p-6 text-center hover:border-gold/30 transition-colors">
                <Icon name="MapPin" size={24} className="mx-auto mb-3 text-gold" />
                <h3 className="text-lg font-bold">{n.city}</h3>
                {n.badge && <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-gold/10 text-gold font-medium mt-1 mb-2">{n.badge}</span>}
                <p className={`text-sm text-dim ${n.badge ? '' : 'mt-2'}`}>{n.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="text-center text-xs text-dim mt-10 sm:mt-12">※ 연혁 내용은 추후 업데이트될 수 있습니다.</p>
      </div>
    </div>
  )
}
