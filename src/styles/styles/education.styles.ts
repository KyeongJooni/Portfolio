import { css } from '@/styled-system/css';

export const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem 0',
  backgroundColor: '{colors.background.primary}',
});

export const containerStyles = css({
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: '0 2rem',
});

export const gridStyles = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', lg: 'repeat(2, 1fr)' },
  gap: '2rem',
  marginTop: '3rem',
  alignItems: 'stretch',
  gridAutoRows: '1fr',
});

export const cardWrapperStyles = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const cardShellStyles = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'default',
  _hover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
    borderColor: '{colors.brand.blue}',
  },
});

export const cardContentStyles = css({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
  height: '100%',
  flex: 1,
});

export const schoolStyles = css({
  fontSize: '{fontSizes.2xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
  marginBottom: '0.5rem',
});

export const degreeStyles = css({
  fontSize: '{fontSizes.lg}',
  fontWeight: '600',
  color: '{colors.brand.blue}',
  marginBottom: '0.25rem',
});

export const majorStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  marginBottom: '1rem',
});

export const periodStyles = css({
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  backgroundColor: '{colors.background.tertiary}',
  borderRadius: '8px',
  display: 'inline-block',
  marginBottom: '1.5rem',
});

export const descriptionStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  marginBottom: '1.5rem',
});

export const gpaStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.brand.purple}',
  fontWeight: '600',
  marginBottom: '1.5rem',
});

export const activitiesStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const activityItemStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.6',
  paddingLeft: '1.5rem',
  position: 'relative',
  _before: {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '{colors.brand.blue}',
    fontWeight: '700',
  },
});

export const certificateButtonStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.55rem 1.1rem',
  borderRadius: '12px',
  border: '1px solid {colors.brand.blue}',
  color: '{colors.background.primary}',
  backgroundColor: '{colors.brand.blue}',
  fontWeight: '700',
  fontSize: '{fontSizes.base}',
  cursor: 'pointer',
  transition: 'all {durations.normal}',
  _hover: {
    borderColor: '{colors.brand.blue}',
    color: '{colors.background.primary}',
    backgroundColor: '{colors.brand.blue}',
    boxShadow: '0 8px 18px rgba(59, 130, 246, 0.22)',
    transform: 'translateY(-1px)',
  },
});

export const certificateButtonWrapperStyles = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  paddingTop: '0.5rem',
});

export const modalOverlayStyles = css({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.55)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  zIndex: 2000,
});

export const modalContentStyles = css({
  position: 'relative',
  width: 'min(960px, 100%)',
  maxHeight: '90vh',
  backgroundColor: '{colors.background.primary}',
  borderRadius: '16px',
  border: '1px solid {colors.border.primary}',
  boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
  overflow: 'hidden',
});

export const modalImageWrapperStyles = css({
  position: 'relative',
  width: '100%',
  height: '70vh',
  backgroundColor: '{colors.background.secondary}',
});

export const modalCloseButtonStyles = css({
  position: 'absolute',
  top: '12px',
  right: '12px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid {colors.border.primary}',
  backgroundColor: '{colors.background.tertiary}',
  color: '{colors.text.primary}',
  fontWeight: '800',
  fontSize: '{fontSizes.xl}',
  lineHeight: '1',
  zIndex: 2,
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
  transition: 'all {durations.fast}',
  _hover: {
    borderColor: '{colors.brand.blue}',
    color: '{colors.brand.blue}',
    backgroundColor: '{colors.background.primary}',
    transform: 'scale(1.03)',
    boxShadow: '0 10px 24px rgba(59, 130, 246, 0.18)',
  },
});

