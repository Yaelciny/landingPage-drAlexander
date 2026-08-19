'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FaqData, FaqItem } from '@/data/nat';

// ── Accordion Item ────────────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen
          ? 'border-cyan-200 shadow-md shadow-cyan-500/10'
          : 'border-slate-100 hover:border-slate-200'
        }`}
    >
      <button
        id={`faq-btn-${item.id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-cyan-700' : 'text-slate-900'}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${isOpen ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-500'
            }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 bg-white">
              <div className="h-px bg-slate-100 mb-4" />
              <p className="text-slate-600 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
interface FaqProps {
  data: FaqData;
}

export default function Faq({ data }: FaqProps) {
  const [openId, setOpenId] = useState<string | null>(data.items[0].id);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-4"
          >
            <span className="h-px w-8 bg-cyan-500" />
            {data.sectionLabel}
            <span className="h-px w-8 bg-cyan-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {data.items.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
