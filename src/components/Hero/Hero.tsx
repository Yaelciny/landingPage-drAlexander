'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Scan, Star } from 'lucide-react';
import type { HeroData } from '@/data/nat';

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
                word === 'sonrisa' || word === 'diseñado' ? (
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

          {/* ── RIGHT: marco de foto ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-shrink-0 relative"
          >
            {/* Glow detrás del marco */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-300/30 to-sky-200/20 blur-2xl" />

            {/* Marco principal */}
            <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] rounded-3xl overflow-hidden border border-blue-200 shadow-2xl shadow-blue-300/30 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
              {/* Patrón de fondo sutil */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(0,109,119,1) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Icono placeholder */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 border-2 border-dashed border-blue-400/50 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>

              {/* Texto placeholder */}
              <div className="relative z-10 text-center px-6">
                <p className="text-blue-600 font-medium text-sm">Foto del Dr. Alexander</p>
                <p className="text-slate-400 text-xs mt-1">Tu foto irá aquí</p>
              </div>

              {/* Línea decorativa inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
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

            {/* Badge flotante: rating */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -top-5 -right-4 bg-white border border-blue-100 rounded-2xl px-4 py-3 shadow-xl shadow-blue-100/50 flex items-center gap-2"
            >
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-slate-900 font-semibold text-sm">5.0</span>
              <span className="text-slate-500 text-xs">Google</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
