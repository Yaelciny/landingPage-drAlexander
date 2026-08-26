'use client';

import { motion } from 'framer-motion';
import {
  CreditCard, CalendarDays, Banknote, BadgePercent, Percent,
  LucideProps,
} from 'lucide-react';
import type { PaymentsData, PaymentFacility } from '@/data/nat';

// ── Icon map ──────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.FC<LucideProps>> = {
  CreditCard, CalendarDays, Banknote, BadgePercent, Percent,
};

// ── Payment Card ──────────────────────────────────────────────────────────────
function PaymentCard({ item, index }: { item: PaymentFacility; index: number }) {
  const Icon = iconMap[item.icon] ?? CreditCard;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80 shadow-sm hover:shadow-lg hover:shadow-blue-600/10 hover:bg-white transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md shadow-blue-700/30 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-slate-900 font-semibold text-base mb-1.5">
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
interface PaymentsProps {
  data: PaymentsData;
}

export default function Payments({ data }: PaymentsProps) {
  return (
    <section
      id="pagos"
      className="py-28 relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
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
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            {data.intro}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {data.facilities.map((item, i) => (
            <PaymentCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-400 text-xs mt-6"
        >
          {data.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
