import { css } from '@/styled-system/css';

// Section wrapper
export const sectionStyles = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '6rem 2rem',
  overflow: 'hidden',
});

// Main layout container (2열 레이아웃)
export const layoutStyles = css({
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: { base: 'column', lg: 'row' },
  alignItems: { base: 'center', lg: 'flex-start' },
  gap: { base: '3rem', lg: '4rem' },
  zIndex: 10,
});

// 사진 영역
export const imageContainerStyles = css({
  position: 'relative',
  flexShrink: 0,
  width: { base: '200px', md: '250px', lg: '300px' },
  height: { base: '200px', md: '250px', lg: '300px' },
  borderRadius: '24px',
  overflow: 'hidden',
  border: '2px solid {colors.border.secondary}',
  backgroundColor: '{colors.background.secondary}',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// 사진 플레이스홀더 (나중에 이미지로 교체)
export const imagePlaceholderStyles = css({
  color: '{colors.text.tertiary}',
  fontSize: '{fontSizes.sm}',
  textAlign: 'center',
});

// Content container (텍스트 영역)
export const contentStyles = css({
  flex: 1,
  width: '100%',
});

// Main title
export const titleStyles = css({
  fontSize: {
    base: '{fontSizes.3xl}',
    md: '{fontSizes.4xl}',
    lg: '{fontSizes.5xl}',
  },
  fontWeight: '800',
  lineHeight: '1.3',
  marginBottom: '3rem',
  wordBreak: 'keep-all',
});

// Introduction blocks container
export const introBlocksStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

// Single intro block
export const introBlockStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
});

// Intro block heading
export const introHeadingStyles = css({
  fontSize: { base: '{fontSizes.xl}', md: '{fontSizes.2.5xl}' },
  fontWeight: '600',
  color: '{colors.text.primary}',
  lineHeight: '1.4',
});

// Intro block description
export const introDescStyles = css({
  fontSize: { base: '{fontSizes.base}', md: '{fontSizes.lg}' },
  color: '{colors.text.secondary}',
  lineHeight: '1.8',
});

// Button group
export const buttonGroupStyles = css({
  display: 'flex',
  gap: '1rem',
  marginTop: '3rem',
  flexWrap: 'wrap',
});

// Floating background element
export const floatingElementStyles = css({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(100px)',
  opacity: '0.3',
  animation: 'floatY 6s ease-in-out infinite',
});

// First floating element
export const firstFloatingStyles = css({
  width: '300px',
  height: '300px',
  background:
    'linear-gradient(135deg, {colors.brand.blue}, {colors.brand.purple})',
  top: '20%',
  left: '10%',
});

// Second floating element
export const secondFloatingStyles = css({
  width: '400px',
  height: '400px',
  background:
    'linear-gradient(135deg, {colors.brand.purple}, {colors.brand.blue})',
  bottom: '10%',
  right: '5%',
  animationDelay: '2s',
});
