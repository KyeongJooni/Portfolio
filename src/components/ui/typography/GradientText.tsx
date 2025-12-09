import { css, cx } from '@/styled-system/css';
import { ComponentPropsWithoutRef } from 'react';

interface GradientTextProps extends ComponentPropsWithoutRef<'span'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  animate?: boolean;
}

export default function GradientText({
  as: Component = 'span',
  animate = false,
  children,
  className,
  ...props
}: GradientTextProps) {
  const baseStyles = css({
    background: 'linear-gradient(135deg, {colors.brand.blue}, {colors.brand.purple})',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '200% 200%',
    fontWeight: '700',
  });

  const animatedStyles = animate
    ? css({
        animation: 'gradientShift 3s ease infinite',
      })
    : undefined;

  return (
    <Component className={cx(baseStyles, animatedStyles, className)} {...props}>
      {children}
    </Component>
  );
}
