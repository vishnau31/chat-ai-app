"use client";

import { useState } from "react";
import { Home, Hourglass, Globe, Plus } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "timer", icon: Hourglass, label: "Timer" },
  { id: "globe", icon: Globe, label: "Explore" },
];

export const Sidebar = () => {
  const [active, setActive] = useState("home");

  return (
    <aside className="fixed top-0 left-0 h-screen w-16 bg-gray-100 border-r flex flex-col justify-between items-center py-4">
      {/* Section 1: Logo */}
      <div>
        <Image src="/logo.svg" alt="Logo" width={24} height={24} />
      </div>

      {/* Section 2: Nav Icons */}
      <div className="flex flex-col items-center gap-6 mt-6 relative w-full">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="relative flex items-center justify-center w-full"
            title={label}
          >
            {/* Icon */}
            <Icon
              className={clsx(
                "w-5 h-5",
                active === id ? "text-black" : "text-gray-400"
              )}
            />
            {active === id && (
              <span className="absolute right-0 h-5 w-1 bg-black rounded-l-full" />
            )}
          </button>
        ))}
      </div>

      {/* Section 3: Bottom actions */}
      <div className="flex flex-col items-center gap-6 mb-2">
        <Plus className="w-5 h-5 text-black" />
        <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-sm font-semibold">
          S
        </div>
      </div>
    </aside>
  );
};
