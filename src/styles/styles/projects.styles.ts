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

export const projectsListStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  marginTop: '3rem',
});

export const projectCardStyles = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', lg: '1fr 1fr' },
  gap: '2rem',
  alignItems: 'stretch',
});

export const imageContainerStyles = css({
  width: '100%',
  height: 'auto',
  aspectRatio: '16 / 9',
  minHeight: '340px',
  maxHeight: '480px',
  backgroundColor: '{colors.background.tertiary}',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform {durations.normal}',
  _hover: {
    transform: 'scale(1.02)',
  },
});

export const imagePlaceholderStyles = css({
  fontSize: '{fontSizes.xl}',
  color: '{colors.text.secondary}',
  opacity: 0.6,
});

export const contentStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
});

export const metaGroupStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.5',
});

export const metaTextStyles = css({
  display: 'flex',
  gap: '0.75rem',
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
});

export const tagContainerStyles = css({
  display: 'flex',
  gap: '0.6rem 0.55rem',
  flexWrap: 'wrap',
});

export const tagStyles = css({
  padding: '0.45rem 0.9rem',
  backgroundColor: '{colors.background.tertiary}',
  border: '1px solid {colors.border.primary}',
  borderRadius: '10px',
  fontSize: '{fontSizes.sm}',
  color: '{colors.brand.blue}',
  fontWeight: '600',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  transition: 'background-color {durations.normal}, border-color {durations.normal}',
  _hover: {
    backgroundColor: '{colors.background.secondary}',
    borderColor: '{colors.brand.blue}',
  },
});

export const titleStyles = css({
  fontSize: '{fontSizes.3xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
});

export const descStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
});

export const linkGroupStyles = css({
  display: 'flex',
  gap: '0.75rem',
  marginTop: '0.75rem',
});

