export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "System Design & Architecture",
    description: "Designing scalable, resilient services, clear boundaries, and data models; pragmatic trade‑offs documented via ADRs/RFCs.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Frontend Development",
    description: "I am a Frontend Developer passionate about building modern, fast, and accessible interfaces. I enjoy turning designs into real digital experiences, focusing on usability, performance, and visual details.",
  },
  
];

export type Skill = (typeof skills)[number];

