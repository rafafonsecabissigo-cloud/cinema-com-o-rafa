"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/criticas", label: "Críticas" },
  { href: "/listas", label: "Listas" },
  { href: "/#contato", label: "Contato" }
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
      </nav>
    </header>
  );
}
