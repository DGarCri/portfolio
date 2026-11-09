# Portfolio · Daniel García Cristellys

Mi web personal: proyectos, experiencia (Erasmus+ en Alemania), formación y tecnologías.

**Stack:** Next.js 15 (App Router, generación estática) · React 19 · TypeScript · Tailwind CSS 4 · `next/image` · `next/font`.

Diseñada mobile first: se adapta al móvil, a la tablet y al ordenador. Las animaciones de aparición respetan
`prefers-reduced-motion` y el contenido se ve aunque JavaScript no cargue.

## Editar el contenido

Todo el texto está en [`data/content.ts`](data/content.ts): proyectos, experiencia, formación, tecnologías e idiomas.
Las capturas de los proyectos van en `public/proyectos/` (una de ordenador y otra de móvil por proyecto).

## Ejecutar en local

```bash
npm install
npm run dev
```

Comprobaciones: `npm run lint`, `npx tsc --noEmit` y `npm run build`.
