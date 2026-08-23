import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Reliable Refrigeration",
  description:
    "Get in touch with Reliable Refrigeration — Durban and Queensburgh, on call for domestic and commercial refrigeration.",
};

const branches = [
  { label: "Mobile", value: site.phones.mobile },
  { label: "Durban", value: site.phones.durban },
  { label: "Queensburgh", value: site.phones.queensburgh },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ice">
            Mon&ndash;Sat
          </p>
          <h1 className="mt-2.5 max-w-xl text-balance font-display text-4xl font-bold sm:text-5xl">
            Get us on site
          </h1>
          <p className="mt-6 max-w-lg text-mist">
            Call the branch closest to you, or send an enquiry and we&rsquo;ll get
            back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {branches.map((b) => (
                <a
                  key={b.label}
                  href={`tel:${b.value.replace(/\s/g, "")}`}
                  className="rounded-2xl border border-line bg-deep-2/60 p-6 transition-colors hover:border-ice"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-mist">
                    {b.label}
                  </p>
                  <p className="mt-1.5 font-display text-xl font-semibold text-frost">
                    {b.value}
                  </p>
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="rounded-2xl border border-line bg-deep-2/60 p-6 transition-colors hover:border-ice"
              >
                <p className="font-mono text-xs uppercase tracking-wider text-mist">Email</p>
                <p className="mt-1.5 font-display text-lg font-semibold text-frost break-all">
                  {site.email}
                </p>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-deep-2/40 p-7 sm:p-9">
            <h2 className="font-display text-xl font-semibold">Send an enquiry</h2>
            <p className="mt-2 text-sm text-mist">
              This opens your email app with the details filled in — nothing is sent
              from here directly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
