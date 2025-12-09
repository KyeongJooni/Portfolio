import { cx } from '@/styled-system/css';
import { button } from '@/styled-system/recipes';
import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(button({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
