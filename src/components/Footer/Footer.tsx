'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import logo from '@/assets/logo/logo-3.png';

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

interface FooterProps {
  contact: ContactData;
}

export default function Footer({ contact }: FooterProps) {
  const year = new Date().getFullYear();

  // Scroll suave a la seccion indicada (mismo patron que Navbar)
  const handleNav = (href: string) => {
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Image
              src={logo}
              alt="Dr. Alexander Cerda — Ortodoncista"
              height={100}
              className="h-20 w-auto object-contain transition-opacity mb-4"
              loading="eager"
              priority
            />
            <p className="text-white font-bold text-lg mb-1">{contact.doctorName}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{contact.specialty}</p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Secciones
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Sobre mí', href: '#sobre-mi' },
                { label: 'Tratamientos', href: '#tratamientos' },
                { label: 'Pagos', href: '#pagos' },
                { label: 'Preguntas frecuentes', href: '#faq' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-slate-400 leading-snug">{contact.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href={contact.phoneHref} className="hover:text-blue-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href={contact.emailHref} className="hover:text-blue-400 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a
                  href={contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {year} {contact.doctorName}. Todos los derechos reservados.</p>
          <p>Zapopan, Jalisco, México</p>
        </div>
      </div>
    </footer>
  );
}
