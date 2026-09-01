'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logo/logo-2.png';

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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent opacity-70 rounded-full translate-x-1/3 -translate-y-1/3 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-slate-100 to-transparent opacity-60 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header + CTA centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm uppercase tracking-widest mb-4">
            <span className="h-px w-8 bg-blue-600" />
            {data.sectionLabel}
            <span className="h-px w-8 bg-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
            {data.headline}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            {data.subheadline}
          </p>
          <a
            href={data.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-cta"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-700/25 hover:shadow-blue-700/40 hover:scale-105 transition-all duration-300"
          >
            {data.ctaLabel}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Left — Mapa embebido */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-100 min-h-[420px]"
          >
            <iframe
              id="contact-map"
              title="Ubicación del consultorio — Natura Grupo Médico"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.0!2d-103.4159!3d20.7127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae7e7a4f1f4f%3A0x0!2sAv.%20Abedules%20539%2C%20Zapopan%2C%20Jalisco%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Right — contact info card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-100/50 border border-blue-50"
          >
            {/* Doctor info */}
            <div className="mb-8">
              <Image
                src={logo}
                alt="Dr. Alexander Cerda — Ortodoncista"
                height={56}
                className="h-14 w-auto object-contain mb-4"
              />
              <h3 className="text-slate-900 font-bold text-lg leading-snug mb-1">
                {data.doctorName}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
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
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Ubicación</p>
                    <p className="text-slate-700 text-sm flex items-center gap-1">
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
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Teléfono</p>
                    <p className="text-slate-700 text-sm">{data.phone}</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={data.emailHref}
                  id="contact-email"
                  className="group flex items-start gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Correo</p>
                    <p className="text-slate-700 text-sm">{data.email}</p>
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
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Instagram</p>
                    <p className="text-slate-700 text-sm flex items-center gap-1">
                      {data.instagram}
                      <ArrowUpRight className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
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
