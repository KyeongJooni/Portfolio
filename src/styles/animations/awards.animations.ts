const ease = [0.22, 1, 0.36, 1] as const;

export const awardsCardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};
