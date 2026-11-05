import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Icon from './Icon'
import { COMPANY, MEDIA_NAV } from '../data/site'

const navClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-gold ${isActive ? 'text-gold' : 'text-dim'}`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onMedia = pathname.startsWith('/media')

  // 페이지 이동하면 모바일 메뉴 닫기
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-2xl border-b border-line">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 flex items-center justify-between h-16 sm:h-[72px]">
        <Link to="/" className="flex items-center" aria-label="애드월드 홈">
          <img alt="애드월드" className="h-10 sm:h-12 w-auto" src="/images/logo-new.png" />
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="주 메뉴">
          {/* 광고매체: 마우스를 올리거나 키보드 포커스 시 하위 메뉴 표시 */}
          <div className="relative group">
            <Link
              to="/media/bus"
              className={`text-sm font-medium transition-colors hover:text-gold flex items-center gap-1 ${onMedia ? 'text-gold' : 'text-dim'}`}
            >
              광고매체 <Icon name="ChevronDown" size={14} />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block group-focus-within:block">
              <ul className="bg-card border border-line rounded-xl shadow-sm py-2 w-36">
                {MEDIA_NAV.map((m) => (
                  <li key={m.to}>
                    <NavLink to={m.to} className={({ isActive }) => `block px-4 py-2 text-sm hover:bg-gold/5 hover:text-gold ${isActive ? 'text-gold font-semibold' : 'text-dim'}`}>
                      {m.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <NavLink to="/process" className={navClass}>진행절차</NavLink>
          <NavLink to="/contact" className={navClass}>상담문의</NavLink>
          <NavLink to="/history" className={navClass}>회사연혁</NavLink>
          <a href={COMPANY.brochure} target="_blank" rel="noopener noreferrer" className="bg-gold text-on-accent px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-light transition-colors flex items-center gap-1.5">
            <Icon name="Download" size={14} />회사 소개서
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 cursor-pointer"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-bg/97 border-t border-line px-5 py-4" aria-label="모바일 메뉴">
          <p className="text-xs text-dim mb-2">광고매체</p>
          <ul className="grid grid-cols-2 gap-2 mb-4">
            {MEDIA_NAV.map((m) => (
              <li key={m.to}>
                <NavLink to={m.to} className={({ isActive }) => `block px-3 py-2.5 rounded-lg border text-sm font-medium ${isActive ? 'border-gold text-gold bg-gold/5' : 'border-line bg-card'}`}>
                  {m.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="space-y-1 mb-4">
            {[['/process', '진행절차'], ['/contact', '상담문의'], ['/history', '회사연혁']].map(([to, label]) => (
              <li key={to}>
                <NavLink to={to} className={({ isActive }) => `block py-2.5 text-[15px] font-medium ${isActive ? 'text-gold' : ''}`}>{label}</NavLink>
              </li>
            ))}
          </ul>
          <a href={COMPANY.brochure} target="_blank" rel="noopener noreferrer" className="bg-gold text-on-accent px-5 py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5">
            <Icon name="Download" size={14} />회사 소개서
          </a>
        </nav>
      )}
    </header>
  )
}
