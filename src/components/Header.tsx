"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
  PawIcon,
  SearchIcon,
  XIcon,
} from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  const iconColor = isHome ? "text-white" : "text-zinc-600 dark:text-zinc-400";

  return (
    <header
      className={
        isHome
          ? "absolute inset-x-0 top-0 z-20"
          : "relative z-20 border-b border-black/[.08] dark:border-white/[.145]"
      }
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className={
            isHome
              ? "flex shrink-0 items-center gap-2 text-3xl font-bold tracking-tight text-white"
              : "flex shrink-0 items-center gap-2 text-lg font-semibold tracking-tight"
          }
          style={isHome ? { WebkitTextStroke: "1px black" } : undefined}
        >
          <PawIcon className={isHome ? "size-7" : "size-5"} />
          Pet Corner
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isHome
                  ? "relative text-white/90 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100"
                  : "relative text-zinc-600 transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:bg-red-500 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 dark:text-zinc-400"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={`hidden shrink-0 items-center justify-end gap-4 md:flex ${iconColor}`}>
          <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="X (Twitter)" className="transition-opacity hover:opacity-70">
            <XIcon />
          </a>
          <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
            <InstagramIcon />
          </a>
          <Link href="/blog" aria-label="Browse posts" className="transition-opacity hover:opacity-70">
            <SearchIcon />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={`shrink-0 md:hidden ${iconColor}`}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div
          className={
            isHome
              ? "bg-black/90 px-6 pb-8 md:hidden"
              : "border-b border-black/[.08] bg-white px-6 pb-8 dark:border-white/[.145] dark:bg-black md:hidden"
          }
        >
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  isHome
                    ? "text-white/90 hover:text-white"
                    : "text-zinc-600 hover:text-foreground dark:text-zinc-400"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={`mt-6 flex items-center gap-5 ${iconColor}`}>
            <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="X (Twitter)" className="transition-opacity hover:opacity-70">
              <XIcon />
            </a>
            <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70">
              <InstagramIcon />
            </a>
            <Link
              href="/blog"
              aria-label="Browse posts"
              onClick={() => setOpen(false)}
              className="transition-opacity hover:opacity-70"
            >
              <SearchIcon />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
