// Todo el contenido del portfolio. Para actualizar la web basta con editar este archivo.

export const profile = {
  name: "Daniel García Cristellys",
  shortName: "Daniel García",
  role: "Desarrollador web y multiplataforma",
  location: "Madrid",
  email: "dani2005gc@gmail.com",
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
