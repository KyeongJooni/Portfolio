type ContactCopy = {
  section: {
    title: string;
    subtitle: string;
  };
  motion: {
    delayStep: number;
    ctaDelay: number;
    ctaDuration: number;
  };
  cta?: {
    text: string;
    heading: string;
  };
};

export const CONTACT_COPY: ContactCopy = {
  section: {
    title: 'Contact',
    subtitle: '언제든지 편하게 연락주세요!',
  },
  motion: {
    delayStep: 0.1,
    ctaDelay: 0.6,
    ctaDuration: 0.6,
  },
  // cta를 사용하려면 주석을 해제하고 값 지정
  // cta: {
  //   text: '함께 멋진 프로젝트를 만들어보고 싶으신가요?',
  //   heading: "Let's Work Together!",
  // },
};

