'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, GraduationCap, User } from 'lucide-react';
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
      className="relative py-28 bg-gradient-to-b from-white to-sky-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-sky-100 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none opacity-60" />

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
          <span className="h-px w-10 bg-blue-600" />
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-widest">
            {data.sectionLabel}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12 items-start">


          {/* ── Col 1: Credenciales ── */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="relative bg-white rounded-3xl overflow-hidden border border-blue-100 shadow-xl shadow-blue-100/50"
            >
              {/* Accent stripe top */}
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600" />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 border border-blue-200 flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-base leading-tight">
                      Credenciales académicas
                    </h3>
                    <p className="text-blue-500 text-xs font-medium tracking-wide mt-0.5">
                      Formación & certificaciones
                    </p>
                  </div>
                </div>

                {/* Lista */}
                <ul className="space-y-4">
                  {data.credentials.map((cred, i) => (
                    <motion.li
                      key={cred.id}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i + 2}
                      variants={fadeUp}
                      className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {cred.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative bottom glow */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-sky-100/60 rounded-full blur-2xl -translate-y-4 translate-x-4 pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* ── Col 2: Texto + Stats ── */}
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
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-4xl font-bold text-blue-600 mb-1">
                  {data.yearsExperience}+
                </p>
                <p className="text-slate-600 text-sm font-medium">años de experiencia clínica</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-slate-50 rounded-2xl p-6 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-slate-700 text-sm font-medium leading-tight">
                  {data.specialtyLabel}
                </p>
              </div>
            </motion.div>
          </div>



          {/* ── Col 3: Foto placeholder del doctor ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-200/40 to-sky-100/30 blur-2xl" />

            {/* Marco foto */}
            <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl shadow-blue-200/40 bg-white flex flex-col items-center justify-center gap-4 aspect-[3/4]">
              {/* Patrón de fondo */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(0,109,119,1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Gradiente superior */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/80 to-blue-50/50" />

              {/* Icono */}
              <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 border-2 border-dashed border-blue-300 flex items-center justify-center">
                <User className="w-14 h-14 text-blue-400" />
              </div>

              {/* Texto */}
              <div className="relative z-10 text-center px-6">
                <p className="text-blue-600 font-semibold text-sm">Foto del Dr. Alexander</p>
                <p className="text-slate-400 text-xs mt-1">Tu foto irá aquí</p>
              </div>

              {/* Línea inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
            </div>

            {/* Badge flotante */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-blue-100 rounded-2xl px-5 py-3 shadow-lg shadow-blue-100/50 text-center whitespace-nowrap"
            >
              <p className="text-slate-900 font-semibold text-sm">Dr. Alexander Cerda</p>
              <p className="text-blue-600 text-xs">Especialista en Ortodoncia</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
