'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/', label: '오늘' },
  { href: '/routines', label: '루틴' },
  { href: '/history', label: '기록' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="tabs">
      {LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={`tab ${pathname === l.href ? 'active' : ''}`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
