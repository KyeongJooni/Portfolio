import { defineRecipe } from '@pandacss/dev';

export const navigationRecipe = defineRecipe({
  className: 'nav',
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
    isolation: 'isolate',
    transform: 'translateZ(0)',
    transition: 'background-color 0.3s, backdrop-filter 0.3s',
    borderBottom: '1px solid transparent',
  },
  variants: {
    scrolled: {
      true: {
        bg: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        _light: {
          bg: 'rgba(255, 255, 255, 0.82)',
          borderBottomColor: 'rgba(0, 0, 0, 0.15)',
        },
      },
      false: {
        bg: 'transparent',
        backdropFilter: 'none',
      },
    },
  },
  defaultVariants: {
    scrolled: false,
  },
});

export const hamburgerLineRecipe = defineRecipe({
  className: 'hamburger-line',
  base: {
    width: '24px',
    height: '2px',
    backgroundColor: '{colors.text.primary}',
    transition: 'all {durations.fast}',
    transformOrigin: 'center',
  },
  variants: {
    open: {
      true: {},
      false: {
        transform: 'none',
        opacity: 1,
      },
    },
    position: {
      top: {},
      middle: {},
      bottom: {},
    },
  },
  compoundVariants: [
    {
      open: true,
      position: 'top',
      css: {
        transform: 'rotate(45deg) translateY(6px)',
      },
    },
    {
      open: true,
      position: 'middle',
      css: {
        opacity: 0,
      },
    },
    {
      open: true,
      position: 'bottom',
      css: {
        transform: 'rotate(-45deg) translateY(-6px)',
      },
    },
  ],
  defaultVariants: {
    open: false,
    position: 'top',
  },
});
