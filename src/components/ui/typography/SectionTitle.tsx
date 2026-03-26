import { css } from '@/styled-system/css';
import GradientText from './GradientText';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionTitleProps) {
  const containerStyles = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '3rem',
    textAlign: align,
  });

  const titleStyles = css({
    fontSize: '{fontSizes.6xl}',
    lineHeight: '1.2',
  });

  const subtitleStyles = css({
    fontSize: { base: '{fontSizes.lg}', md: '{fontSizes.xl}' },
    color: '{colors.text.secondary}',
    fontWeight: '400',
  });

  return (
    <div className={`${containerStyles} ${className || ''}`}>
      <GradientText as="h2" className={titleStyles}>
        {title}
      </GradientText>
      {subtitle && <p className={subtitleStyles}>{subtitle}</p>}
    </div>
  );
}
