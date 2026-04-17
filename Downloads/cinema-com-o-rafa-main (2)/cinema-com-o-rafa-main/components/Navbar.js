"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/criticas", label: "Críticas" },
  { href: "/listas", label: "Listas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" }
];

const socials = [
  {
    href: "https://letterboxd.com/bissigorafael/",
    label: "Letterboxd",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9.5 3A8.5 8.5 0 0 0 1 11.5 8.5 8.5 0 0 0 9.5 20a8.5 8.5 0 0 0 5.5-2.02A8.5 8.5 0 0 0 20.5 20 8.5 8.5 0 0 0 23 11.5 8.5 8.5 0 0 0 20.5 3a8.5 8.5 0 0 0-5.5 2.02A8.5 8.5 0 0 0 9.5 3z"/>
      </svg>
    )
  },
  {
    href: "https://instagram.com/cinemacomorafa",
    label: "Instagram",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    )
  },
  {
    href: "https://x.com/cinemacomorafa",
    label: "X",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1>Cinema com o Rafa 🎥</h1>
      <nav>
        {links.map((link) => {
          const isActive =
            link.href !== "/#contato" &&
            (pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href)));
          return (
            <Link key={link.href} href={link.href} className={isActive ? "active-link" : ""}>
              {link.label}
            </Link>
          );
        })}
        <span className="nav-divider" aria-hidden="true" />
        {socials.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="nav-social"
            aria-label={s.label}
            title={s.label}
          >
            {s.svg}
          </a>
        ))}
      </nav>
    </header>
  );
}
