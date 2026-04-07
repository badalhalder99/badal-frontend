"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useState } from "react";
import { navItems } from "@/constants/content";
import { useTheme } from "@/context/theme-context";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
    toast.success(`Switched to ${theme === "dark" ? "light" : "dark"} mode`);
  };

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 flex h-[92px] flex-col items-center justify-center border-b border-transparent bg-[#00000033] py-4 text-white backdrop-blur-[20px] large:h-[95px] large:px-10 large:py-6 light:bg-neutral-25/85 light:text-neutral-950"
      style={{
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
      }}
    >
      <nav
        aria-label="Primary navigation"
        className="relative flex h-[60px] w-full items-center justify-between px-4 small:px-5 medium:px-7 large:h-[47px] large:max-w-[901px] large:px-0 2xlarge:max-w-[1280px]"
      >
        <Link href="#" aria-label="PPA home" className="flex h-[31px] w-[84px] shrink-0 items-center">
          <Image
            src="/image/Logo.png"
            alt="PPA"
            width={84}
            height={31}
            priority
            className="h-[31px] w-[84px] object-contain light:invert"
          />
        </Link>

        <div className="hidden items-center gap-8 large:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-normal leading-[1.35] text-[#D0D5D9] transition hover:text-white light:text-neutral-600 light:hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="relative flex h-[60px] w-[60px] items-center large:h-[47px] large:w-[116px]">
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            onClick={handleThemeToggle}
            className="absolute left-[-112px] top-1/2 inline-flex h-11 w-20 -translate-y-1/2 items-center rounded-full bg-[#171B21] p-1 transition light:bg-white light:shadow-[inset_0_0_0_1px_rgba(15,23,42,0.12)]"
          >
            <span
              aria-hidden="true"
              className={`absolute left-1 top-1 size-9 rounded-full bg-[#282D33] shadow-sm transition light:bg-primary-500 ${
                theme === "light" ? "translate-x-9" : "translate-x-0"
              }`}
            />
            <span
              className={`relative z-10 grid size-9 place-items-center transition ${
                theme === "dark"
                  ? "text-white"
                  : "text-white/55 light:text-neutral-500"
              }`}
            >
              <FiMoon className="size-5" />
            </span>
            <span className="relative z-10 grid size-9 place-items-center text-white transition">
              <FiSun className="size-5" />
            </span>
          </button>
          <Link
            href="#pricing"
            className="hidden h-[47px] w-[116px] items-center justify-center rounded-[12px] bg-[#2466F2] px-5 py-3 text-[17px] font-medium leading-[1.35] text-white transition hover:bg-primary-400 large:inline-flex"
          >
            Enroll now
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="grid size-[60px] place-items-center rounded-full bg-[#171B21] text-white large:hidden light:bg-white light:text-neutral-950 light:shadow-[inset_0_0_0_1px_rgba(15,23,42,0.12)]"
          >
            {menuOpen ? <FiX className="size-7" /> : <FiMenu className="size-7" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="absolute inset-x-0 top-[92px] px-4 pb-4 small:px-5 medium:px-7 large:hidden">
          <div className="mx-auto grid w-full max-w-[380px] gap-2 rounded-2xl bg-neutral-900 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] small:max-w-[481px] medium:max-w-[625px] light:bg-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white light:text-neutral-700 light:hover:bg-neutral-75 light:hover:text-neutral-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
