import {
  SiReact,
  SiTypescript,
  SiStyledcomponents,
  SiReactquery,
  SiReacthookform,
  SiVite,
  SiJavascript,
  SiFirebase,
  SiFramer,
  SiNextdotjs,
  SiFigma,
  SiThreedotjs,
  SiVercel,
  SiPnpm,
  SiReactrouter,
  SiMantine,
  type IconType,
} from '@icons-pack/react-simple-icons';

export type TagIconEntry = {
  Icon: IconType;
  color: string;
};

export const tagIconMap: Record<string, TagIconEntry> = {
  React: { Icon: SiReact, color: '#61DAFB' },
  TypeScript: { Icon: SiTypescript, color: '#3178C6' },
  'Styled-Components': { Icon: SiStyledcomponents, color: '#DB7093' },
  'React Query': { Icon: SiReactquery, color: '#FF4154' },
  'React Hook Form': { Icon: SiReacthookform, color: '#EC5990' },
  Vite: { Icon: SiVite, color: '#646CFF' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },
  'Framer Motion': { Icon: SiFramer, color: '#0055FF' },
  'Next.js': { Icon: SiNextdotjs, color: '#000000' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  'Three.js': { Icon: SiThreedotjs, color: '#000000' },
  Vercel: { Icon: SiVercel, color: '#000000' },
  Pnpm: { Icon: SiPnpm, color: '#F69220' },
  'React Router': { Icon: SiReactrouter, color: '#CA4245' },
  Mantine: { Icon: SiMantine, color: '#339AF0' },
};

