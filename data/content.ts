// Todo el contenido del portfolio. Para actualizar la web basta con editar este archivo.

export const profile = {
  name: "Daniel García Cristellys",
  shortName: "Daniel García",
  role: "Desarrollador web y multiplataforma",
  location: "Madrid",
  email: "danielgarcris@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-garc%C3%ADa-cristellys-a72488362/",
  github: "https://github.com/DGarCri",
  whatsapp: "https://wa.me/34638420863",
};

export type Project = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href: string; primary?: boolean }[];
  /** Dirección que se muestra en la barra del navegador de la captura. */
  previewUrl: string;
  desktop: string;
  mobile: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "vinario",
    kicker: "Web y tienda online",
    title: "Vinario",
    summary:
      "Web para una bodega, tienda de vinos y espacio de catas de Madrid. Reúne la tienda online, el club de suscripción, la agenda de catas y los eventos privados en una sola experiencia.",
    highlights: [
      "Tienda online con carrito y packs de suscripción",
      "Agenda de catas, eventos privados y tarjetas regalo",
      "Verificación de edad y consentimiento de cookies",
    ],
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    links: [{ label: "Ver la web", href: "https://vinario-preview.vercel.app", primary: true }],
    previewUrl: "vinario-preview.vercel.app",
    desktop: "/proyectos/vinario-desktop.webp",
    mobile: "/proyectos/vinario-mobile.webp",
    accent: "#7a1f35",
  },
  {
    slug: "beauty-studio",
    kicker: "Propuesta de diseño web",
    title: "Beauty Studio MB",
    summary:
      "Propuesta de web para un estudio de cejas y pestañas de Valdemoro: identidad elegante, catálogo de tratamientos con precios y reserva directa. Pensada para captar clientas desde el móvil y desde Google.",
    highlights: [
      "Diseño editorial adaptado a la marca del estudio",
      "Páginas de tratamientos y SEO local",
      "Botón de reserva siempre a mano en el móvil",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Ver la demo", href: "https://beauty-studio-mb-demo.vercel.app", primary: true },
      { label: "Plantilla en GitHub", href: "https://github.com/DGarCri/web-centro-estetica" },
    ],
    previewUrl: "beauty-studio-mb-demo.vercel.app",
    desktop: "/proyectos/beauty-studio-desktop.webp",
    mobile: "/proyectos/beauty-studio-mobile.webp",
    accent: "#5b4636",
  },
  {
    slug: "confirma",
    kicker: "Aplicación web (SaaS)",
    title: "Confirma",
    summary:
      "App para profesionales que trabajan con cita: confirman cada cita por WhatsApp, cobran la señal por Bizum y ven de un vistazo quién no ha confirmado. La diseñé, la programé y la desplegué yo solo.",
    highlights: [
      "Panel «Para hacer ahora» con recordatorios y citas sin confirmar",
      "Autenticación propia y suscripciones con Stripe",
      "Instalable en el móvil (PWA) y con tests automáticos",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
    links: [
      { label: "Ver el código en GitHub", href: "https://github.com/DGarCri/confirma-app", primary: true },
    ],
    previewUrl: "github.com/DGarCri/confirma-app",
    desktop: "/proyectos/confirma-desktop.webp",
    mobile: "/proyectos/confirma-mobile.webp",
    accent: "#a8416a",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  badge?: string;
  /** Logo de la empresa o centro (ruta en /public). */
  logo?: string;
  points: string[];
};

export const experience: TimelineItem[] = [
  {
    period: "Jul 2026 – Sep 2026",
    title: "Desarrollador de aplicaciones web",
    place: "Madrid",
    points: [
      "Aplicaciones web para negocios locales.",
      "Desde la toma de requisitos con el cliente hasta la publicación.",
    ],
  },
  {
    period: "Mar 2026 – Jun 2026",
    title: "Desarrollador frontend (Shopware)",
    place: "Hob-by-Horse · Osnabrück, Alemania",
    logo: "/empresas/hob-by-horse.png",
    points: [
      "Desarrollo frontend de tienda online con Shopware.",
      "Tres meses trabajando en una empresa alemana, en un entorno internacional y en inglés.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2026 – actualidad",
    title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    place: "IES Clara del Rey · Madrid",
    badge: "En curso",
    points: ["Segundo curso: desarrollo móvil con Android (Kotlin y Java)."],
  },
  {
    period: "2024 – 2026",
    title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    place: "IES Clara del Rey · Madrid",
    points: [],
  },
  {
    period: "2021 – 2023",
    title: "Bachillerato",
    place: "Colegio Guzmán el Bueno · Madrid",
    points: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend y datos", items: ["PHP", "PostgreSQL", "MySQL", "Drizzle ORM", "Stripe"] },
  { group: "CMS y e-commerce", items: ["Shopware", "WordPress"] },
  { group: "Móvil", items: ["Android", "Kotlin", "Java"] },
  { group: "Herramientas", items: ["Git", "GitHub", "Vercel", "Docker"] },
];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado · usado a diario trabajando en Alemania" },
];

// ── Precios ─────────────────────────────────────────────────────────────

export type Plan = {
  name: string;
  idealFor: string;
  price: string;
  from?: boolean;
  delivery: string;
  payment: string;
  cta: string;
  whatsappText: string;
  includesPrevious?: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Esencial",
    idealFor: "Para empezar a tener presencia en internet con una web bonita y que funcione.",
    price: "290",
    delivery: "7 días",
    payment: "50 % al empezar",
    cta: "Quiero la Esencial",
    whatsappText: "¡Hola Daniel! Me interesa la web Esencial (290 €). ¿Hablamos?",
    features: [
      "Web de una página con todas tus secciones",
      "Diseño a medida con tus colores y tu logo",
      "Perfecta en móvil, tablet y ordenador",
      "Botón de WhatsApp y llamada directa",
      "Mapa de Google y horario",
      "Formulario de contacto",
      "Textos revisados para que vendan",
      "2 rondas de cambios incluidas",
    ],
  },
  {
    name: "Profesional",
    idealFor: "Para negocios que quieren aparecer en Google y conseguir clientes nuevos.",
    price: "450",
    delivery: "14 días",
    payment: "50 % al empezar",
    cta: "Quiero la Profesional",
    whatsappText: "¡Hola Daniel! Me interesa la web Profesional (450 €). ¿Hablamos?",
    includesPrevious: "Esencial",
    featured: true,
    features: [
      "Hasta 6 páginas (servicios, sobre ti, galería…)",
      "Una página para cada servicio, con sus precios",
      "SEO local para salir en Google en tu zona",
      "Conexión con tu ficha de Google y tus redes",
      "Botón de reserva (Booksy, Calendly o WhatsApp)",
      "Galería de fotos y opiniones de clientes",
      "Estadísticas de visitas",
      "3 rondas de cambios y 1 mes de soporte gratis",
    ],
  },
  {
    name: "Tienda online",
    idealFor: "Para vender tus productos, bonos o cursos por internet las 24 horas.",
    price: "690",
    from: true,
    delivery: "21 días",
    payment: "50 % al empezar",
    cta: "Quiero vender online",
    whatsappText: "¡Hola Daniel! Me interesa la Tienda online (desde 690 €). ¿Hablamos?",
    includesPrevious: "Profesional",
    features: [
      "Tienda con carrito y hasta 30 productos subidos",
      "Pagos con tarjeta, Bizum o PayPal",
      "Tarjetas regalo, bonos o cursos",
      "Avisos de pedido por correo",
      "Panel fácil para añadir productos tú mismo",
      "Textos legales y aviso de cookies",
      "Formación de 1 hora para que la gestiones",
      "3 rondas de cambios y 2 meses de soporte gratis",
    ],
  },
];

export const maintenance = {
  name: "Mantenimiento",
  price: "25",
  text: "Me encargo de que tu web siga funcionando, segura y al día, y te hago los cambios que necesites.",
  features: ["Cambios de textos y fotos", "Copias de seguridad", "Respuesta en 24 h"],
};

export const processSteps = [
  { title: "Hablamos", text: "Una llamada o unos mensajes para conocer tu negocio y lo que necesitas. Gratis y sin compromiso." },
  { title: "Diseño", text: "Te enseño una propuesta con tus colores y tus fotos antes de programar nada." },
  { title: "Desarrollo", text: "Construyo la web y te paso un enlace para que veas cómo avanza y me pidas cambios." },
  { title: "Publicación", text: "La subo a internet con tu dominio, la conecto con Google y te explico cómo funciona." },
];

export const faqs = [
  {
    q: "¿Tengo que pagar algo cada mes?",
    a: "No. La web es un pago único. Solo pagas el dominio (unos 12 € al año) y, si quieres, el mantenimiento de 25 € al mes, que puedes cancelar cuando quieras.",
  },
  {
    q: "¿Cómo se paga?",
    a: "La mitad al empezar y la otra mitad al terminar, cuando la web ya te guste. Puedes pagar por transferencia o Bizum.",
  },
  {
    q: "¿Qué necesitas de mí?",
    a: "Tu logo si lo tienes, algunas fotos de tu trabajo y la información de tus servicios. Si te falta algo, te ayudo a prepararlo.",
  },
  {
    q: "¿Podré cambiar cosas yo mismo?",
    a: "Sí. Te explico cómo hacer los cambios sencillos y, si lo prefieres, me los pides y los hago yo.",
  },
  {
    q: "¿Y si ya tengo una web?",
    a: "La rediseño o la mejoro. Escríbeme con el enlace y te digo qué cambiaría y cuánto costaría.",
  },
  {
    q: "¿Saldré en Google?",
    a: "Las webs Profesional y Tienda online incluyen SEO local: están preparadas para que Google las entienda y te muestre cuando alguien busque tus servicios en tu zona.",
  },
];
