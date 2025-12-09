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

export const timelineStyles = css({
  position: 'relative',
  marginTop: '3rem',
  paddingLeft: { base: '2rem', md: '4rem' },
  _before: {
    content: '""',
    position: 'absolute',
    left: { base: '0.5rem', md: '1.5rem' },
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(180deg, {colors.brand.blue}, {colors.brand.purple})',
  },
});

export const timelineItemStyles = css({
  position: 'relative',
  marginBottom: '3rem',
  _before: {
    content: '""',
    position: 'absolute',
    left: { base: '-1.95rem', md: '-2.95rem' },
    top: '0.5rem',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, {colors.brand.blue}, {colors.brand.purple})',
  },
});

export const cardStyles = css({
  backgroundColor: '{colors.background.secondary}',
  border: '1px solid {colors.border.primary}',
  borderRadius: '16px',
  padding: '2rem',
  transition: 'all {durations.normal}',
  _hover: {
    transform: 'translateX(8px)',
    borderColor: '{colors.brand.blue}',
    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.2)',
  },
});

export const headerStyles = css({
  display: 'flex',
  flexDirection: { base: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: { base: 'flex-start', md: 'center' },
  gap: '1rem',
  marginBottom: '1.5rem',
});

export const companyStyles = css({
  fontSize: '{fontSizes.2xl}',
  fontWeight: '700',
  color: '{colors.text.primary}',
});

export const positionStyles = css({
  fontSize: '{fontSizes.lg}',
  fontWeight: '600',
  color: '{colors.brand.blue}',
  marginTop: '0.5rem',
});

export const periodStyles = css({
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
  fontWeight: '500',
  padding: '0.5rem 1rem',
  backgroundColor: '{colors.background.tertiary}',
  borderRadius: '8px',
});

export const descriptionStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  marginBottom: '1.5rem',
});

export const achievementsStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginBottom: '1.5rem',
});

export const achievementItemStyles = css({
  fontSize: '{fontSizes.base}',
  color: '{colors.text.secondary}',
  lineHeight: '1.7',
  paddingLeft: '1.5rem',
  position: 'relative',
  _before: {
    content: '"▹"',
    position: 'absolute',
    left: 0,
    color: '{colors.brand.blue}',
    fontWeight: '700',
  },
});

export const tagsContainerStyles = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
});

export const tagStyles = css({
  padding: '0.5rem 1rem',
  backgroundColor: 'rgba(139, 92, 246, 0.14)', // 기존 퍼플 계열 유지, 약간 밝게
  border: '1px solid rgba(139, 92, 246, 0.35)',
  borderRadius: '8px',
  fontSize: '{fontSizes.sm}',
  color: '{colors.brand.purple}',
  fontWeight: '600',
  transition: 'background-color {durations.normal}, border-color {durations.normal}',
  _hover: {
    backgroundColor: 'rgba(139, 92, 246, 0.18)',
    borderColor: '{colors.brand.blue}',
  },
});

