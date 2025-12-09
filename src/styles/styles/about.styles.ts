import { css } from '@/styled-system/css';

// Section wrapper
export const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '6rem 0',
  position: 'relative',
});

// Container
export const containerStyles = css({
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
  padding: '0 2rem',
});

// Grid layout
export const gridStyles = css({
  display: 'grid',
  gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
  gap: '2rem',
  marginTop: '3rem',
});

// Card wrapper for equal height
export const cardWrapperStyles = css({
  height: '100%',
});

