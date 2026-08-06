export const metadata = {
  title: '소개 | 원시인 다이어리',
  description: '원시인 다이어리를 만든 이유와 사용 방법을 소개합니다.',
};

export default function AboutPage() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">ABOUT</div>
        <h1 className="display">원시인 다이어리 소개</h1>
        <p>원초적인 습관을 기록하고 나누는 작은 다이어리입니다.</p>
      </div>
      <div className="card article">
        <h2>왜 만들었나요</h2>
        <p>
          현대인의 하루는 화면과 인공조명, 가공식품, 정적인 자세로 채워져 있습니다.
          원시인 다이어리는 수면, 걷기, 햇빛, 관계처럼 사람이 오래전부터 몸에
          새겨온 기본적인 습관을 다시 챙길 수 있도록 돕는 개인 기록 도구입니다.
        </p>
        <h2>어떻게 쓰나요</h2>
        <p>
          자신만의 실행리스트를 &apos;생존·항상성·성장·연결·초월&apos; 다섯 가지 결로
          나누어 구성하고, 매일 체크합니다. 기록은 이 브라우저에만 저장되며, 다른
          사람에게 공개되지 않습니다.
        </p>
        <h2>운영 방식</h2>
        <p>
          이 서비스는 광고 수익으로 서버 비용을 충당하며 운영됩니다. 문의 사항은
          <a href="/contact"> 문의 페이지</a>를 통해 남겨주세요.
        </p>
      </div>
    </>
  );
}
