# 원시인 다이어리

Next.js 14 기반 개인 루틴 기록 사이트. 서버/로그인 없이, 기록은 브라우저(localStorage)에만 저장됩니다.

## 배포 전 꼭 확인할 것

1. **`app/layout.js`의 네이버 인증 코드 교체**
   - `naver-site-verification` 값 2곳을 네이버 서치어드바이저에서 발급받은 코드로 바꿔주세요.
2. **`public/sitemap.xml`, `public/robots.txt`의 도메인 교체**
   - `REPLACE-WITH-YOUR-DOMAIN`을 실제 배포 도메인으로 바꿔주세요.
3. **`ads.txt`는 이미 채워져 있어요** (`ca-pub-2557338953436433` 기준). 커스텀 도메인을 연결해야 루트에서 정상 인식됩니다.

## 로컬 실행

\`\`\`bash
npm install
npm run dev
\`\`\`

## GitHub 업로드 (터미널)

\`\`\`bash
cd 압축푼폴더경로
git init
git add .
git commit -m "원시인 다이어리 초기 배포"
git branch -M main
git remote add origin https://github.com/jungwon0172/저장소이름.git
git push -u origin main -f
\`\`\`

## Vercel 설정

1. GitHub 저장소를 Vercel에 연결해 새 프로젝트 생성 (Framework: Next.js 자동 감지)
2. **별도 설정 없이 바로 배포됩니다.** 서버 저장소(KV/DB)를 쓰지 않기 때문에 환경변수도, Storage 연결도 필요 없어요.
3. 이후 GitHub에 push할 때마다 자동 재배포됩니다.

## 데이터 저장 방식

- 루틴: 브라우저 `localStorage`의 `pd_routines`
- 기록: 브라우저 `localStorage`의 `pd_logs`
- 서버로 전송되지 않으며, 기기/브라우저별로 따로 저장됩니다.

## AdSense 심사 전 체크리스트

- [x] AdSense 게시자 스크립트 삽입 (`app/layout.js`)
- [x] `ads.txt` 루트 배치
- [x] 개별 페이지 URL (`/`, `/routines`, `/history`, `/guide`, `/about`, `/contact`, `/privacy`, `/terms`)
- [x] 개인정보처리방침(쿠키 고지 포함), 이용약관, 소개, 문의 페이지
- [x] 도구성 콘텐츠 외 원본 텍스트 콘텐츠 (`/guide`)
- [ ] 커스텀 도메인 연결
- [ ] 네이버 서치어드바이저 인증 코드 교체
- [ ] `sitemap.xml`, `robots.txt` 도메인 교체
- [ ] AdSense 승인 후 `<div class="ad-slot">` 부분을 실제 광고 태그로 교체
