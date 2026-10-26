
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlinks = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === '/'
    ? pathname === '/'
    : pathname === href;

  return (
    <Link
      href={href}
      className={`btn ${isActive ? 'btn-success' : 'btn-neutral'}`}
    >
      {children}
    </Link>
  );
};

export default Navlinks;
