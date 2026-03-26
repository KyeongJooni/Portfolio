import { defineRecipe } from '@pandacss/dev';

export const cardRecipe = defineRecipe({
  className: 'card',
  description: 'A card component with glass morphism and bordered variants',
  base: {
    borderRadius: '16px',
    padding: '1.5rem',
    transition: 'all {durations.normal}',
  },
  variants: {
    variant: {
      default: {
        backgroundColor: '{colors.background.secondary}',
        border: '1px solid {colors.border.primary}',
      },
      glass: {
        backgroundColor: 'rgba(26, 26, 26, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid {colors.border.secondary}',
      },
      bordered: {
        backgroundColor: 'transparent',
        border: '2px solid {colors.border.secondary}',
      },
    },
    hoverable: {
      true: {
        _hover: {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
          borderColor: '{colors.brand.blue}',
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: 'default',
    hoverable: false,
  },
});
