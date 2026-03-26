const ease = [0.22, 1, 0.36, 1] as const;

export const experienceItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};
