'use client';
import { useEffect, useState } from 'react';
import { CATS, catInfo, loadRoutines, saveRoutines, uid } from '../storage';
import { useToast } from '../use-toast';

export default function RoutinesPage() {
  const [routines, setRoutines] = useState([]);
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('survival');
  const { show, node: toast } = useToast();

  useEffect(() => {
    setRoutines(loadRoutines());
  }, []);

  function add() {
    if (!title.trim()) return;
    const next = [...routines, { id: uid(), title: title.trim().slice(0, 60), cat }];
    setRoutines(next);
    saveRoutines(next);
    setTitle('');
    show('루틴을 추가했어요.');
  }

  function del(id) {
    const next = routines.filter((r) => r.id !== id);
    setRoutines(next);
    saveRoutines(next);
  }

  return (
    <>
      <div className="hero">
        <div className="hero-eyebrow">ROUTINES</div>
        <h1 className="display">내 루틴</h1>
        <p>나만의 실행리스트를 자유롭게 구성하세요.</p>
      </div>

      <div className="card">
        <div className="section-title">새 루틴 추가</div>
        <div className="row">
          <input
            type="text"
            placeholder="예: 냉수 샤워"
            style={{ flex: 2 }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select style={{ flex: 1 }} value={cat} onChange={(e) => setCat(e.target.value)}>
            {CATS.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
          <button className="btn btn-sm" onClick={add}>
            추가
          </button>
        </div>
      </div>

      <div className="card">
        <div className="section-title">내 루틴 ({routines.length})</div>
        {routines.length === 0 ? (
          <div className="empty">루틴을 추가해보세요.</div>
        ) : (
          routines.map((r) => {
            const c = catInfo(r.cat);
            return (
              <div className="routine" key={r.id}>
                <span className="lv-dot" style={{ background: c.color }} />
                <div className="routine-body">
                  <div className="routine-title">{r.title}</div>
                  <div className="routine-cat">{c.label}</div>
                </div>
                <button className="routine-del" onClick={() => del(r.id)}>
                  삭제
                </button>
              </div>
            );
          })
        )}
      </div>
      {toast}
    </>
  );
}
