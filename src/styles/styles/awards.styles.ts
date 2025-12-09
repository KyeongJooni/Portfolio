import { css } from '@/styled-system/css';

export const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem 0',
  backgroundColor: '{colors.background.secondary}',
});

export const containerStyles = css({
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: '0 2rem',
});

export const gridStyles = css({
  display: 'grid',
  gridTemplateColumns: {
    base: 'repeat(auto-fit, minmax(320px, 1fr))',
    md: 'repeat(auto-fit, minmax(360px, 1fr))',
    lg: 'repeat(auto-fit, minmax(360px, 1fr))',
  },
  gap: '2rem',
  marginTop: '3rem',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'stretch',
});

export const cardStyles = css({
  width: '100%',
  backgroundColor: '{colors.background.secondary}',
  border: '1px solid {colors.border.primary}',
  borderRadius: '16px',
  padding: '2rem 4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all {durations.normal}',
  _hover: {
    transform: 'translateY(-8px)',
    borderColor: '{colors.brand.blue}',
    boxShadow: '0 12px 32px rgba(59, 130, 246, 0.3)',
  },
  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, {colors.brand.blue}, {colors.brand.purple})',
  },
});

export const iconStyles = css({
  fontSize: '{fontSizes.5xl}',
  marginBottom: '1.5rem',
});

export const rankBadgeStyles = css({
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: 'rgba(59, 130, 246, 0.2)',
  border: '1px solid {colors.brand.blue}',
  borderRadius: '20px',
  fontSize: '{fontSizes.xs}',
  fontWeight: '700',
  color: '{colors.brand.blue}',
  textTransform: 'uppercase',
});

export const titleStyles = css({
  fontSize: '{fontSizes.xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
  marginBottom: '0.75rem',
});

export const organizationStyles = css({
  fontSize: '{fontSizes.base}',
  fontWeight: '600',
  color: '{colors.brand.purple}',
  marginBottom: '0.5rem',
});

export const dateStyles = css({
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
  marginBottom: '1.5rem',
});

export const descriptionStyles = css({
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  whiteSpace: 'pre-line',
});

