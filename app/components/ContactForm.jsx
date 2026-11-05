import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { MEDIA_OPTIONS } from '../data/site'

// hCaptcha는 브라우저에서만 불러옴 (빌드 시 HTML 생성 단계에서는 제외)
const HCaptcha = lazy(() => import('@hcaptcha/react-hcaptcha'))

const ENDPOINT = 'https://api.web3forms.com/submit'
// Web3Forms 공개용 키 (기존 사이트와 동일). 브라우저에 노출되는 용도의 키이며, .env에 다른 키를 넣으면 그것이 우선
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '6f7012ff-1770-43bc-a5d8-d36169d62f5b'
// hCaptcha 사이트키(공개용 키). .env에 없으면 Web3Forms 무료 플랜 공용 키를 사용 (Web3Forms 문서 기준)
const HCAPTCHA_SITEKEY = import.meta.env.VITE_HCAPTCHA_SITEKEY || '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

const field = 'w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-line bg-bg text-inherit text-sm focus:outline-none focus:border-gold transition-colors'
const label = 'block text-xs sm:text-[13px] font-medium text-dim mb-1 sm:mb-1.5'
const EMPTY = { name: '', phone: '', company: '', media: '', message: '' }

export default function ContactForm() {
  const [mounted, setMounted] = useState(false)
  const [form, setForm] = useState(EMPTY)
  const [token, setToken] = useState('')
  const [status, setStatus] = useState({ type: 'idle', msg: '' })
  const captchaRef = useRef(null)
  const honeypot = useRef(null)

  useEffect(() => setMounted(true), [])

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    if (honeypot.current?.checked) return // 봇이 숨김 칸을 체크한 경우 무시

    if (!ACCESS_KEY) {
      setStatus({ type: 'error', msg: '상담 접수 설정이 아직 완료되지 않았습니다. 전화로 문의해 주세요.' })
      return
    }
    if (!token) {
      setStatus({ type: 'error', msg: '"사람입니다" 확인을 완료한 뒤 다시 눌러 주세요.' })
      return
    }

    setStatus({ type: 'sending', msg: '' })
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: '[AdWorld] New Inquiry',
          from_name: 'AdWorld Website',
          Name: form.name.trim(),
          Phone: form.phone.trim(),
          Company: form.company.trim(),
          'Media Type': form.media,
          Message: form.message.trim(),
          'h-captcha-response': token,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error('send failed')

      setForm(EMPTY)
      setStatus({ type: 'done', msg: '상담 신청이 접수되었습니다. 영업일 기준 1일 이내에 연락드리겠습니다.' })
    } catch {
      setStatus({ type: 'error', msg: '접수 중 문제가 생겼습니다. 잠시 후 다시 시도하시거나 전화로 문의해 주세요.' })
    } finally {
      setToken('')
      captchaRef.current?.resetCaptcha()
    }
  }

  const sending = status.type === 'sending'

  return (
    <form onSubmit={onSubmit}>
      {/* 봇 차단용 숨김 칸 — 사람에게는 보이지 않음 */}
      <input ref={honeypot} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div>
          <label htmlFor="cf-name" className={label}>이름 *</label>
          <input id="cf-name" required maxLength={30} autoComplete="name" placeholder="홍길동" className={field} type="text" value={form.name} onChange={set('name')} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>연락처 *</label>
          <input id="cf-phone" required maxLength={20} pattern="[0-9\-+ ]{8,20}" title="숫자와 - 만 입력해 주세요" autoComplete="tel" inputMode="tel" placeholder="010-0000-0000" className={field} type="tel" value={form.phone} onChange={set('phone')} />
        </div>
      </div>
      <div className="mb-3 sm:mb-4">
        <label htmlFor="cf-company" className={label}>회사명</label>
        <input id="cf-company" maxLength={50} autoComplete="organization" placeholder="회사명을 입력해주세요" className={field} type="text" value={form.company} onChange={set('company')} />
      </div>
      <div className="mb-3 sm:mb-4">
        <label htmlFor="cf-media" className={label}>관심 매체 *</label>
        <select id="cf-media" required className={field} value={form.media} onChange={set('media')}>
          <option value="" disabled>선택해주세요</option>
          {MEDIA_OPTIONS.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <div className="mb-3 sm:mb-4">
        <label htmlFor="cf-message" className={label}>문의 내용 *</label>
        <textarea id="cf-message" required maxLength={2000} placeholder="문의하실 내용을 자유롭게 작성해주세요." className={`${field} resize-y min-h-[100px] sm:min-h-[120px]`} value={form.message} onChange={set('message')} />
      </div>

      <div className="mb-3 min-h-[78px]">
        {mounted && (
          <Suspense fallback={null}>
            <HCaptcha ref={captchaRef} sitekey={HCAPTCHA_SITEKEY} languageOverride="ko" reCaptchaCompat={false} onVerify={setToken} onExpire={() => setToken('')} />
          </Suspense>
        )}
      </div>

      <button type="submit" disabled={sending} className="w-full bg-gold text-on-accent py-3 sm:py-4 rounded-[10px] font-bold text-sm sm:text-base hover:bg-gold-light transition-all mt-1 sm:mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
        {sending ? '접수 중...' : '상담 신청하기'}
      </button>

      <p role="status" aria-live="polite" className={`text-sm mt-3 ${status.type === 'error' ? 'text-red-400' : 'text-gold'}`}>
        {status.msg}
      </p>
    </form>
  )
}
