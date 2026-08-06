import './globals.css';
import Nav from './nav';

export const metadata = {
  title: '원시인 다이어리 | 나만의 원시인 루틴 기록',
  description:
    '수면, 걷기, 햇빛, 관계 같은 원초적 습관을 나만의 실행리스트로 기록하는 개인 루틴 다이어리입니다.',
  verification: {
    other: { 'naver-site-verification': '43a13ce1e684f0e41eff7b286d124ef4994e0cc3' },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2557338953436433" />
        <meta
          name="naver-site-verification"
          content="43a13ce1e684f0e41eff7b286d124ef4994e0cc3"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@500;700;800&family=IBM+Plex+Sans+KR:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2557338953436433"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Nav />
        <main className="app">{children}</main>
        <footer className="site-footer">
          <a href="/about">소개</a>
          <a href="/guide">가이드</a>
          <a href="/contact">문의</a>
          <a href="/privacy">개인정보처리방침</a>
          <a href="/terms">이용약관</a>
          <span className="footer-copy">© {new Date().getFullYear()} 원시인 다이어리</span>
        </footer>
      </body>
    </html>
  );
}
