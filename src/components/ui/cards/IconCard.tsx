import { css } from '@/styled-system/css';
import Card from './Card';

interface IconCardProps {
  number: number;
  title: string;
  description: string;
  variant?: 'default' | 'glass' | 'bordered';
  hoverable?: boolean;
}

export default function IconCard({
  number,
  title,
  description,
  variant = 'glass',
  hoverable = false,
}: IconCardProps) {
  const contentStyles = css({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  });

  const numberStyles = css({
    fontSize: '{fontSizes.4xl}',
    fontWeight: '900',
    fontFamily: 'pretendard',
    color: '#A78BFA',
    marginBottom: 2,
  });

  const titleStyles = css({
    fontSize: '{fontSizes.2xl}',
    fontWeight: '700',
    color: '{colors.text.primary}',
  });

  const descriptionStyles = css({
    fontSize: '{fontSizes.lg}',
    color: '{colors.text.secondary}',
    lineHeight: '1.7',
  });

  return (
    <Card variant={variant} hoverable={hoverable}>
      <div className={contentStyles}>
        <span className={numberStyles}>{String(number).padStart(2, '0')}</span>
        <h3 className={titleStyles}>{title}</h3>
        <p className={descriptionStyles}>{description}</p>
      </div>
    </Card>
  );
}
