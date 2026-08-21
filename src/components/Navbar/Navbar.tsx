// ============================================================
// Navbar — Barra de navegacion fija con efecto de transparencia.
// Incluye menu hamburguesa animado para movil,
// overlay oscuro y scroll suave a cada seccion.
// ============================================================
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Pagos", href: "#pagos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detectar scroll para aplicar fondo semitransparente al header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll del body cuando el menu movil esta abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar menu y hacer scroll suave a la seccion indicada
  const handleNav = (href: string) => {
    setOpen(false);
    document.body.style.overflow = "";
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${open
          ? "bg-slate-950"
          : scrolled
            ? "bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#inicio");
            }}
            id="nav-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-700/30 group-hover:shadow-blue-700/50 transition-shadow duration-300">
              <span className="text-white text-xs font-bold tracking-tight">AC</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-wide text-white">
                Dr. Alexander Cerda
              </span>
              <span className="text-[10px] text-blue-400 font-medium tracking-widest uppercase">
                Ortodoncia
              </span>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* CTA desktop */}
            <a
              href="#contacto"
              id="nav-cta"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contacto");
              }}
              className="hidden md:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-700/30 hover:scale-105 transition-all duration-300"
            >
              Agendar cita
            </a>

            {/* Boton hamburguesa con animacion de transformacion a X */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setOpen(!open)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-6 bg-white rounded-full"
              />
              <motion.span
                animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-6 bg-white rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-6 bg-white rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu — dropdown debajo del header */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-slate-950 border-t border-white/10 overflow-hidden"
            >
              <nav className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="py-3 px-4 text-base font-semibold tracking-wide text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* CTA mobile */}
                <motion.a
                  href="#contacto"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.06 + 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("#contacto");
                  }}
                  className="mt-3 mx-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold text-center hover:shadow-lg hover:shadow-blue-700/25 transition-all duration-300"
                >
                  Agendar cita
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Overlay oscuro que cierra el menu al tocarlo (solo movil) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            style={{ top: "73px" }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
