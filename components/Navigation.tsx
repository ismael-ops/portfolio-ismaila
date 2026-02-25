'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: '/', label: '𖦹' },
    { href: '/projects', label: 'projets' },
    { href: '/about', label: 'à propos de moi' },
    { href: '/blog', label: 'blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <ul className="flex items-center justify-center gap-8 text-sm font-handwriting">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-gray-600 transition-colors ${
                  pathname === link.href ? 'font-semibold' : ''
                } ${link.label === 'ʚ' ? 'text-xl' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
