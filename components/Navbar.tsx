"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/Reliable-Refrigeration-logo.png"
            alt="Reliable Refrigeration"
            width={1596}
            height={401}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-[0.95rem] text-frost/80 transition-colors hover:text-frost"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
            className="rounded-full bg-frost px-5 py-2.5 font-sans text-sm font-semibold text-deep transition-opacity hover:opacity-90"
          >
            {site.phones.mobile}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3 3 15" stroke="var(--frost)" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="var(--frost)" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-sans text-base text-frost/85 hover:bg-deep-2"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phones.mobile.replace(/\s/g, "")}`}
              className="mt-2 rounded-full bg-frost px-5 py-3 text-center font-sans text-sm font-semibold text-deep"
            >
              Call {site.phones.mobile}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
