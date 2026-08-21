'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ScanLine, Sparkles, Layers, Stethoscope, RefreshCw,
  Baby, Star, Shield, Ruler, Activity,
  Anchor, Zap, Sun, Smile, Droplets,
  LucideProps,
} from 'lucide-react';
import type { TreatmentsData, Treatment } from '@/data/nat';

// ── Icon map ──────────────────────────────────────────────────────────────────
type IconName = keyof typeof iconMap;

const iconMap: Record<string, React.FC<LucideProps>> = {
  ScanLine, Sparkles, Layers, Stethoscope, RefreshCw,
  Baby, Star, Shield, Ruler, Activity,
  Anchor, Zap, Sun, Smile, Droplets,
};

// ── Treatment Card ────────────────────────────────────────────────────────────
function TreatmentCard({ item, index }: { item: Treatment; index: number }) {
  const Icon = iconMap[item.icon as IconName] ?? Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-600/8 hover:border-blue-100 transition-all duration-300"
    >
      {/* Gradient on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-50/0 to-slate-50/0 group-hover:from-blue-50/80 group-hover:to-slate-100/50 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600/10 to-blue-700/10 border border-blue-200/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-blue-700" />
        </div>

        {/* Content */}
        <h3 className="text-slate-900 font-semibold text-base mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
interface TreatmentsProps {
  data: TreatmentsData;
}

export default function Treatments({ data }: TreatmentsProps) {
  const [activeTab, setActiveTab] = useState(data.categories[0].id);
  const activeCategory = data.categories.find((c) => c.id === activeTab)!;

  return (
    <section
      id="tratamientos"
      className="py-28 bg-gradient-to-b from-slate-50 to-white"
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === cat.id
                  ? 'text-white shadow-lg shadow-blue-700/25'
                  : 'text-slate-600 bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700'
                }`}
            >
              {activeTab === cat.id && (
                <motion.span
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-700"
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.treatments.map((item, i) => (
              <TreatmentCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
