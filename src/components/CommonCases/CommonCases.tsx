'use client';

import { motion } from 'framer-motion';
import {
  AlignJustify,
  ChevronsUpDown,
  ArrowLeftRight,
  RefreshCw,
  LucideProps,
  CalendarCheck,
} from 'lucide-react';
import type { CommonCasesData, CommonCase } from '@/data/nat';

// ── Icon map ───────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.FC<LucideProps>> = {
  AlignJustify,
  ChevronsUpDown,
  ArrowLeftRight,
  RefreshCw,
};

// Tag colour mapping
const tagColour: Record<string, string> = {
  'Muy frecuente': 'bg-rose-100 text-rose-700 border border-rose-200',
  'Frecuente':     'bg-amber-100 text-amber-700 border border-amber-200',
  'Re-tratamiento':'bg-blue-100 text-blue-700 border border-blue-200',
};

// ── Case Card ──────────────────────────────────────────────────────────────────
function CaseCard({ item, index }: { item: CommonCase; index: number }) {
  const Icon = iconMap[item.icon] ?? AlignJustify;
  const tagClass = tagColour[item.tag] ?? 'bg-slate-100 text-slate-600 border border-slate-200';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.09 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-600/8 hover:border-blue-100 transition-all duration-300 flex flex-col gap-5"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-slate-50/0 group-hover:from-blue-50/80 group-hover:to-slate-100/50 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-4 flex-1">
        {/* Icon + tag row */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-700/10 border border-blue-200/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
            <Icon className="w-6 h-6 text-blue-700" />
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${tagClass}`}>
            {item.tag}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="text-slate-900 font-semibold text-base leading-snug">
            {item.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
interface CommonCasesProps {
  data: CommonCasesData;
}

export default function CommonCases({ data }: CommonCasesProps) {
  return (
    <section
      id="casos-frecuentes"
      className="py-28 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-blue-600" />
            {data.sectionLabel}
            <span className="h-px w-8 bg-blue-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            {data.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {data.cases.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            id="common-cases-cta"
            href={data.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <CalendarCheck className="w-5 h-5" />
            {data.ctaLabel}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
