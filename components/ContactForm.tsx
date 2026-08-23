"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-mist">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-line bg-deep px-4 py-3 text-frost placeholder:text-mist/60 focus-visible:border-ice"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-mist">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="mt-2 w-full rounded-lg border border-line bg-deep px-4 py-3 text-frost placeholder:text-mist/60 focus-visible:border-ice"
          placeholder="083 000 0000"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-mist">
          What&rsquo;s wrong?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-lg border border-line bg-deep px-4 py-3 text-frost placeholder:text-mist/60 focus-visible:border-ice"
          placeholder="Tell us what's going on and where you're based"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-red px-7 py-3.5 font-sans text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Send enquiry
      </button>
      {sent && (
        <p className="font-mono text-xs text-ice">
          Opening your email app with this filled in — if nothing opened, email us
          directly at {site.email}.
        </p>
      )}
    </form>
  );
}
