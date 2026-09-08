'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

interface CallBubbleProps {
  phone: string; // e.g. "523323881703"
}

export default function CallBubble({ phone }: CallBubbleProps) {
  const [visible, setVisible] = useState(false);
  const [pulsed, setPulsed] = useState(false);

  // Aparece cuando el Hero ya no es visible (igual que WhatsApp bubble)
  useEffect(() => {
    const heroSection = document.getElementById('inicio');
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (heroSection) observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Pulse de atención cada 10 segundos (desfasado del WA bubble)
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setPulsed(true);
      setTimeout(() => setPulsed(false), 700);
    }, 10000);
    return () => clearInterval(id);
  }, [visible]);

  const href = `tel:+${phone}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="call-bubble"
          href={href}
          aria-label="Llamar al consultorio"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{
            opacity: 1,
            scale: pulsed ? [1, 1.18, 1] : 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            default: { type: 'spring', stiffness: 300, damping: 22 },
            scale: pulsed
              ? { type: 'tween', duration: 0.5 }
              : { type: 'spring', stiffness: 300, damping: 22 },
          }}
          /* Posicionada justo encima de la de WhatsApp (bottom-24 = 6rem) */
          className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-blue-500/40 group"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}
        >
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />

          {/* Phone icon */}
          <Phone className="w-6 h-6 fill-white text-white relative z-10" />

          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            ¡Llámanos!
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
