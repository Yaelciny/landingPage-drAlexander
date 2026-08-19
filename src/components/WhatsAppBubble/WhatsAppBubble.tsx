'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhatsAppBubbleProps {
  phone: string;   // e.g. "523336429896"
  message?: string;
}

export default function WhatsAppBubble({
  phone,
  message = '¡Hola! Me gustaría agendar una valoración.',
}: WhatsAppBubbleProps) {
  const [visible, setVisible] = useState(false);
  const [pulsed, setPulsed] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('inicio');

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Muestra la burbuja cuando el Hero ya NO es visible
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (heroSection) observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  // Pulse de atención cada 8 segundos
  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => {
      setPulsed(true);
      setTimeout(() => setPulsed(false), 700);
    }, 8000);
    return () => clearInterval(id);
  }, [visible]);

  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="wa-bubble"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{
            opacity: 1,
            scale: pulsed ? [1, 1.18, 1] : 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl shadow-green-500/40 group"
          style={{ background: 'linear-gradient(135deg, #25d366, #128c5e)' }}
        >
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />

          {/* WhatsApp SVG icon */}
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.648 4.803 1.778 6.826L2 30l7.378-1.752A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.419a11.376 11.376 0 0 1-5.8-1.587l-.416-.247-4.377 1.039 1.058-4.265-.27-.436A11.376 11.376 0 0 1 4.58 16.003c0-6.302 5.121-11.423 11.423-11.423S27.42 9.7 27.42 16.003c0 6.301-5.121 11.416-11.417 11.416zm6.254-8.554c-.343-.172-2.03-1.001-2.344-1.115-.315-.115-.543-.172-.773.172-.228.344-.888 1.115-1.088 1.344-.2.229-.4.258-.742.086-.343-.172-1.447-.533-2.756-1.7-1.019-.908-1.707-2.029-1.908-2.373-.2-.343-.022-.529.15-.7.154-.154.343-.401.515-.601.171-.2.228-.344.343-.572.114-.229.057-.43-.029-.601-.086-.172-.772-1.863-1.058-2.549-.278-.668-.561-.578-.772-.589l-.658-.011c-.229 0-.601.086-.915.43-.315.343-1.202 1.173-1.202 2.862 0 1.69 1.23 3.322 1.4 3.55.172.229 2.42 3.693 5.862 5.18.82.354 1.46.566 1.959.724.823.262 1.573.225 2.165.137.66-.099 2.03-.829 2.315-1.63.286-.8.286-1.488.2-1.63-.085-.143-.314-.229-.657-.401z" />
          </svg>

          {/* Tooltip */}
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
            ¡Escríbenos por WhatsApp!
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
