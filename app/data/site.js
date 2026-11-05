// 회사 기본 정보 — 바뀌면 여기만 고치면 됩니다
export const COMPANY = {
  name: '(주)애드월드',
  address: '부산시 남구 문현로66번길 131, 3층',
  tel: '051-639-8989',
  email: 'adw0626@daum.net',
  hours: '월~금 09:00 ~ 18:00',
  brochure: '/애드월드_회사소개서.pdf',
}

export const HERO_CARDS = [
  { href: '/media/bus', icon: 'Bus', title: '버스 광고', sub: '시내·마을·양산' },
  { href: '/media/subway', icon: 'TrainFront', title: '지하철 광고', sub: '와이드컬러·스크린도어' },
  { href: '/media/billboard', icon: 'Monitor', title: '전광판 광고', sub: '부산 주요 6개소' },
  { href: '/media/etc', icon: 'Megaphone', title: '기타 광고', sub: '미디어폴·택배·택시' },
]

export const MARQUEE_WORDS = ['BUS', 'SUBWAY', 'BILLBOARD', 'MEDIA POLE', 'TAXI', 'LED']

export const ABOUT_CARDS = [
  { icon: 'Sparkles', title: '시작이 다릅니다', desc: '클라이언트 분석을 기본으로, 브랜드 이미지에 가장 알맞은 컨설팅을 제안합니다.' },
  { icon: 'MessageCircle', title: '과정이 다릅니다', desc: '광고주의 입장에서 충분히 생각하며, 끊임없는 소통으로 최적의 결과를 만들어갑니다.' },
  { icon: 'TrendingUp', title: '결과가 다릅니다', desc: '계속된 피드백은 물론, 향후 방향성 조정·개선까지 함께합니다.' },
]

export const ABOUT_BADGES = [
  '부산·양산 시내버스 음성광고 매체사',
  '부산 마을버스 음성광고 매체사',
  '양산시 버스광고 매체사',
  '광안지하상가 매체사',
]

export const KEY_NUMBERS = [
  { icon: 'Clock', value: '18', unit: '시간', label: '일 평균 광고 노출 시간', desc: '당신의 브랜드가 하루 18시간 동안 쉬지 않고 고객을 만납니다.' },
  { icon: 'MapPin', value: '6', unit: '개소', label: '부산 주요 전광판 위치', desc: '부산의 유동인구가 가장 몰리는 핫플레이스를 선점하세요.' },
  { icon: 'Bus', value: '3', unit: '종', label: '버스 광고 매체', desc: '시내·마을·양산, 부산 전역을 빠짐없이 커버합니다.' },
  { icon: 'TrainFront', value: '5', unit: '종', label: '지하철 광고 매체', desc: '고객의 이동 경로를 따라 빈틈없이 따라가는 맞춤형 라인업.' },
]

export const PROCESS = [
  { title: '상담 & 분석', desc: '광고 목적 파악 및\n타겟 분석' },
  { title: '매체 선정', desc: '최적 광고 매체\n추천 및 선정' },
  { title: '기획 & 제작', desc: '광고 디자인 기획\n및 제작' },
  { title: '집행 & 관리', desc: '광고 집행 및\n사후 관리' },
]

export const MEDIA_OPTIONS = ['버스광고', '지하철광고', '전광판광고', '기타광고', '종합상담']

// 헤더·푸터·매체 탭에 쓰이는 매체 목록
export const MEDIA_NAV = [
  { to: '/media/bus', label: '버스광고' },
  { to: '/media/subway', label: '지하철광고' },
  { to: '/media/billboard', label: '전광판광고' },
  { to: '/media/etc', label: '기타광고' },
]

export const VISION = {
  lead: '광고의 목적은 노출입니다. 광고의 본질은 많은 사람에게 기업의 서비스 또는 제품을 보여주는 것입니다. 소비자에게 브랜드를 각인시키는 것! 광고의 목적을 잃지 않는 충실한 광고 에이전시입니다.',
  sub: '다양한 클라이언트들의 광고 컨설팅으로 증명된 노하우로 여러분께 다가가겠습니다. 애드월드는 클라이언트와의 관계를 소중하게 생각하며, 늘 클라이언트 입장에서 생각하고 있습니다.',
}

export const HISTORY = [
  { year: '2010', title: '㈜보이스월드 설립', desc: '부산시 버스 음성광고 매체사' },
  { year: '2010', title: '울산보이스월드 설립', desc: '울산시 버스 음성광고 매체사' },
  { year: '2011', title: '창원보이스월드 설립', desc: '창원시 버스 음성광고 매체사' },
  { year: '2013', title: '㈜애드월드로 상호변경' },
  { year: '2016', title: '양산시 버스광고 매체사' },
  { year: '2022', title: '애드월드 사옥 신축' },
  { year: '2024', title: '광안지하상가 매체사' },
  { year: '2025', title: '홈페이지 리뉴얼 & 온라인 상담 시스템 구축' },
  { year: '2025', title: '부산시 버스 내부광고 매체사' },
  { year: '2026', title: '동래래미안포레스티지 타운보드 매체사' },
]

export const NETWORK = [
  { city: '부산', badge: '본사', desc: '시내버스·마을버스·지하철·전광판 등 종합 광고' },
  { city: '양산', desc: '양산 지역 버스 및 옥외광고' },
  { city: '창원, 울산', desc: '지사 버스 및 옥외광고' },
]
