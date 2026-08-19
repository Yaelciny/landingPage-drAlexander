// ─────────────────────────────────────────────────────────────────────────────
// cerda-content.ts
// Fuente única de verdad para todos los textos de la landing del
// Dr. Leonel Alexander Cerda Urbina — Ortodoncia y Ortopedia Maxilofacial.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface HeroData {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  badge: string;
}

export interface Credential {
  id: string;
  text: string;
}

export interface AboutData {
  sectionLabel: string;
  title: string;
  body: string;
  credentials: Credential[];
  yearsExperience: number;
  patientsLabel: string;
  specialtyLabel: string;
}

export interface Treatment {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface TreatmentCategory {
  id: string;
  label: string;
  treatments: Treatment[];
}

export interface TreatmentsData {
  sectionLabel: string;
  title: string;
  subtitle: string;
  categories: TreatmentCategory[];
}

export interface PaymentFacility {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface PaymentsData {
  sectionLabel: string;
  title: string;
  intro: string;
  facilities: PaymentFacility[];
  disclaimer: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  sectionLabel: string;
  title: string;
  items: FaqItem[];
}

export interface ContactData {
  sectionLabel: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  doctorName: string;
  specialty: string;
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  instagram: string;
  instagramHref: string;
  mapsHref: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  locale: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const siteMetadata: SiteMetadata = {
  title:
    "Dr. Alexander Cerda | Ortodoncia y Ortopedia Maxilofacial — Zapopan, Jalisco",
  description:
    "Especialista en Ortodoncia y Ortopedia Maxilofacial. Brackets, Invisalign, ortopedia infantil y más. Agenda tu valoración en Zapopan, Jalisco.",
  locale: "es-MX",
};

export const hero: HeroData = {
  headline: "Transforma tu sonrisa con un tratamiento diseñado para ti",
  subheadline:
    "Soy el Dr. Leonel Alexander Cerda Urbina, especialista en Ortodoncia y Ortopedia Maxilofacial. Brindo atención a niños, jóvenes y adultos mediante diagnósticos precisos, planificación digital y tratamientos adaptados a las necesidades de cada paciente.",
  ctaLabel: "Agendar mi cita",
  ctaHref: "#contacto",
  badge: "Certificado Invisalign · MBT · Escaneo 3D",
};

export const about: AboutData = {
  sectionLabel: "Sobre mí",
  title: "Atención cercana con respaldo científico",
  body: "Soy Cirujano Dentista con Especialidad en Ortodoncia y cuento con 5 años de experiencia clínica. Me especializo en el diagnóstico y tratamiento de alteraciones dentales y maxilares. Mi objetivo es brindarte una atención cercana, explicarte claramente cada etapa y ayudarte a elegir el tratamiento adecuado para tu sonrisa.",
  credentials: [
    {
      id: "cred-1",
      text: "Licenciatura en Médico Cirujano Dentista — Universidad Americana UAM, Nicaragua.",
    },
    {
      id: "cred-2",
      text: "Especialidad en Ortodoncia — Universidad de Guadalajara.",
    },
    {
      id: "cred-3",
      text: "Ortodoncista certificado en Alineadores Invisalign.",
    },
    {
      id: "cred-4",
      text: "Certificación en técnica MBT.",
    },
    {
      id: "cred-5",
      text: "Experiencia en planificación digital y escaneo intraoral 3D.",
    },
  ],
  yearsExperience: 5,
  patientsLabel: "Pacientes atendidos",
  specialtyLabel: "Ortodoncia & Ortopedia Maxilofacial",
};

export const treatments: TreatmentsData = {
  sectionLabel: "Tratamientos",
  title: "Soluciones para cada etapa de tu vida",
  subtitle:
    "Desde la ortodoncia preventiva en la infancia hasta tratamientos estéticos en adultos, cuento con opciones para cada caso.",
  categories: [
    {
      id: "cat-diagnostico",
      label: "Diagnóstico",
      treatments: [
        {
          id: "diag-1",
          icon: "ScanLine",
          title: "Diagnóstico y planeación digital",
          description:
            "Evaluación mediante escaneo intraoral y simulación 3D para una planificación precisa y personalizada.",
        },
      ],
    },
    {
      id: "cat-ortodoncia",
      label: "Ortodoncia",
      treatments: [
        {
          id: "ort-1",
          icon: "Sparkles",
          title: "Ortodoncia con brackets",
          description:
            "Convencionales, autoligado y estéticos de cerámica. La opción clásica con resultados probados para todo tipo de maloclusiones.",
        },
        {
          id: "ort-2",
          icon: "Layers",
          title: "Ortodoncia con alineadores",
          description:
            "Tratamientos discretos con Invisalign y Aliwell. Removibles, cómodos y casi invisibles para tu día a día.",
        },
        {
          id: "ort-3",
          icon: "Stethoscope",
          title: "Ortodoncia combinada con cirugía maxilofacial",
          description:
            "Para casos que requieren tratamiento conjunto quirúrgico-ortodóncico a fin de lograr resultados funcionales y estéticos óptimos.",
        },
        {
          id: "ort-4",
          icon: "RefreshCw",
          title: "Re-tratamientos de ortodoncia",
          description:
            "Para pacientes cuyos dientes volvieron a moverse tras un tratamiento previo. Recuperamos el resultado que merecías.",
        },
      ],
    },
    {
      id: "cat-infantil",
      label: "Ortodoncia Infantil",
      treatments: [
        {
          id: "inf-1",
          icon: "Baby",
          title: "Ortodoncia interceptiva infantil",
          description:
            "Intervención temprana para problemas de falta de espacio o mordida, aprovechando el crecimiento activo del paciente.",
        },
        {
          id: "inf-2",
          icon: "Star",
          title: "Aparatos funcionales infantiles",
          description:
            "Favorecen el desarrollo dental y esquelético en niños y adolescentes, guiando el crecimiento de los maxilares.",
        },
        {
          id: "inf-3",
          icon: "Shield",
          title: "Ortopedia maxilofacial en niños y adolescentes",
          description:
            "Aparatos diseñados para orientar el desarrollo óseo de los maxilares durante las etapas de crecimiento.",
        },
        {
          id: "inf-4",
          icon: "Ruler",
          title: "Mantenedores de espacio",
          description:
            "Conservan el espacio necesario tras la pérdida prematura de dientes de leche para que los definitivos erupcionen correctamente.",
        },
        {
          id: "inf-5",
          icon: "Activity",
          title: "Corrección de hábitos",
          description:
            "Tratamiento de deglución atípica, respiración bucal y succión digital que afectan el desarrollo oral y facial.",
        },
      ],
    },
    {
      id: "cat-complementarios",
      label: "Complementarios",
      treatments: [
        {
          id: "comp-1",
          icon: "Anchor",
          title: "Retenedores",
          description:
            "Fijos, guardas transparentes y Placa Hawley para mantener los resultados de tu tratamiento a largo plazo.",
        },
        {
          id: "comp-2",
          icon: "Zap",
          title: "Tratamiento de la articulación temporomandibular (ATM)",
          description:
            "Guardas oclusales para desprogramar y relajar la musculatura mandibular, aliviando dolor y disfunción.",
        },
        {
          id: "comp-3",
          icon: "Sun",
          title: "Blanqueamiento dental",
          description:
            "Mejora el tono y la luminosidad de tus dientes con un protocolo seguro y efectivo.",
        },
        {
          id: "comp-4",
          icon: "Smile",
          title: "Diseño de sonrisa",
          description:
            "Planificación personalizada que integra estética, función y proporción para lograr la sonrisa que siempre quisiste.",
        },
        {
          id: "comp-5",
          icon: "Droplets",
          title: "Limpieza dental",
          description:
            "Eliminación profesional de placa bacteriana y sarro para mantener tus dientes y encías en óptimas condiciones.",
        },
      ],
    },
  ],
};

export const payments: PaymentsData = {
  sectionLabel: "Financiamiento",
  title: "Facilidades de pago",
  intro:
    "Cuento con diferentes alternativas para ayudarte a comenzar tu tratamiento:",
  facilities: [
    {
      id: "pay-1",
      icon: "CreditCard",
      title: "Tarjetas de crédito y débito",
      description:
        "Aceptamos las principales tarjetas para que tu pago sea fácil y seguro.",
    },
    {
      id: "pay-2",
      icon: "CalendarDays",
      title: "Financiamiento en ortodoncia",
      description:
        "Opciones de financiamiento diseñadas especialmente para tratamientos de ortodoncia.",
    },
    {
      id: "pay-3",
      icon: "Banknote",
      title: "Pago inicial y mensualidades",
      description:
        "Comienza con un enganche accesible y distribuye el resto en cómodas mensualidades.",
    },
    {
      id: "pay-4",
      icon: "BadgePercent",
      title: "10% de descuento al pago total",
      description:
        "Obtén un descuento especial al liquidar el tratamiento completo en un solo pago.",
    },
    {
      id: "pay-5",
      icon: "Percent",
      title: "Meses sin intereses",
      description:
        "Disponibles con tarjetas participantes. Consulta las promociones vigentes.",
    },
  ],
  disclaimer:
    "* Aplican términos y condiciones de acuerdo con el tratamiento y la institución bancaria.",
};

export const faq: FaqData = {
  sectionLabel: "Preguntas frecuentes",
  title: "¿Tienes dudas? Aquí las respondo",
  items: [
    {
      id: "faq-1",
      question: "¿Qué tipo de ortodoncia puedo utilizar?",
      answer:
        "Trabajo con brackets convencionales, de autoligado, estéticos y alineadores transparentes. Después de tu valoración te explicaré la mejor alternativa según las características de tu caso.",
    },
    {
      id: "faq-2",
      question: "¿Atiendes a niños?",
      answer:
        "Sí. Realizo tratamientos de ortodoncia interceptiva, ortopedia maxilofacial, mantenedores de espacio y corrección de hábitos para pacientes en etapa de crecimiento.",
    },
    {
      id: "faq-3",
      question:
        "¿Puedo volver a utilizar ortodoncia si mis dientes se movieron?",
      answer:
        "Sí. Realizo re-tratamientos en casos de recidiva. Es más común de lo que crees y tiene solución efectiva.",
    },
    {
      id: "faq-4",
      question: "¿Los alineadores son adecuados para todos?",
      answer:
        "Depende de las características de cada caso. Durante tu valoración revisaré si esta alternativa es la más indicada para ti y te presentaré todas las opciones disponibles.",
    },
  ],
};

export const contact: ContactData = {
  sectionLabel: "Contacto",
  headline: "Da el primer paso hacia tu nueva sonrisa",
  subheadline:
    "Agenda una valoración conmigo para conocer el estado de tu sonrisa y encontrar el tratamiento adecuado para ti.",
  ctaLabel: "Agendar valoración",
  ctaHref: "https://wa.me/523336429896",
  doctorName: "Dr. Leonel Alexander Cerda Urbina",
  specialty:
    "Cirujano Dentista con Especialidad en Ortodoncia y Ortopedia Maxilofacial",
  location: "Natura Grupo Médico, Av. Abedules 539, Zapopan, Jalisco",
  phone: "+52 33 3642 9896",
  phoneHref: "tel:+523336429896",
  email: "alexandercerda1@gmail.com",
  emailHref: "mailto:alexandercerda1@gmail.com",
  instagram: "@dr.alexandercerda",
  instagramHref: "https://instagram.com/dr.alexandercerda",
  mapsHref:
    "https://www.google.com/maps/search/Natura+Grupo+Medico+Abedules+539+Zapopan",
};
