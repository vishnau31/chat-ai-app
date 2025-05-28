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
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gray-100 border-b flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Plus className="w-5 h-5 text-black" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm font-semibold">
            S
          </div>
        </div>
      </div>

      <aside className="fixed md:left-0 bottom-0 md:top-0 w-full md:w-16 h-16 md:h-screen bg-gray-100 border-t md:border-t-0 md:border-r flex md:flex-col justify-between items-center py-4 z-40">
        <div className="hidden md:block">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
          </Link>
        </div>

        <div className="flex md:flex-col items-center justify-center gap-6 relative w-full h-full">
          {navItems.map(({ id, icon: Icon, label }) => (
            <Link
              href={'/'}
              key={id}
              onClick={() => setActive(id)}
              className="flex flex-col items-center justify-center w-full"
              title={label}
            >
              {active === id && (
                <span className="flex-top w-6 h-1 md:absolute right-0 md:h-5 md:w-1 bg-black rounded-l-full" />
              )}

              <Icon className={clsx('w-6 h-6', active === id ? 'text-black' : 'text-gray-400')} />

              <span
                className={clsx(
                  'text-xs mt-1 md:hidden block -bottom-3 text-center w-full',
                  active === id ? 'font-bold' : 'font-semi-bold',
                )}
              >
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
    </>
  );
};
