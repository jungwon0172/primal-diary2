export const metadata = {
  title: '문의 | 원시인 다이어리',
  description: '원시인 다이어리에 대한 문의는 이메일로 남겨주세요.',
};

export default function ContactPage() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">CONTACT</div>
        <h1 className="display">문의</h1>
        <p>버그 제보, 제안, 광고 관련 문의 모두 환영합니다.</p>
      </div>
      <div className="card article">
        <p>
          이메일: <a href="mailto:yjw2172@naver.com">yjw2172@naver.com</a>
        </p>
        <p>보통 영업일 기준 2~3일 이내에 답변드립니다.</p>
      </div>
    </>
  );
}
