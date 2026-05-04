"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sprout } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur shadow-sm border-b border-agro-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2 group">
          <span
            className={`flex items-center justify-center w-9 h-9 rounded-full transition ${
              scrolled
                ? "bg-agro-700 text-cream"
                : "bg-cream/20 text-cream backdrop-blur border border-cream/30"
            }`}
          >
            <Sprout className="w-5 h-5" />
          </span>
          <span
            className={`font-display text-2xl tracking-tight transition ${
              scrolled ? "text-agro-900" : "text-cream"
            }`}
            style={!scrolled ? { textShadow: "0 2px 12px rgba(0,0,0,0.5)" } : undefined}
          >
            Agro<span className={scrolled ? "text-agro-500" : "text-agro-300"}>Raíz</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition ${
                scrolled
                  ? "text-agro-900 hover:text-agro-500"
                  : "text-cream/95 hover:text-agro-200"
              }`}
              style={!scrolled ? { textShadow: "0 1px 6px rgba(0,0,0,0.45)" } : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="px-5 py-2.5 rounded-full bg-agro-600 hover:bg-agro-700 text-cream text-sm font-semibold transition shadow-md hover:shadow-lg"
          >
            Cotizar
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-agro-900" : "text-cream"}`}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-cream border-t border-agro-200 px-6 py-4 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-agro-900 font-medium py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-2.5 rounded-full bg-agro-700 text-cream font-semibold"
          >
            Cotizar
          </Link>
        </div>
      )}
    </header>
  );
}
