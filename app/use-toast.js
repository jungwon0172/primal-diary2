'use client';
import { useState, useCallback } from 'react';

export function useToast() {
  const [msg, setMsg] = useState('');
  const show = useCallback((m) => {
    setMsg(m);
    setTimeout(() => setMsg(''), 2200);
  }, []);
  const node = <div className={`toast ${msg ? 'show' : ''}`}>{msg}</div>;
  return { show, node };
}
