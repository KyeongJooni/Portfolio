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

export const skillCategoriesStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
  minHeight: '480px',
});

export const categoryStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const categoryTitleStyles = css({
  fontSize: '{fontSizes.2xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
  marginBottom: '1rem',
});

export const skillsGridStyles = css({
  display: 'grid',
  gridTemplateColumns: {
    base: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(5, 1fr)',
  },
  gap: '1rem',
});

export const skillCardStyles = css({
  backgroundColor: '{colors.background.tertiary}',
  border: '1px solid {colors.border.primary}',
  borderRadius: '12px',
  padding: '0.9rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  transition: 'all {durations.normal}',
  _hover: {
    transform: 'translateY(-2px)',
    borderColor: '{colors.brand.blue}',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
});

export const skillIconStyles = css({
  fontSize: '{fontSizes.2.5xl}',
});

export const skillNameStyles = css({
  fontSize: '{fontSizes.md}',
  fontWeight: '600',
  color: '{colors.text.primary}',
  textAlign: 'center',
});

export const skillLevelStyles = css({
  fontSize: '{fontSizes.xs}',
  color: '{colors.text.secondary}',
});

export const levelBarWrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});

export const levelTrackStyles = css({
  width: '100%',
  height: '6px',
  borderRadius: '9999px',
  backgroundColor: '{colors.background.secondary}',
  border: '1px solid {colors.border.primary}',
  overflow: 'hidden',
});

export const levelFillStyles = css({
  height: '100%',
  borderRadius: '9999px',
  background:
    'linear-gradient(90deg, {colors.brand.blue}, {colors.brand.purple})',
  transition: 'width {durations.normal} ease',
  width: 'var(--level-width, 0%)',
});

export const tabsWrapperStyles = css({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginTop: '1.5rem',
});
