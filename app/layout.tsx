import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

// ─── Fuente ──────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ─── Constantes de sitio ──────────────────────────────────────────────────────
const SITE_URL    = 'https://dralexandercerda.com';
const SITE_NAME   = 'Dr. Alexander Cerda | Ortodoncista';
const TITLE       = 'Dr. Alexander Cerda | Ortodoncia y Ortopedia Maxilofacial — Zapopan, Jalisco';
const DESCRIPTION =
  'Especialista en Ortodoncia y Ortopedia Maxilofacial en Zapopan, Jalisco. Brackets, Invisalign, ortopedia infantil y más. Agenda tu valoración con el Dr. Leonel Alexander Cerda Urbina.';
const OG_IMAGE    = `${SITE_URL}/og-image.png`;

// ─── Metadata (Next.js Metadata API) ─────────────────────────────────────────
export const metadata: Metadata = {
  // ── Básicos ────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | Dr. Alexander Cerda`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'ortodoncia Zapopan',
    'ortodoncista Zapopan',
    'ortodoncista Jalisco',
    'Invisalign Zapopan',
    'brackets Zapopan',
    'ortopedia maxilofacial Jalisco',
    'ortodoncia infantil Zapopan',
    'Dr. Alexander Cerda',
    'Dr. Leonel Alexander Cerda Urbina',
    'alineadores transparentes',
    'ortodoncia adultos',
    'diseño de sonrisa Zapopan',
    'blanqueamiento dental Zapopan',
  ],
  authors: [{ name: 'Dr. Leonel Alexander Cerda Urbina', url: SITE_URL }],
  creator: 'Dr. Leonel Alexander Cerda Urbina',
  publisher: 'Dr. Alexander Cerda Ortodoncista',

  // ── Canonical & alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: { 'es-MX': SITE_URL },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'es_MX',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Dr. Alexander Cerda — Ortodoncista en Zapopan, Jalisco',
        type: 'image/png',
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@dr.alexandercerda',
    site: '@dr.alexandercerda',
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Iconos / Favicon (Next.js Metadata API) ──────────────────────────────
  icons: {
    icon: [
      { url: '/apple-icon.png', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '32x32',  type: 'image/png' },
      { url: '/apple-icon.png', sizes: '96x96',  type: 'image/png' },
      { url: '/apple-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon.png', sizes: '76x76',  type: 'image/png' },
      { url: '/apple-icon.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/apple-icon.png',
  },

  // ── Verificación (agrega tus códigos cuando los tengas) ───────────────────
  // verification: {
  //   google: 'TU_CÓDIGO_GOOGLE_SEARCH_CONSOLE',
  // },

  // ── Categoría ────────────────────────────────────────────────────────────
  category: 'health',
};


// ─── JSON-LD: @graph con Dentist + Person + WebSite + FAQPage ────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ── 1. Dentist (negocio local) ──────────────────────────────────────────
    {
      '@type': 'Dentist',
      '@id': `${SITE_URL}/#dentist`,
      name: 'Dr. Leonel Alexander Cerda Urbina',
      alternateName: 'Dr. Alexander Cerda',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 520,
        height: 130,
      },
      image: OG_IMAGE,
      description: DESCRIPTION,
      priceRange: '$$',
      telephone: '+52-33-3642-9896',
      email: 'alexandercerda1@gmail.com',
      sameAs: [
        'https://instagram.com/dr.alexandercerda',
        `${SITE_URL}`,
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Abedules 539',
        addressLocality: 'Zapopan',
        addressRegion: 'Jalisco',
        postalCode: '45116',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '20.7214',
        longitude: '-103.3859',
      },
      hasMap: 'https://www.google.com/maps/search/Natura+Grupo+Medico+Abedules+539+Zapopan',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '14:00',
        },
      ],
      medicalSpecialty: 'Dentistry',
      knowsAbout: [
        'Ortodoncia',
        'Invisalign',
        'Brackets',
        'Ortopedia Maxilofacial',
        'Diseño de Sonrisa',
        'Blanqueamiento Dental',
        'Ortodoncia Infantil',
        'Alineadores Transparentes',
      ],
      employee: { '@id': `${SITE_URL}/#doctor` },
    },

    // ── 2. Person (perfil del doctor — Knowledge Panel) ─────────────────────
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#doctor`,
      name: 'Dr. Leonel Alexander Cerda Urbina',
      alternateName: 'Dr. Alexander Cerda',
      jobTitle: 'Ortodoncista y Ortopedista Maxilofacial',
      worksFor: { '@id': `${SITE_URL}/#dentist` },
      url: SITE_URL,
      image: OG_IMAGE,
      sameAs: ['https://instagram.com/dr.alexandercerda'],
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidad Americana UAM, Nicaragua',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Universidad de Guadalajara',
        },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Especialidad en Ortodoncia y Ortopedia Maxilofacial',
          credentialCategory: 'degree',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Certificado Invisalign',
          credentialCategory: 'certificate',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Certificación Técnica MBT',
          credentialCategory: 'certificate',
        },
      ],
    },

    // ── 3. WebSite (sitelinks search box para Google) ────────────────────────
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Dr. Alexander Cerda | Ortodoncista',
      description: DESCRIPTION,
      inLanguage: 'es-MX',
      publisher: { '@id': `${SITE_URL}/#dentist` },
    },

    // ── 4. FAQPage (rich results en Google) ─────────────────────────────────
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué tipo de ortodoncia puedo utilizar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El Dr. Alexander Cerda trabaja con brackets convencionales, de autoligado, estéticos y alineadores transparentes. Después de tu valoración te explicará la mejor alternativa según las características de tu caso.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Atiende a niños?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El Dr. Cerda realiza tratamientos de ortodoncia interceptiva, ortopedia maxilofacial, mantenedores de espacio y corrección de hábitos para pacientes en etapa de crecimiento.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo volver a utilizar ortodoncia si mis dientes se movieron?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El Dr. Cerda realiza re-tratamientos en casos de recidiva. Es más común de lo que crees y tiene solución efectiva.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Los alineadores son adecuados para todos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende de las características de cada caso. Durante la valoración el doctor revisará si los alineadores son la alternativa más indicada y presentará todas las opciones disponibles.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Dónde está ubicado el consultorio del Dr. Alexander Cerda?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El consultorio se encuentra en Natura Grupo Médico, Av. Abedules 539, Zapopan, Jalisco, México.',
          },
        },
      ],
    },
  ],
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es-MX" className={inter.variable}>
      <head>
        {/* ── Favicon: Next.js lo genera automáticamente desde app/icon.png ── */}
        {/* apple-touch-icon: icono en pantalla de inicio iOS/iPadOS ── */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="76x76"   href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        {/* Windows tiles ── */}
        <meta name="msapplication-TileImage" content="/apple-icon.png" />
        <meta name="msapplication-TileColor" content="#006D77" />
        <link rel="manifest" href="/manifest.json" />


        {/* ── Tema de color (barra del navegador móvil) ── */}
        <meta name="theme-color" content="#006D77" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)"  content="#006D77" />

        {/* ── iOS PWA / Safari ── */}
        <meta name="apple-mobile-web-app-capable"          content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title"            content="Dr. Alexander Cerda" />
        <meta name="mobile-web-app-capable"                content="yes" />
        {/* Evita que iOS convierta automáticamente teléfonos/fechas en enlaces */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        {/* ── Rendimiento: preconectar a Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Geo ── */}
        <meta name="geo.region"      content="MX-JAL" />
        <meta name="geo.placename"   content="Zapopan, Jalisco, México" />
        <meta name="geo.position"    content="20.7214;-103.3859" />
        <meta name="ICBM"            content="20.7214, -103.3859" />

        {/* ── JSON-LD ── */}
        <Script
          id="json-ld-dentist"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className="min-h-screen bg-white antialiased font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
