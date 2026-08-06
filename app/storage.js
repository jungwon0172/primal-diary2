'use client';

export const CATS = [
  { id: 'survival', label: '생존', color: 'var(--lv1)' },
  { id: 'homeo', label: '항상성', color: 'var(--lv2)' },
  { id: 'growth', label: '성장', color: 'var(--lv3)' },
  { id: 'connect', label: '연결', color: 'var(--lv4)' },
  { id: 'trans', label: '초월', color: 'var(--lv5)' },
];

export const DEFAULT_ROUTINES = [
  { title: '7시간 이상 수면', cat: 'survival' },
  { title: '물 2리터 마시기', cat: 'survival' },
  { title: '아침 햇빛 쐬기', cat: 'homeo' },
  { title: '심호흡 5분', cat: 'homeo' },
  { title: '30분 걷기', cat: 'growth' },
  { title: '근력 운동', cat: 'growth' },
  { title: '가족/친구와 대화하기', cat: 'connect' },
  { title: '맨발로 땅 밟기', cat: 'connect' },
  { title: '생각 정리 / 명상', cat: 'trans' },
];

const ROUTINES_KEY = 'pd_routines';
const LOGS_KEY = 'pd_logs';

export function catInfo(id) {
  return CATS.find((c) => c.id === id) || CATS[0];
}

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function loadRoutines() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(ROUTINES_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('failed to read routines', e);
  }
  const seeded = DEFAULT_ROUTINES.map((r) => ({ id: uid(), ...r }));
  saveRoutines(seeded);
  return seeded;
}

export function saveRoutines(routines) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(ROUTINES_KEY, JSON.stringify(routines));
  } catch (e) {
    console.error('failed to save routines', e);
  }
}

export function loadLogs() {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(LOGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('failed to read logs', e);
    return [];
  }
}

export function saveLogs(logs) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
  } catch (e) {
    console.error('failed to save logs', e);
  }
}
