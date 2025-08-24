// Build a list of available SVG logos from src/assets/logos
// Using Vite's import.meta.glob to keep imports clean and centralized

const modules = import.meta.glob('../assets/logos/*.svg', {
  eager: true,
  // Vite v5 style: returns string URLs
  query: '?url',
  import: 'default',
});

type LogoItem = { name: string; logo: string };

function toNiceName(filePath: string): string {
  const base = filePath.split('/').pop() || '';
  const withoutExt = base.replace(/\.[^.]+$/, '');
  const withoutLogo = withoutExt.replace(/-?logo$/i, '');
  const normalized = withoutLogo.replace(/[_-]+/g, ' ');
  const spaced = normalized.replace(/([a-z])([A-Z])/g, '$1 $2');
  const trimmed = spaced.trim().replace(/\s{2,}/g, ' ');
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}

// 👇 Cambia aquí los nombres según necesites
const allowedLogos = ["N8n","Python","Adobe Photoshop","Java Script","Supabase"]; 

export const logos: LogoItem[] = Object.entries(modules)
  .map(([path, url]) => ({ name: toNiceName(path), logo: url as string }))
  .filter(item => allowedLogos.includes(item.name)) // 👈 esta línea es la clave
  .sort((a, b) => a.name.localeCompare(b.name));

export type { LogoItem };



