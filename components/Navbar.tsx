"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowDownToLine } from "lucide-react";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" style={{ fontFamily: "var(--font-display)" }} className="text-lg text-ink">Gift Ayomide</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-ink-soft hover:text-ink">{l.label}</Link>
          ))}
          <a href={site.cvPath} download className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2 text-sm text-paper hover:bg-pine">
            <ArrowDownToLine className="h-4 w-4" /> Download CV
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line px-6 pb-6 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-ink-soft">{l.label}</Link>
          ))}
          <a href={site.cvPath} download className="mt-3 block rounded-sm bg-ink px-4 py-3 text-center text-paper">Download CV</a>
        </nav>
      )}
    </header>
  );
}