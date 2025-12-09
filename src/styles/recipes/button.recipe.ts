import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'A button component with variants and sizes',
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all {durations.normal}',
    border: 'none',
    outline: 'none',
    fontFamily: 'pretendard',
    _disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
    _focus: {
      outline: '2px solid {colors.brand.blue}',
      outlineOffset: '2px',
    },
  },
  variants: {
    variant: {
      primary: {
        background: 'linear-gradient(135deg, {colors.brand.blue}, {colors.brand.purple})',
        color: '{colors.text.primary}',
        _hover: {
          background: 'linear-gradient(135deg, {colors.brand.blueHover}, {colors.brand.purpleHover})',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
        },
        _active: {
          transform: 'translateY(0)',
        },
      },
      secondary: {
        backgroundColor: '{colors.background.tertiary}',
        color: '{colors.text.primary}',
        _hover: {
          backgroundColor: '{colors.background.secondary}',
          transform: 'translateY(-2px)',
        },
        _active: {
          transform: 'translateY(0)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: '{colors.text.primary}',
        border: '2px solid {colors.border.secondary}',
        _hover: {
          borderColor: '{colors.brand.blue}',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          transform: 'translateY(-2px)',
        },
        _active: {
          transform: 'translateY(0)',
        },
      },
    },
    size: {
      sm: {
        padding: '0.5rem 1rem',
        fontSize: '{fontSizes.sm}',
      },
      md: {
        padding: '0.75rem 1.5rem',
        fontSize: '{fontSizes.base}',
      },
      lg: {
        padding: '1rem 2rem',
        fontSize: '{fontSizes.lg}',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
