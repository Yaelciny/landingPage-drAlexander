'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Pagos', href: '#pagos' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => setScrolled(v > 20));
    return () => unsub();
  }, [scrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2" id="nav-logo">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">AC</span>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block">
              Dr. Alexander Cerda
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 text-sm hover:text-white hover:text-cyan-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contacto"
              id="nav-cta"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
            >
              Agendar cita
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 pt-16 bg-slate-950/95 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col items-center justify-center gap-6 h-full">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-200 text-xl font-medium hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Agendar cita
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
}
