export const metadata = {
  title: '개인정보처리방침 | 원시인 다이어리',
  description: '원시인 다이어리의 개인정보 수집 및 광고 쿠키 이용에 대한 안내입니다.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">PRIVACY</div>
        <h1 className="display">개인정보처리방침</h1>
        <p>최종 수정일: {new Date().toISOString().slice(0, 10)}</p>
      </div>
      <div className="card article">
        <h2>1. 수집하는 정보</h2>
        <p>
          사용자가 직접 입력한 루틴, 기록, 메모 데이터는 서버로 전송되지 않고
          사용하는 기기의 브라우저(localStorage)에만 저장됩니다. 이름, 연락처,
          비밀번호 등 개인 식별 정보는 요구하지 않습니다.
        </p>

        <h2>2. 정보의 공유</h2>
        <p>
          기록 데이터는 사용 중인 브라우저 안에만 존재하며, 다른 사람이나
          제3자에게 전송되거나 공개되지 않습니다. 브라우저 데이터를 지우거나
          다른 기기·브라우저로 접속하면 기록이 보이지 않을 수 있습니다.
        </p>

        <h2>3. 광고 및 쿠키 (Google AdSense)</h2>
        <p>
          본 사이트는 Google AdSense를 통해 광고를 게재하며, Google을 포함한 제3자
          광고 제공업체는 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를
          게재할 수 있습니다. Google의 광고 쿠키 사용으로 인해 Google과 파트너는
          본 사이트 및 다른 사이트 방문 정보를 기반으로 광고를 표시할 수 있습니다.
        </p>
        <p>
          사용자는{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">
            Google 광고 설정
          </a>
          에서 맞춤 광고를 비활성화할 수 있습니다.
        </p>

        <h2>4. 정보의 보관 및 삭제</h2>
        <p>
          모든 기록은 브라우저에만 저장되므로, 브라우저의 사이트 데이터를 삭제하면
          기록도 함께 삭제됩니다.
        </p>

        <h2>5. 문의</h2>
        <p>
          개인정보 관련 문의는 <a href="mailto:yjw2172@naver.com">yjw2172@naver.com</a>
          으로 연락해주세요.
        </p>
      </div>
    </>
  );
}
