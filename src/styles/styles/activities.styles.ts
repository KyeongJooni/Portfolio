import { css } from '@/styled-system/css';

export const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem 0',
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
  gap: '1.5rem',
  marginTop: '3rem',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'stretch',
});

export const cardStyles = css({
  backgroundColor: '{colors.background.secondary}',
  border: '1px solid {colors.border.primary}',
  borderRadius: '16px',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  transition: 'all {durations.normal}',
  _hover: {
    transform: 'translateY(-6px)',
    borderColor: '{colors.brand.blue}',
    boxShadow: '0 10px 24px rgba(59, 130, 246, 0.15)',
  },
});

export const headerStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  flexWrap: 'wrap',
});

export const periodStyles = css({
  alignSelf: 'center',
  fontSize: '{fontSizes.sm}',
  fontWeight: '600',
  color: '{colors.text.secondary}',
  backgroundColor: '{colors.background.tertiary}',
  border: '1px solid {colors.border.primary}',
  borderRadius: '10px',
  padding: '0.3rem 0.75rem',
});

export const linkStyles = css({
  alignSelf: 'center',
  fontSize: '{fontSizes.sm}',
  fontWeight: '700',
  color: '{colors.brand.blue}',
  textDecoration: 'none',
  cursor: 'pointer',
  padding: '0.2rem 0.4rem',
  borderRadius: '8px',
  transition: 'color {durations.normal}, background-color {durations.normal}',
  _hover: {
    color: '{colors.brand.purple}',
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
  },
  _focusVisible: {
    outline: '2px solid {colors.brand.blue}',
    outlineOffset: '2px',
  },
});

export const titleStyles = css({
  fontSize: '{fontSizes.xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
});

export const listStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

export const itemStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  position: 'relative',
  paddingLeft: '1.1rem',
  _before: {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '{colors.brand.blue}',
    fontWeight: '700',
  },
});

