import Image from "next/image";
import Link from "next/link";
import { site, designer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo/Reliable-Refrigeration-logo.png"
            alt="Reliable Refrigeration"
            width={1596}
            height={401}
            className="h-8 w-auto"
          />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
            Domestic and commercial refrigeration in Durban and the surrounding area,
            on-site, since 2004.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ice">Site</p>
          <nav className="mt-4 flex flex-col gap-2.5 text-sm text-mist">
            <Link href="/about" className="hover:text-frost">About</Link>
            <Link href="/services" className="hover:text-frost">Services</Link>
            <Link href="/blog" className="hover:text-frost">Blog</Link>
            <Link href="/contact" className="hover:text-frost">Contact</Link>
          </nav>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-ice">Get in touch</p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-mist">
            <a href={`tel:${site.phones.mobile.replace(/\s/g, "")}`} className="hover:text-frost">
              {site.phones.mobile}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-frost">
              {site.email}
            </a>
            <p>
              {site.address.street}, {site.address.suburb}, {site.address.city}{" "}
              {site.address.postalCode}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 font-mono text-xs text-mist">
          <span>&copy; {new Date().getFullYear()} Reliable Refrigeration</span>
          <span>Durban, South Africa</span>
          <span>
            Website by{" "}
            <a
              href={designer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ice hover:text-frost"
            >
              {designer.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
