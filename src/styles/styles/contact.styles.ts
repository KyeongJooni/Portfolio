import { css } from '@/styled-system/css';

export const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem 0',
});

export const containerStyles = css({
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%',
  padding: '0 2rem',
});

export const contactGridStyles = css({
  display: 'grid',
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, minmax(0, 1fr))',
    lg: 'repeat(4, minmax(0, 1fr))',
  },
  gap: '2rem',
  marginTop: '3rem',
  justifyItems: 'stretch',
});

export const contactCardStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.9rem',
  textAlign: 'center',
  padding: '1.75rem',
  width: '100%',
  height: '100%',
  minHeight: '150px',
});

export const iconStyles = css({
  fontSize: '{fontSizes.5xl}',
});

export const labelStyles = css({
  fontSize: '{fontSizes.lg}',
  fontWeight: '600',
  color: '{colors.text.primary}',
});

export const valueStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  _hover: {
    color: '{colors.brand.blue}',
    cursor: 'pointer',
  },
});

export const linkStyles = css({
  textDecoration: 'none',
  display: 'block',
  height: '100%',
});

export const cardWrapperStyles = css({
  height: '100%',
});

export const ctaStyles = css({
  textAlign: 'center',
  marginTop: '4rem',
});

export const ctaTextStyles = css({
  fontSize: '{fontSizes.2xl}',
  color: '{colors.text.secondary}',
  marginBottom: '1rem',
  lineHeight: '1.7',
});

export const gradientHeadingStyles = css({
  fontSize: '{fontSizes.4xl}',
  fontWeight: '700',
});
