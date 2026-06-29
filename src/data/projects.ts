import SupabaseIcon from '../assets/logos/Supabase-logo.svg?raw';
import TailwindIcon from '../assets/logos/Tailwind-logo.svg?raw';
import PostgresIcon from '../assets/logos/Postgres-logo.svg?raw';
import JavaScriptIcon from '../assets/logos/Java Script.svg?raw';

// Inline SVG icons for technologies not in logos folder
const NextJsIcon = `<svg viewBox="0 0 180 180" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#mask0)"><circle cx="90" cy="90" r="90" fill="black"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1V69.3L139.999 164.845C143.333 162.614 146.509 160.184 149.508 157.52Z" fill="url(#gradient0)"/><rect x="115" y="54" width="12" height="72" fill="url(#gradient1)"/><defs><linearGradient id="gradient0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="gradient1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></g></svg>`;

const ReactNativeIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.2" fill="none" transform="rotate(-60 12 12)"/></svg>`;

const PHPIcon = `<svg viewBox="0 0 50 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.3 10.3H9.7C10.9 10.3 11.7 9.8 11.7 8.8C11.7 7.9 11.1 7.5 9.9 7.5H7.7L7.3 10.3ZM0 18L2.8 0H9.3C12.9 0 15 1.7 15 4.7C15 8.4 12.5 11 8.5 11H5.6L4.8 15.7H0V18ZM22.5 18H18L18.8 13.4C19 12.2 18.5 11.5 17.3 11.5C16.4 11.5 15.5 12 15.1 13.1L14 18H9.5L12 4.4H16.5L16.2 6.1C17.2 4.9 18.7 4.1 20.4 4.1C23.4 4.1 24.6 5.9 24.1 8.8L22.5 18ZM32.3 10.3H34.7C35.9 10.3 36.7 9.8 36.7 8.8C36.7 7.9 36.1 7.5 34.9 7.5H32.7L32.3 10.3ZM25 18L27.8 0H34.3C37.9 0 40 1.7 40 4.7C40 8.4 37.5 11 33.5 11H30.6L29.8 15.7H25V18Z"/></svg>`;

export const projects = [
	{
		title: "BodyFit — Plataforma Web de Gimnasio",
		techStack: "Next.js • TypeScript • Supabase • Tailwind CSS",
		description: "Aplicación web completa para la gestión de un gimnasio con múltiples sedes. Incluye sistema de autenticación, panel de administración, gestión de membresías y catálogo de sedes dinámico.",
		ctaText: "Ver Repositorio →",
		ctaLink: "https://github.com/SebasHDV/bodyfit",
		icon: NextJsIcon,
	},
	{
		title: "El Raco — E-commerce con Panel Admin",
		techStack: "React • Vite • TypeScript • Supabase • Tailwind CSS",
		description: "Plataforma de comercio electrónico con panel de administración completo. Gestión de productos, categorías, pedidos y usuarios con interfaz moderna y responsiva.",
		ctaText: "Ver Repositorio →",
		ctaLink: "https://github.com/SebasHDV/el-raco",
		icon: SupabaseIcon,
	},
	{
		title: "Living Sports — App Móvil Fitness",
		techStack: "React Native • Expo • TypeScript • Supabase • NativeWind",
		description: "Red social fitness móvil donde los usuarios comparten logros, se unen a comunidades, participan en retos semanales y siguen su progreso de ejercicio. Colaborador activo del proyecto.",
		ctaText: "Ver Repositorio →",
		ctaLink: "https://github.com/nicoarbelaez/living-sports-app",
		icon: ReactNativeIcon,
	},
	{
		title: "Sistema de Gestión — Salón de Belleza",
		techStack: "PHP • MVC • MySQL • Bootstrap",
		description: "Aplicación web para la gestión integral de un salón de belleza. Módulo de agendamiento de citas, gestión de clientes, servicios y reportes. Arquitectura MVC con PHP nativo.",
		ctaText: "Ver Repositorio →",
		ctaLink: "https://github.com/SebasHDV/Salon-de-belleza",
		icon: PHPIcon,
	},
];