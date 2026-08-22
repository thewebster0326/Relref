import Image from "next/image";

const CONTACT = {
  mobile: "083 538 5106",
  durban: "031 201 7672",
  queensburgh: "031 464 2281",
  email: "iyernolan@gmail.com",
};

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      {/* Soft ice-blue glow, brand accent rather than a generic gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-ice/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[420px] w-[420px] rounded-full bg-rr-red/10 blur-3xl"
      />

      <main className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        <Image
          src="/images/logo/Reliable-Refrigeration-logo.png"
          alt="Reliable Refrigeration"
          width={520}
          height={130}
          priority
          className="h-auto w-full max-w-[360px] sm:max-w-[440px]"
        />

        <span className="mt-10 inline-flex items-center gap-2 rounded-full border border-ice/30 bg-ice/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ice-dark">
          New website on the way
        </span>

        <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          Keeping Cool Under Every Circumstance
        </h1>

        <p className="mt-5 max-w-xl text-balance text-base leading-7 text-foreground/70 sm:text-lg">
          Since 2004, Reliable Refrigeration has been Durban&apos;s trusted name in
          domestic and commercial refrigeration — repairs, cold rooms, freezer
          rooms and refrigeration sales, backed by 30+ years of combined
          experience. We&apos;re giving our website a refresh. In the meantime,
          we&apos;re still very much open for business.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 rounded-2xl border border-foreground/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:flex-row sm:justify-center sm:gap-8">
          <ContactItem
            label="Mobile"
            value={CONTACT.mobile}
            href={`tel:${CONTACT.mobile.replace(/\s/g, "")}`}
          />
          <Divider />
          <ContactItem
            label="Durban"
            value={CONTACT.durban}
            href={`tel:${CONTACT.durban.replace(/\s/g, "")}`}
          />
          <Divider />
          <ContactItem
            label="Queensburgh"
            value={CONTACT.queensburgh}
            href={`tel:${CONTACT.queensburgh.replace(/\s/g, "")}`}
          />
        </div>

        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-6 text-sm font-medium text-ice-dark underline decoration-ice/40 underline-offset-4 transition-colors hover:text-rr-red"
        >
          {CONTACT.email}
        </a>
      </main>

      <footer className="relative z-10 mt-16 text-xs text-foreground/40">
        Reliable Refrigeration &copy; {new Date().getFullYear()} &mdash; All Rights Reserved
      </footer>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="group flex flex-col items-center">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/40">
        {label}
      </span>
      <span className="mt-1 text-base font-semibold text-foreground transition-colors group-hover:text-ice-dark">
        {value}
      </span>
    </a>
  );
}

function Divider() {
  return <span className="hidden h-8 w-px bg-foreground/10 sm:block" />;
}
