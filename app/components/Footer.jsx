import { Link } from 'react-router'
import Icon from './Icon'
import { asset } from '../lib/asset'
import { COMPANY, MEDIA_NAV } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold/20 pt-10 sm:pt-16 pb-6 sm:pb-8 bg-card">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <img alt="애드월드" className="h-12 w-auto mb-2" src={asset("/images/logo-new.png")} />
            <p className="text-sm text-dim leading-relaxed">
              부산 오프라인 광고 전문<br /><span className="text-gold font-medium">원스톱 파트너</span>
            </p>
            <Link to="/contact" className="inline-block mt-4 px-5 py-2 rounded-full bg-gold text-on-accent text-xs font-bold hover:bg-gold-light transition-colors">
              무료 상담 신청
            </Link>
          </div>
          <div>
            <p className="text-sm font-bold mb-3 sm:mb-4">광고 매체</p>
            <ul className="space-y-2">
              {MEDIA_NAV.map((m) => (
                <li key={m.to}>
                  <Link to={m.to} className="text-[13px] text-dim hover:text-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gold/50" />{m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold mb-3 sm:mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-[13px] text-dim">
                <Icon name="MapPin" size={15} className="text-gold/60 mt-0.5 shrink-0" /><span>{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-dim">
                <Icon name="Phone" size={15} className="text-gold/60 shrink-0" /><a href={`tel:${COMPANY.tel}`} className="hover:text-gold">{COMPANY.tel}</a>
              </li>
              <li className="flex items-center gap-2.5 text-[13px] text-dim">
                <Icon name="Mail" size={15} className="text-gold/60 shrink-0" /><a href={`mailto:${COMPANY.email}`} className="hover:text-gold">{COMPANY.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line pt-5 sm:pt-6 text-center text-[11px] sm:text-xs text-dim tracking-wider">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
