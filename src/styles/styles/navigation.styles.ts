import { css } from '@/styled-system/css';

export const containerStyles = css({
  width: '100%',
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
});

export const logoStyles = css({
  fontSize: '{fontSizes.2xl}',
  fontWeight: '700',
  background: 'linear-gradient(135deg, {colors.brand.blue}, {colors.brand.purple})',
  backgroundClip: 'text',
  cursor: 'pointer',
  transition: 'transform {durations.fast}',
  zIndex: 9998,
  color: 'transparent',
  _hover: {
    transform: 'scale(1.02)',
  },
});

export const navLinksStyles = css({
  display: { base: 'none', md: 'flex' },
  gap: '2rem',
  alignItems: 'center',
  marginLeft: 'auto',
});

export const linkStyles = css({
  color: '{colors.text.primary}',
  textDecoration: 'none',
  fontSize: '{fontSizes.lg}',
  fontWeight: '500',
  position: 'relative',
  transition: 'color {durations.fast}',
  _hover: {
    color: '{colors.brand.blue}',
    '&::after': {
      width: '100%',
    },
  },
  _after: {
    content: '""',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: 0,
    height: '2px',
    background: 'linear-gradient(90deg, {colors.brand.blue}, {colors.brand.purple})',
    transition: 'width {durations.normal}',
  },
});

export const hamburgerStyles = css({
  display: { base: 'flex', md: 'none' },
  flexDirection: 'column',
  gap: '4px',
  cursor: 'pointer',
  zIndex: 9998,
  marginLeft: 'auto',
});

export const mobileMenuStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(10, 10, 10, 0.98)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: { base: '1rem', sm: '1.25rem' },
  padding: '2rem',
  overflowY: 'auto',
  zIndex: 9997,
});

export const mobileLinkStyles = css({
  color: '{colors.text.primary}',
  textDecoration: 'none',
  fontSize: { base: '{fontSizes.xl}', sm: '{fontSizes.2xl}' },
  fontWeight: '600',
  transition: 'all {durations.fast}',
  _hover: {
    color: '{colors.brand.blue}',
    transform: 'scale(1.1)',
  },
});
