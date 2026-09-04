'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

import foto1 from '@/assets/gallery/foto-1.png';
import foto2 from '@/assets/gallery/foto-2.png';
import foto3 from '@/assets/gallery/foto-3.png';
import foto4 from '@/assets/gallery/foto-4.png';
import foto5 from '@/assets/gallery/foto-5.png';
import foto6 from '@/assets/gallery/foto-6.png';
import foto7 from '@/assets/gallery/foto-7.png';
import foto8 from '@/assets/gallery/foto-8.png';
import foto9 from '@/assets/gallery/foto-9.png';
import foto10 from '@/assets/gallery/foto-10.png';

const photos = [
    { src: foto1, alt: 'Caso de ortodoncia 1' },
    { src: foto2, alt: 'Caso de ortodoncia 2' },
    { src: foto3, alt: 'Caso de ortodoncia 3' },
    { src: foto4, alt: 'Caso de ortodoncia 4' },
    { src: foto5, alt: 'Caso de ortodoncia 5' },
    { src: foto6, alt: 'Caso de ortodoncia 6' },
    { src: foto7, alt: 'Caso de ortodoncia 7' },
    { src: foto8, alt: 'Caso de ortodoncia 8' },
    { src: foto9, alt: 'Caso de ortodoncia 9' },
    { src: foto10, alt: 'Caso de ortodoncia 10' },
];

type PhotoSrc = string | { src: string };

function resolveSrc(src: PhotoSrc): string {
    if (typeof src === 'string') return src;
    return src.src;
}

export default function Galery() {
    const [selected, setSelected] = useState<number | null>(null);

    const open = (i: number) => setSelected(i);
    const close = () => setSelected(null);
    const prev = () => setSelected((s) => (s! - 1 + photos.length) % photos.length);
    const next = () => setSelected((s) => (s! + 1) % photos.length);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'Escape') close();
    };

    return (
        <section
            id="galeria"
            className="relative py-28 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100"
        >
            {/* ── Orbs de fondo ── */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-300/15 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* ── Grid overlay ── */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,109,119,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,109,119,1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm uppercase tracking-widest mb-4">
                        <span className="h-px w-8 bg-blue-600" />
                        Galería de Casos
                        <span className="h-px w-8 bg-blue-600" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
                        Resultados que hablan por sí solos
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Cada sonrisa es una historia. Aquí encontrarás una muestra de los
                        tratamientos realizados en nuestro consultorio.
                    </p>
                </motion.div>

                {/* ── Grid de fotos ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {photos.map((photo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            onClick={() => open(i)}
                            id={`gallery-photo-${i + 1}`}
                            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg shadow-blue-100/60 border border-blue-100/80 aspect-square bg-white"
                        >
                            <img
                                src={resolveSrc(photo.src as PhotoSrc)}
                                alt={photo.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                draggable={false}
                            />
                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                <span className="text-white text-xs font-medium">Ver imagen</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {selected !== null && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4"
                        onClick={close}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        {/* Panel de imagen */}
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.88 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img
                                src={resolveSrc(photos[selected].src as PhotoSrc)}
                                alt={photos[selected].alt}
                                className="w-full h-full object-contain max-h-[85vh] bg-slate-900"
                                draggable={false}
                            />
                            {/* Contador */}
                            <div className=" absolute top-2 left-1/2 -translate-x-1/2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/20">
                                {selected + 1} / {photos.length}
                            </div>
                        </motion.div>

                        {/* Botón cerrar */}
                        <button
                            onClick={close}
                            id="lightbox-close"
                            className="absolute top-5 right-5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-2.5 border border-white/20 transition-all duration-200 hover:scale-110"
                            aria-label="Cerrar galería"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Botón anterior */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            id="lightbox-prev"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-3 border border-white/20 transition-all duration-200 hover:scale-110"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Botón siguiente */}
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            id="lightbox-next"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white rounded-full p-3 border border-white/20 transition-all duration-200 hover:scale-110"
                            aria-label="Siguiente imagen"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
