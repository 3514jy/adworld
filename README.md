# (주)애드월드 홈페이지

React + React Router v7(프리렌더링) + Tailwind CSS v4 + Vite.
페이지마다 내용이 채워진 HTML을 빌드 시점에 미리 만들어서, 구글·네이버 검색과 카카오톡 링크 미리보기에 잡히도록 구성했습니다.

## 페이지 구성

| 주소 | 내용 |
|---|---|
| `/` | 홈 (메인 문구, 매체 카드, 회사 소개, 주요 숫자) |
| `/media/bus` | 버스 광고 (음성광고, 시내·마을·양산버스, 음성 샘플) |
| `/media/subway` | 지하철 광고 |
| `/media/billboard` | 전광판 광고 |
| `/media/etc` | 기타 광고 |
| `/process` | 진행 절차 |
| `/contact` | 상담 문의 (Web3Forms 메일 발송) |
| `/history` | 회사 연혁 |

## 처음 실행하기

Node.js 20 이상이 필요합니다.

```bash
npm install
node scripts/fetch-assets.mjs   # 기존 사이트에서 이미지·음성·PDF를 public/ 으로 내려받음
npm run dev                     # http://localhost:5173
```

상담 폼까지 테스트하려면 `.env.example`을 `.env`로 복사하고 `VITE_WEB3FORMS_KEY`를 입력하세요.
키는 web3forms.com 에서 **상담 메일을 받을 주소(친구분 메일)** 로 발급받습니다.

## 내용 고치기

문구·연락처·연혁은 코드가 아니라 데이터 파일만 고치면 됩니다.

- `app/data/site.js` : 회사 정보, 메인 문구, 주요 숫자, 진행 절차, 연혁, 네트워크
- `app/data/media.js` : 매체별 설명, 특징, 이미지 목록, 페이지별 검색 제목·설명

## GitHub에 올리기

이미지가 회사 자료이므로 **Private 저장소**를 권장합니다. `.env`는 자동으로 제외됩니다.

```bash
git init
git add .
git commit -m "애드월드 홈페이지 초안"
git branch -M main
git remote add origin https://github.com/<아이디>/adworld.git
git push -u origin main
```

## 시안 주소 만들기 (Vercel)

1. vercel.com 에 GitHub 계정으로 로그인 → Add New → Project → 저장소 선택
2. Environment Variables에 추가
   - `VITE_WEB3FORMS_KEY` : Web3Forms 키
   - `VITE_SITE_URL` : 배포된 주소 (예: `https://adworld-xxxx.vercel.app`) — 처음엔 비워두고 배포 후 주소를 넣고 Redeploy
3. Deploy → 나온 주소를 친구분께 공유

빌드 설정은 `vercel.json`에 들어 있어 따로 건드릴 필요 없습니다.
이후 GitHub에 push할 때마다 자동으로 다시 배포됩니다.

## 실제 도메인으로 오픈할 때

1. Vercel 프로젝트 → Settings → Domains 에 `www.adworld.or.kr` 추가 → 안내대로 DNS 변경
2. `VITE_SITE_URL`을 `https://www.adworld.or.kr` 로 바꾸고 Redeploy
3. 구글 서치콘솔, 네이버 서치어드바이저에 사이트 등록 후 `sitemap.xml` 제출
4. 카카오톡 미리보기가 예전 그대로면 카카오 개발자 사이트의 **공유 디버거**에서 캐시 초기화

## 링크 미리보기 이미지

- 기본: `public/images/og-image.png` (1200×630)
- 매체 페이지는 각 매체 사진을 사용 (`app/data/media.js`의 `MEDIA_SEO`)
