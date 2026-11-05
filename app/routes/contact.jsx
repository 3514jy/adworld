import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { COMPANY } from '../data/site'
import { seo } from '../lib/seo'

export const meta = () =>
  seo({
    title: '상담 문의',
    description: `부산 버스·지하철·전광판 광고 무료 상담. 전화 ${COMPANY.tel} 또는 온라인으로 문의하시면 빠르게 연락드립니다.`,
    path: '/contact',
  })

const INFO = [
  { icon: 'MapPin', label: '주소', value: COMPANY.address },
  { icon: 'Phone', label: '전화', value: COMPANY.tel, href: `tel:${COMPANY.tel}` },
  { icon: 'Mail', label: '이메일', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: 'Clock', label: '영업시간', value: COMPANY.hours },
]

export default function Contact() {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <SectionTitle as="h1" eyebrow="Contact Us" title="상담 문의" desc="궁금한 점이 있으시면 언제든지 문의해 주세요." center={false} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
          <Reveal>
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">{COMPANY.name}</h2>
            <ul>
              {INFO.map((it) => (
                <li key={it.label} className="flex gap-3 sm:gap-4 items-start mb-5 sm:mb-6">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gold/10 rounded-[10px] flex items-center justify-center shrink-0 text-gold">
                    <Icon name={it.icon} size={16} />
                  </div>
                  <div>
                    <strong className="block text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">{it.label}</strong>
                    {it.href ? (
                      <a href={it.href} className="text-xs sm:text-sm text-dim hover:text-gold">{it.value}</a>
                    ) : (
                      <span className="text-xs sm:text-sm text-dim">{it.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="bg-card border border-line rounded-xl p-5 sm:p-8 lg:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
