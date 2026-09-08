'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import type { HeroData } from '@/data/nat';

// ── Import all doctor photos ───────────────────────────────────────────────────
import a1  from '@/assets/dr/fotos-alexander/A1.png';
import a2  from '@/assets/dr/fotos-alexander/A2.png';
import a3  from '@/assets/dr/fotos-alexander/A3.png';
import a4  from '@/assets/dr/fotos-alexander/A4.jpg';
import a5  from '@/assets/dr/fotos-alexander/A5.jpg';
import a6  from '@/assets/dr/fotos-alexander/A6.jpg';
import a7  from '@/assets/dr/fotos-alexander/A7.jpg';
import a8  from '@/assets/dr/fotos-alexander/A8.jpg';
import a9  from '@/assets/dr/fotos-alexander/A9.jpg';
import a10 from '@/assets/dr/fotos-alexander/A10.jpg';
import a11 from '@/assets/dr/fotos-alexander/A11.jpg';
import a12 from '@/assets/dr/fotos-alexander/A12.jpg';
import a13 from '@/assets/dr/fotos-alexander/A13.jpg';
import a14 from '@/assets/dr/fotos-alexander/A14.jpg';
import a15 from '@/assets/dr/fotos-alexander/A15.jpg';

const slides: StaticImageData[] = [
  a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15,
];

const AUTOPLAY_INTERVAL = 4000; // ms

// ── Carousel ──────────────────────────────────────────────────────────────────
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent((index + slides.length) % slides.length);
    },
    []
  );

  const next = useCallback(() => goTo(current + 1,  1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] rounded-3xl overflow-hidden border border-blue-200 shadow-2xl shadow-blue-300/30 select-none">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current]}
            alt={`Dr. Alexander Cerda — foto ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/25 via-transparent to-transparent pointer-events-none" />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent pointer-events-none" />

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        aria-label="Foto anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-blue-100 flex items-center justify-center shadow transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 text-blue-700" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente foto"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-blue-100 flex items-center justify-center shadow transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 text-blue-700" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Ir a foto ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-5 h-1.5 bg-white'
                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/15 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,109,119,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,109,119,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── LEFT: texto ── */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/50 bg-blue-100 text-blue-700 text-sm font-medium mb-8"
            >
              <Award className="w-4 h-4" />
              {data.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              {data.headline.split(' ').map((word, i) =>
                word === 'sonrisa' || word === 'para' || word === 'ti' ? (
                  <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                    {word}{' '}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed mb-10"
            >
              {data.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={data.ctaHref}
                id="hero-cta-primary"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300"
              >
                {data.ctaLabel}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#sobre-mi"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-slate-300 text-slate-600 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                Conoce más sobre mí
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: carrusel de fotos ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Glow detrás del marco */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-300/30 to-sky-200/20 blur-2xl" />

            {/* Carrusel */}
            <div className="relative">
              <HeroCarousel />
            </div>

            {/* Badge flotante: nombre */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-5 -left-6 bg-white border border-blue-100 rounded-2xl px-4 py-3 shadow-xl shadow-blue-100/50"
            >
              <p className="text-slate-900 font-semibold text-sm">Dr. Alexander Cerda</p>
              <p className="text-blue-600 text-xs">Ortodoncista certificado</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
