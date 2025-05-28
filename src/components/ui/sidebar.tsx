'use client';

import { useState } from 'react';
import { Home, Hourglass, Globe, Plus } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'timer', icon: Hourglass, label: 'History' },
  { id: 'globe', icon: Globe, label: 'Discover' },
];

export const Sidebar = () => {
  const [active, setActive] = useState('home');

  return (
    <aside className="fixed md:left-0 bottom-0 md:top-0 w-full md:w-16 h-16 md:h-screen bg-gray-100 border-t md:border-t-0 md:border-r flex md:flex-col justify-between items-center py-4 z-50">
      <div className="hidden md:block">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={24} height={24} />
        </Link>
      </div>

      <div className="flex md:flex-col items-center justify-center gap-6 relative w-full h-full md:h-auto">
        {navItems.map(({ id, icon: Icon, label }) => (
          <Link
            href={'/'}
            key={id}
            onClick={() => setActive(id)}
            className="relative flex items-center justify-center w-full md:w-auto"
            title={label}
          >
            <Icon className={clsx('w-5 h-5', active === id ? 'text-black' : 'text-gray-400')} />

            {active === id && (
              <span className="hidden md:block absolute right-0 h-5 w-1 bg-black rounded-l-full" />
            )}

            <span className="text-xs mt-1 md:hidden block absolute -bottom-3 text-center w-full">
              {label}
            </span>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex flex-col items-center gap-6 mb-2">
        <Plus className="w-5 h-5 text-black" />
        <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm font-semibold">
          S
        </div>
      </div>
    </aside>
  );
};
