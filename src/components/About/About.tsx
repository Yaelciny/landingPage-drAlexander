'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap } from 'lucide-react';
import type { AboutData } from '@/data/nat';

interface AboutProps {
  data: AboutData;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About({ data }: AboutProps) {
  return (
    <section
      id="sobre-mi"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-50 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-50 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-px w-10 bg-cyan-500" />
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-widest">
            {data.sectionLabel}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {data.title}
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="text-slate-600 text-lg leading-relaxed mb-10"
            >
              {data.body}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              <div className="bg-linear-to-br from-cyan-50 to-teal-50 rounded-2xl p-6 border border-cyan-100">
                <p className="text-4xl font-bold text-cyan-600 mb-1">
                  {data.yearsExperience}+
                </p>
                <p className="text-slate-600 text-sm font-medium">años de experiencia clínica</p>
              </div>
              <div className="bg-linear-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5 text-cyan-600" />
                </div>
                <p className="text-slate-700 text-sm font-medium leading-tight">
                  {data.specialtyLabel}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — credentials */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-slate-900/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold text-lg">Credenciales académicas</h3>
              </div>

              <ul className="space-y-4">
                {data.credentials.map((cred, i) => (
                  <motion.li
                    key={cred.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 2}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {cred.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
