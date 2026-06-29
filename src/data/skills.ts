export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Frontend Development",
    description: "Desarrollador Frontend apasionado por construir interfaces modernas, rápidas y accesibles. Me especializo en React, Next.js y TypeScript, transformando diseños en experiencias digitales reales con foco en usabilidad, rendimiento y atención al detalle visual.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H5v-2h6v2zm8-4H5v-2h14v2zm0-4H5V7h14v2z"/></svg>`,
    title: "Backend & Bases de Datos",
    description: "Experiencia construyendo APIs REST y gestionando bases de datos relacionales con PostgreSQL, MySQL y Supabase. Capaz de diseñar esquemas eficientes, manejar autenticación y estructurar lógica de negocio escalable.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>`,
    title: "Desarrollo Móvil",
    description: "Colaborador en proyectos de aplicaciones móviles con React Native y Expo. Experiencia en integración con APIs, gestión de estado y desarrollo de UIs nativas con NativeWind para experiencias fluidas en iOS y Android.",
  },
];

export type Skill = (typeof skills)[number];

