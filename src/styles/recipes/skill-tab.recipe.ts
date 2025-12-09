import { defineRecipe } from '@pandacss/dev';

export const skillTabRecipe = defineRecipe({
  className: 'skill-tab',
  base: {
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    border: '1px solid',
    borderColor: 'border.primary',
    backgroundColor: 'background.secondary',
    color: 'text.primary',
    fontSize: 'base',
    fontWeight: '600',
    transition: 'all 0.3s',
    cursor: 'pointer',
    _hover: {
      borderColor: 'brand.blue',
      color: 'brand.blue',
    },
  },
  variants: {
    active: {
      true: {
        bg: 'rgba(59, 130, 246, 0.12)',
        borderColor: 'brand.blue',
        color: 'brand.blue',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)',
      },
      false: {},
    },
  },
  defaultVariants: {
    active: false,
  },
});
