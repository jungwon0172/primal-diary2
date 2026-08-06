'use client';
import { useEffect, useState, useRef } from 'react';
import { catInfo, loadLogs, saveLogs } from '../storage';

function fmtDate(d) {
  const dt = new Date(d);
  return `${dt.getMonth() + 1}.${dt.getDate()}`;
}

export default function HistoryPage() {
  const [logs, setLogs] = useState([]);
  const timers = useRef({});

  useEffect(() => {
    setLogs(loadLogs());
  }, []);

  function onNoteChange(id, value) {
    const next = logs.map((l) => (l.id === id ? { ...l, note: value } : l));
    setLogs(next);
    clearTimeout(timers.current[id]);
    timers.current[id] = setTimeout(() => saveLogs(next), 400);
  }

  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">HISTORY</div>
        <h1 className="display">기록</h1>
        <p>지금까지 체크한 루틴을 모아 봅니다.</p>
      </div>

      {logs.length === 0 ? (
        <div className="empty">
          아직 기록이 없어요.
          <br />
          &apos;오늘&apos; 탭에서 루틴을 체크해보세요.
        </div>
      ) : (
        <div className="card">
          {logs.map((l) => {
            const c = catInfo(l.cat);
            return (
              <div className="log-entry" key={l.id}>
                <div className="log-head">
                  <div className="log-title">
                    <span className="lv-dot" style={{ background: c.color, marginRight: 6 }} />
                    {l.title}
                  </div>
                  <div className="log-date">{fmtDate(l.date)}</div>
                </div>
                <textarea
                  placeholder="오늘 어땠는지 적어보세요 (선택)"
                  value={l.note || ''}
                  onChange={(e) => onNoteChange(l.id, e.target.value)}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
