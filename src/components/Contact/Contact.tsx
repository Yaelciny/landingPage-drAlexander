'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowRight } from 'lucide-react';

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import type { ContactData } from '@/data/nat';

interface ContactProps {
  data: ContactData;
}

export default function Contact({ data }: ContactProps) {
  return (
    <section
      id="contacto"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-50 to-transparent opacity-70 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-50 to-transparent opacity-60 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA block */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-4"
            >
              <span className="h-px w-8 bg-cyan-500" />
              {data.sectionLabel}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight"
            >
              {data.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed mb-10"
            >
              {data.subheadline}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href={data.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-cta"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              {data.ctaLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Right — contact info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl shadow-slate-900/20"
          >
            {/* Doctor info */}
            <div className="mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                <span className="text-white text-xl font-bold">AC</span>
              </div>
              <h3 className="text-white font-bold text-lg leading-snug mb-1">
                {data.doctorName}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {data.specialty}
              </p>
            </div>

            {/* Contact items */}
            <ul className="space-y-4">
              <li>
                <a
                  href={data.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-location"
                  className="group flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Ubicación</p>
                    <p className="text-slate-200 text-sm flex items-center gap-1">
                      {data.location}
                      <ArrowUpRight className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={data.phoneHref}
                  id="contact-phone"
                  className="group flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Teléfono</p>
                    <p className="text-slate-200 text-sm">{data.phone}</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={data.emailHref}
                  id="contact-email"
                  className="group flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Correo</p>
                    <p className="text-slate-200 text-sm">{data.email}</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={data.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram"
                  className="group flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Instagram</p>
                    <p className="text-slate-200 text-sm flex items-center gap-1">
                      {data.instagram}
                      <ArrowUpRight className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
