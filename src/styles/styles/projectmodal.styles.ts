import { css } from '@/styled-system/css';

export const overlayStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '{colors.overlay}',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  zIndex: 9998,
  overflowY: 'auto',
});

export const modalStyles = css({
  backgroundColor: '{colors.background.secondary}',
  borderRadius: '24px',
  border: '1px solid {colors.border.primary}',
  maxWidth: '900px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
});

export const closeButtonStyles = css({
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '{colors.background.tertiary}',
  border: '1px solid {colors.border.primary}',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all {durations.fast}',
  zIndex: 10,
  _hover: {
    backgroundColor: '{colors.background.primary}',
    transform: 'rotate(90deg)',
  },
});

export const contentStyles = css({
  padding: '3rem',
});

export const headerStyles = css({
  marginBottom: '2rem',
});

export const titleStyles = css({
  fontSize: '{fontSizes.4xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
  marginBottom: '1rem',
});

export const sectionStyles = css({
  marginBottom: '2rem',
});

export const sectionTitleStyles = css({
  fontSize: '{fontSizes.xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
  marginBottom: '1rem',
});

export const descriptionStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.8',
  marginBottom: '1rem',
});

export const listStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  paddingLeft: '1.5rem',
});

export const listItemStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  position: 'relative',
  _before: {
    content: '""',
    position: 'absolute',
    left: '-1.5rem',
    top: '0.52em',
    width: '0.48rem',
    height: '0.48rem',
    backgroundColor: '{colors.brand.blue}',
    borderRadius: '9999px',
  },
});

export const nestedListItemStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  position: 'relative',
  paddingLeft: '0.5rem',
  marginLeft: '0.75rem',
  _before: {
    content: '""',
    position: 'absolute',
    left: '-1.25rem',
    top: '0.56em',
    width: '0.46rem',
    height: '0.46rem',
    border: '2px solid {colors.brand.blue}',
    borderRadius: '9999px',
  },
});

export const linkGroupStyles = css({
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
  paddingTop: '2rem',
  borderTop: '1px solid {colors.border.primary}',
});

export const imageContainerStyles = css({
  width: '100%',
  height: '300px',
  backgroundColor: '{colors.background.tertiary}',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2rem',
  overflow: 'hidden',
  position: 'relative',
});

