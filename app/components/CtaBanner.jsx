import { Link } from 'react-router'
import Icon from './Icon'
import Reveal from './Reveal'
import { COMPANY } from '../data/site'

export default function CtaBanner() {
  return (
    <div className="my-6 sm:my-10 max-w-[1200px] mx-auto px-5 sm:px-6">
      <Reveal className="bg-gradient-to-br from-gold via-gold-dark to-gold rounded-2xl px-6 sm:px-12 py-10 sm:py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
        <p className="text-[clamp(20px,4vw,36px)] font-extrabold text-on-accent mb-5 sm:mb-6 relative">
          광고, 어디서부터 시작해야 할지 모르겠다면?
        </p>
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap relative">
          <a href={`tel:${COMPANY.tel}`} className="bg-bg text-gold px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] font-bold text-sm sm:text-base hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <Icon name="Phone" size={18} />{COMPANY.tel}
          </a>
          <Link to="/contact" className="border-2 border-on-accent/30 text-on-accent px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] font-bold text-sm sm:text-base hover:border-on-accent transition-all flex items-center gap-2">
            <Icon name="Mail" size={18} />온라인 상담 신청
          </Link>
        </div>
      </Reveal>
    </div>
  )
}
