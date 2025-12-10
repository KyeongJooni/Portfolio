import { useInView } from 'react-intersection-observer';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.4, triggerOnce = true } = options;

  return useInView({
    triggerOnce,
    threshold,
  });
}
