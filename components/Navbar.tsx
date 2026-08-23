"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, services } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;

    function onPointerDown(e: PointerEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }

  return (
    <header className="relative z-20 border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center" onClick={closeAll}>
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
          <Link
            href="/"
            className="font-sans text-[0.95rem] text-frost/80 transition-colors hover:text-frost"
          >
            Home
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1.5 font-sans text-[0.95rem] text-frost/80 transition-colors hover:text-frost"
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M1.5 3.5 5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-30 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-line bg-deep-2 p-2 shadow-xl">
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="block rounded-lg px-3.5 py-2.5 font-mono text-xs uppercase tracking-wider text-ice hover:bg-deep-3"
                >
                  All services
                </Link>
                <div className="my-1 h-px bg-line" />
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeAll}
                    className="block rounded-lg px-3.5 py-2.5 text-sm text-frost/85 hover:bg-deep-3 hover:text-frost"
                  >
                    {s.shortName}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
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
            <Link
              href="/"
              onClick={closeAll}
              className="rounded-lg px-3 py-3 font-sans text-base text-frost/85 hover:bg-deep-2"
            >
              Home
            </Link>

            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between rounded-lg px-3 py-3 font-sans text-base text-frost/85 hover:bg-deep-2"
            >
              Services
              <svg
                width="11"
                height="11"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden="true"
                className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M1.5 3.5 5 7l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-line pl-4">
                <Link
                  href="/services"
                  onClick={closeAll}
                  className="rounded-lg px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-ice hover:bg-deep-2"
                >
                  All services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeAll}
                    className="rounded-lg px-3 py-2.5 text-sm text-frost/80 hover:bg-deep-2 hover:text-frost"
                  >
                    {s.shortName}
                  </Link>
                ))}
              </div>
            )}

            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeAll}
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
