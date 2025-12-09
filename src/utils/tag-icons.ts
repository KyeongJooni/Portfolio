import {
  SiReact,
  SiTypescript,
  SiStyledcomponents,
  SiReactquery,
  SiReacthookform,
  SiVite,
  SiKakaotalk,
  SiJavascript,
  SiFirebase,
  SiFramer,
  SiNextdotjs,
  SiFigma,
  SiThreedotjs,
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
  KakaoCloud: { Icon: SiKakaotalk, color: '#FFCD00' },
  JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },
  'Framer Motion': { Icon: SiFramer, color: '#0055FF' },
  'Next.js': { Icon: SiNextdotjs, color: '#000000' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  'Three.js': { Icon: SiThreedotjs, color: '#000000' },
};

