export const metadata = {
  title: '이용약관 | 원시인 다이어리',
  description: '원시인 다이어리 이용약관입니다.',
};

export default function TermsPage() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">TERMS</div>
        <h1 className="display">이용약관</h1>
        <p>최종 수정일: {new Date().toISOString().slice(0, 10)}</p>
      </div>
      <div className="card article">
        <h2>1. 서비스 이용</h2>
        <p>
          본 서비스는 무료로 제공되며, 사용자는 자유롭게 루틴을 기록하고 친구와
          선택적으로 공유할 수 있습니다.
        </p>
        <h2>2. 콘텐츠에 대한 책임</h2>
        <p>
          사용자가 작성한 루틴 제목과 메모의 내용에 대한 책임은 작성자 본인에게
          있습니다. 타인에게 불쾌감을 주거나 불법적인 내용은 사전 통보 없이 삭제될
          수 있습니다.
        </p>
        <h2>3. 서비스 변경 및 중단</h2>
        <p>
          운영상, 기술상의 필요에 따라 서비스 내용이 변경되거나 일부 중단될 수
          있으며, 중요한 변경 사항은 사이트를 통해 안내합니다.
        </p>
        <h2>4. 면책 조항</h2>
        <p>
          본 서비스에 기록된 습관 정보는 일반적인 생활 정보 제공 목적이며, 의학적
          진단이나 처방을 대체하지 않습니다. 건강 관련 결정은 전문가와 상담하세요.
        </p>
      </div>
    </>
  );
}
