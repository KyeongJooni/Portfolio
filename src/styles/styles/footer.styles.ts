import { css } from '@/styled-system/css';

// Footer wrapper
export const footerStyles = css({
  backgroundColor: '{colors.background.secondary}',
  borderTop: '1px solid {colors.border.primary}',
  padding: '1.25rem 0.75rem',
});

// Container
export const containerStyles = css({
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: { base: 'column', md: 'row' },
  justifyContent: 'space-between',
  alignItems: { base: 'center', md: 'flex-start' },
  gap: '1.25rem',
});

// Brand section
export const brandStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  textAlign: { base: 'center', md: 'left' },
});

// Logo
export const logoStyles = css({
  fontSize: '{fontSizes.2xl}',
  fontWeight: '700',
  lineHeight: '1.2',
});

// Description
export const descStyles = css({
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
  maxWidth: '300px',
  whiteSpace: 'pre-line',
  lineHeight: '1.6',
});

// Links container
export const linksContainerStyles = css({
  display: 'flex',
  gap: { base: '1.5rem', md: '2.5rem' },
  flexWrap: 'wrap',
  justifyContent: 'center',
});

// Link group
export const linkGroupStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

// Link title
export const linkTitleStyles = css({
  fontSize: '{fontSizes.base}',
  fontWeight: '600',
  color: '{colors.text.primary}',
  marginBottom: '0.25rem',
});

// Link
export const linkStyles = css({
  fontSize: '{fontSizes.sm}',
  color: '{colors.text.secondary}',
  textDecoration: 'none',
  transition: 'color {durations.fast}',
  _hover: {
    color: '{colors.brand.blue}',
  },
});

// Copyright
export const copyrightStyles = css({
  width: '100%',
  textAlign: 'center',
  paddingTop: '0.5rem',
  marginTop: '0.5rem',
  borderTop: '1px solid {colors.border.primary}',
  fontSize: '{fontSizes.xs}',
  color: '{colors.text.tertiary}',
});

