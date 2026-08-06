'use client';
import { useEffect, useState } from 'react';
import { CATS, loadRoutines, loadLogs, saveLogs, today } from './storage';

function Mural({ logs }) {
  const counts = {};
  CATS.forEach((c) => (counts[c.id] = 0));
  logs.forEach((l) => {
    if (counts[l.cat] !== undefined) counts[l.cat]++;
  });
  const max = Math.max(1, ...Object.values(counts));

  return (
    <>
      <div className="mural">
        {CATS.map((c) => {
          const n = counts[c.id];
          const h = 100 / Math.max(n, Math.ceil(max));
          return (
            <div className="mural-col" key={c.id}>
              {Array.from({ length: n }).map((_, i) => (
                <div
                  key={i}
                  className="mural-mark"
                  style={{ height: `${h}%`, background: c.color, filter: i % 2 ? 'brightness(.85)' : 'none' }}
                />
              ))}
            </div>
          );
        })}
      </div>
      <div className="mural-label">
        {CATS.map((c) => (
          <span key={c.id}>{c.label}</span>
        ))}
      </div>
    </>
  );
}

export default function TodayPage() {
  const [routines, setRoutines] = useState([]);
  const [logs, setLogs] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setRoutines(loadRoutines());
    setLogs(loadLogs());
    setReady(true);
  }, []);

  function toggle(routineId) {
    const t = today();
    const idx = logs.findIndex((l) => l.routineId === routineId && l.date === t);
    let next;
    if (idx >= 0) {
      next = logs.filter((_, i) => i !== idx);
    } else {
      const r = routines.find((x) => x.id === routineId);
      next = [
        { id: Date.now().toString(36), routineId, title: r.title, cat: r.cat, date: t, createdAt: Date.now(), note: '' },
        ...logs,
      ];
    }
    setLogs(next);
    saveLogs(next);
  }

  const doneToday = (id) => logs.some((l) => l.routineId === id && l.date === today());
  const grouped = CATS.map((c) => ({ cat: c, items: routines.filter((r) => r.cat === c.id) })).filter(
    (g) => g.items.length
  );

  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">PRIMAL DIARY</div>
        <h1 className="display">원시인 다이어리</h1>
        <p>수렵채집 시대의 몸에 맞춰, 오늘의 루틴을 새기세요.</p>
        <Mural logs={logs} />
      </div>

      {!ready ? (
        <div className="loading">불러오는 중…</div>
      ) : routines.length === 0 ? (
        <div className="empty">
          아직 루틴이 없어요.
          <br />
          &apos;루틴&apos; 탭에서 나만의 실행리스트를 만들어보세요.
        </div>
      ) : (
        grouped.map((g) => (
          <div className="card" key={g.cat.id}>
            <div className="section-title">
              <span className="lv-dot" style={{ background: g.cat.color }} />
              {g.cat.label}
            </div>
            {g.items.map((r) => (
              <div className="routine" key={r.id}>
                <button
                  className={`check ${doneToday(r.id) ? 'done' : ''}`}
                  onClick={() => toggle(r.id)}
                  aria-label={`${r.title} 완료 체크`}
                >
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5L6.5 12L13 4" stroke="#1B1713" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="routine-body">
                  <div className={`routine-title ${doneToday(r.id) ? 'done' : ''}`}>{r.title}</div>
                </div>
              </div>
            ))}
          </div>
        ))
      )}

      <div className="ad-slot">광고 영역 (AdSense 승인 후 ins 태그로 교체)</div>
    </>
  );
}
