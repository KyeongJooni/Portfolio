import { cx } from '@/styled-system/css';
import { card } from '@/styled-system/recipes';
import { ComponentPropsWithoutRef } from 'react';

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'glass' | 'bordered';
  hoverable?: boolean;
}

export default function Card({
  variant = 'default',
  hoverable = false,
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div className={cx(card({ variant, hoverable }), className)} {...props}>
      {children}
    </div>
  );
}
