// 광고 매체 섹션 데이터 — 이미지 경로는 원본 사이트와 동일 (public/ 아래에 같은 경로로 넣으면 됨)
const img = (src, alt) => ({ src, alt })

export const SERVICES = [
  {
    id: 'services-bus',
    bg: 'bg-slide-1',
    icon: 'Bus',
    title: '시내버스 음성광고',
    desc: '버스 정류소 안내방송 후 12초 동안 송출되는 음성 광고로, GPS 위성신호를 받아 버스 내부 음성 장치를 통해 자동 송출됩니다. 해당 정류장을 지나는 모든 버스에 오직 1개의 광고주만 독점 노출시키는 광고입니다.',
    tags: ['음성광고', '독점 노출'],
    features: [
      { title: '지역별·타겟별 광고', desc: '대학가, 원룸가, 상업지구, 학생, 주부, 직장인 등 원하는 타겟에 맞게 집행' },
      { title: '독점광고 가능', desc: '1개의 정류소에 1개 업체만 광고 노출, 경쟁 없는 독점 효과' },
      { title: '역세권 광고', desc: '환승지역 및 유동인구 밀집지역을 공략하는 핵심 광고' },
      { title: '저렴한 광고비용', desc: '라디오 광고와 동일한 효과를 저렴한 비용으로, 인지도 상승 효과' },
      { title: '높은 수용성', desc: '정류소 안내 후 광고방송으로 감각적 노출, 광고 수용성이 높음' },
    ],
    audio: [
      { src: '/audio/sample-police.mp3', name: '부산경찰청', category: '관공서' },
      { src: '/audio/sample-hospital1.mp3', name: '더존한방병원', category: '병원' },
      { src: '/audio/sample-hospital2.mp3', name: '자갈치1층정형외과', category: '병원' },
      { src: '/audio/sample-food1.mp3', name: '미진축산', category: '요식업' },
      { src: '/audio/sample-festival1.mp3', name: '국제시장축제', category: '축제' },
      { src: '/audio/sample-festival2.mp3', name: '태종대수국꽃문화축제', category: '축제' },
    ],
    steps: [
      { title: '협의 및 계약', desc: '희망하는 정류장 선택 및 계약기간 협의' },
      { title: '광고 시나리오 제작', desc: '12초 분량, 55자 내외 광고 시나리오 제작' },
      { title: '녹음', desc: '전문성우 녹음, 남/여 선택가능' },
      { title: '광고 확인', desc: '광고 소재 검수 및 오류 확인' },
      { title: '광고시작', desc: '최종작업 완료 후 광고 집행 확인' },
    ],
    subSections: [
      {
        title: '부산시내버스 광고',
        desc: '부산 전역을 하루 종일 누비며, 가장 넓은 범위의 고객에게 브랜드를 알리는 이동형 광고입니다.',
        tags: ['외부광고', '내부광고'],
        groups: [
          { title: '외부 광고 (도면)', wide: true, images: [img('/images/bus-city-ext-blueprint.png', '외부광고 (부착면 도면)')] },
          { title: '외부 광고 (실제 게시)', images: [img('/images/bus-city-ext-1.jpg', '외부광고 (실제 게시)'), img('/images/bus-city-ext-2.jpg', '외부광고 (실제 게시)')] },
          { title: '내부 광고', images: [
            img('/images/bus-city-int-blueprint.png', '내부광고 (부착면 도면)'),
            img('/images/bus-city-int-1.jpg', '내부광고 (시트)'),
            img('/images/bus-city-int-door.jpg', '내부광고 (하차문 A형)'),
            img('/images/bus-city-int-door-b.jpg', '내부광고 (하차문 B형)'),
          ] },
        ],
      },
      {
        title: '부산마을버스 광고',
        desc: '우리 동네 단골을 만드는 가장 확실한 방법! 지역 주민의 일상 속에 자연스럽게 스며드는 밀착형 광고입니다.',
        tags: ['외부광고', '내부광고'],
        groups: [
          { title: '외부 광고 (도면)', wide: true, images: [img('/images/bus-town-ext-blueprint.png', '외부광고 (부착면 도면)')] },
          { title: '외부 광고 (실제 게시)', images: [img('/images/bus-town-ext-1.jpg', '외부광고 (실제 게시)'), img('/images/bus-town-ext-2.jpg', '외부광고 (실제 게시)')] },
          { title: '내부 광고', images: [
            img('/images/bus-town-int-blueprint.png', '내부광고 (부착면 도면)'),
            img('/images/bus-town-int-1.jpg', '내부광고 (시트)'),
            img('/images/bus-town-int-2.png', '내부광고 (상단)'),
          ] },
        ],
      },
      {
        title: '양산시내버스 광고',
        desc: '양산 도심 곳곳을 하루 종일 달리며, 양산 지역 고객에게 브랜드를 꾸준히 각인시키는 핵심 광고입니다.',
        tags: ['외부광고', '내부광고'],
        groups: [
          { title: '외부 광고 (도면)', wide: true, images: [img('/images/bus-yangsan-ext-blueprint.png', '외부광고 (부착면 도면)')] },
          { title: '외부 광고 (실제 게시)', images: [1, 2, 3, 4].map((n) => img(`/images/bus-yangsan-new-${n}.jpg`, '외부광고 (실제 게시)')) },
          { title: '내부 광고', images: [
            img('/images/bus-yangsan-int-blueprint.png', '내부광고 (부착면 도면)'),
            img('/images/bus-yangsan-int-1.jpg', '내부광고 (시트)'),
            img('/images/bus-yangsan-int-door-1.jpg', '내부광고 (중앙문)'),
          ] },
        ],
      },
    ],
  },
  {
    id: 'services-subway',
    bg: 'bg-slide-2',
    icon: 'TrainFront',
    title: '부산지하철 광고',
    desc: '지하철 이용객이 반드시 머물러야 하는 객차와 역 내부에 광고가 노출됩니다.',
    tags: ['와이드컬러 광고', '스크린도어 광고', '차내광고', '승강장 PDP 광고', '펫스테이션 (광안)'],
    features: [
      { title: '높은 주목성', desc: '대기 시간 동안 자연스러운 시선 집중' },
      { title: '효과적인 타겟광고', desc: '원하는 지역에 맞게 효과적인 광고 집행' },
      { title: '높은 정보전달성', desc: '넓은 광고 지면으로 다량의 정보 전달' },
      { title: '기업 PR / 브랜딩 광고에 탁월', desc: '반복 노출을 통한 브랜드 인지도 상승' },
    ],
    // pairs: 데스크톱에서 두 그룹을 한 줄에 나란히 표시
    pairs: [
      [
        { title: '와이드컬러 광고', images: [img('/images/subway-wide-1.jpg', '와이드컬러 광고'), img('/images/subway-wide-2.jpg', '와이드컬러 광고')] },
        { title: '스크린도어 광고', images: [img('/images/subway-screen-1.jpg', '스크린도어 광고'), img('/images/subway-screen-2.jpg', '스크린도어 광고')] },
      ],
    ],
    groups: [
      { title: '차내광고', images: ['subway-frame-1.jpg', 'subway-frame-2.jpg', 'subway-corner-1.jpg', 'subway-interior-2.jpg'].map((f) => img(`/images/${f}`, '차내광고')) },
      { title: '승강장 PDP 광고', images: ['subway-pdp-1.jpg', 'subway-pdp-2.jpg', 'subway-pdp-info.png', 'subway-pdp-3.jpg'].map((f) => img(`/images/${f}`, '승강장 PDP 광고')) },
      { title: '펫스테이션 (광안)', images: ['subway-pet-1.jpg', 'subway-pet-2.jpg', 'subway-pet-3.png', 'subway-pet-4.jpg'].map((f) => img(`/images/${f}`, '펫스테이션 (광안)')) },
    ],
  },
  {
    id: 'services-billboard',
    bg: 'bg-slide-3',
    icon: 'Monitor',
    title: '전광판(LED) 광고',
    desc: '부산 주요 교차로 6개소에서 하루 100회 이상 반복 노출되는 대형 디지털 광고입니다.',
    tags: ['서면 롯데백화점 맞은편', '서면교차로 IBK기업은행 옥상', '연산교차로', '미남교차로', '사상 청호빌딩', '금정 세정빌딩'],
    features: [
      { title: '압도적인 크기', desc: '최대 18m 초대형 화면으로 시선 강탈' },
      { title: '반복 노출 효과', desc: '일 100회 이상, 월 3,000회 이상 송출' },
      { title: '기업 PR / 브랜딩 광고에 탁월', desc: '브랜드 인지도 극대화' },
    ],
    pairs: [
      [
        { title: '서면 롯데백화점 맞은편 (11m × 7m)', images: [img('/images/bb-lotte-1.jpg', '서면 롯데백화점 맞은편'), img('/images/bb-lotte-2.jpg', '서면 롯데백화점 맞은편')] },
        { title: '서면교차로 IBK기업은행 옥상 (12m × 9m)', images: [img('/images/bb-seomyeon-1.jpg', '서면교차로 IBK기업은행 옥상'), img('/images/bb-seomyeon-2.jpg', '서면교차로 IBK기업은행 옥상')] },
      ],
      [
        { title: '연산교차로 (12m × 8m)', images: [img('/images/bb-yeonsan-1.jpg', '연산교차로'), img('/images/bb-yeonsan-2.jpg', '연산교차로')] },
        { title: '미남교차로 (12m × 7.2m)', images: [img('/images/bb-minam-1.png', '미남교차로'), img('/images/bb-minam-2.png', '미남교차로')] },
      ],
      [
        { title: '사상 청호빌딩 (15.7m × 7m)', images: [img('/images/bb-sasang-1.jpg', '사상 청호빌딩'), img('/images/bb-sasang-2.jpg', '사상 청호빌딩')] },
        { title: '금정 세정빌딩 (18.22m × 11.66m)', images: [img('/images/bb-geumjeong-1.jpg', '금정 세정빌딩'), img('/images/bb-geumjeong-2.jpg', '금정 세정빌딩')] },
      ],
    ],
  },
  {
    id: 'services-etc',
    bg: 'bg-slide-4',
    icon: 'Megaphone',
    title: '기타 매체 광고',
    desc: '미디어폴, 택배차, 택시, 현수막 등 다양한 매체로 고객에게 더 가까이 다가갑니다.',
    tags: ['미디어폴', '택배차 외부광고', '택시 외부광고', '엘리베이터 광고', '지정게시대(현수막) 광고'],
    features: [
      { title: '골목 구석구석 침투', desc: '버스가 못 가는 곳까지 브랜드 전달' },
      { title: '24시간 운행', desc: '낮과 밤 가리지 않는 끊임없는 노출' },
      { title: '합리적 비용', desc: '소규모 예산으로 시작 가능한 맞춤 광고' },
    ],
    groups: [
      { title: '미디어폴', images: ['etc-mediapole-1.png', 'etc-mediapole-2.png', 'etc-mediapole-map.jpg', 'etc-mediapole-3.jpg'].map((f) => img(`/images/${f}`, '미디어폴')) },
      { title: '택배차 외부광고', images: ['etc-delivery-1.jpg', 'etc-delivery-2.jpg', 'etc-delivery-3.png', 'etc-delivery-4.jpg'].map((f) => img(`/images/${f}`, '택배차 외부광고')) },
      { title: '택시 외부광고', images: [1, 2, 3, 4].map((n) => img(`/images/taxi-ext-${n}.jpg`, '택시 외부광고')) },
      { title: '엘리베이터 광고', images: [img('/images/etc-elevator-1.png', '엘리베이터 광고'), img('/images/etc-elevator-2.png', '엘리베이터 광고')] },
      { title: '지정게시대(현수막) 광고', images: ['banner.png', 'banner-2.jpg', 'banner-3.jpg'].map((f) => img(`/images/${f}`, '지정게시대(현수막) 광고')) },
    ],
  },
]

// 페이지별 검색·미리보기 정보
export const MEDIA_SEO = {
  'services-bus': {
    path: '/media/bus',
    title: '부산 버스광고 · 시내버스 음성광고',
    description: '부산·양산 시내버스와 마을버스 음성광고, 외부·내부광고. 정류장별 독점 노출, 타겟 지역 맞춤 집행. 애드월드가 기획부터 녹음·집행까지 함께합니다.',
    image: '/images/bus-city-ext-1.jpg',
  },
  'services-subway': {
    path: '/media/subway',
    title: '부산 지하철광고 · 스크린도어 · 와이드컬러',
    description: '부산지하철 와이드컬러, 스크린도어, 차내광고, 승강장 PDP, 광안 펫스테이션 광고. 대기 시간 동안 자연스럽게 시선을 모읍니다.',
    image: '/images/subway-wide-1.jpg',
  },
  'services-billboard': {
    path: '/media/billboard',
    title: '부산 전광판광고 · LED 옥외광고 6개소',
    description: '서면·연산·미남·사상·금정 등 부산 주요 교차로 6개소 대형 LED 전광판. 하루 100회 이상 반복 노출되는 브랜딩 광고.',
    image: '/images/bb-lotte-1.jpg',
  },
  'services-etc': {
    path: '/media/etc',
    title: '미디어폴 · 택시 · 택배차 · 엘리베이터 광고',
    description: '미디어폴, 택배차·택시 외부광고, 엘리베이터 광고, 지정게시대 현수막까지. 소규모 예산으로 시작하는 부산 생활밀착형 광고.',
    image: '/images/etc-mediapole-1.png',
  },
}
