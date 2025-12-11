import { defineConfig } from '@pandacss/dev';
import * as recipes from './src/styles/recipes';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',

  // 동적 variant 사용 시 CSS 강제 생성
  staticCss: {
    recipes: {
      navigation: ['*'], // navigation의 모든 variant 조합 생성
      hamburgerLine: ['*'], // hamburgerLine의 모든 variant 조합 생성
      skillTab: ['*'], // skillTab의 모든 variant 조합 생성
    },
  },

  conditions: {
    extend: {
      light: '.light &',
    },
  },

  theme: {
    extend: {
      recipes: {
        button: recipes.buttonRecipe,
        card: recipes.cardRecipe,
        navigation: recipes.navigationRecipe,
        hamburgerLine: recipes.hamburgerLineRecipe,
        skillTab: recipes.skillTabRecipe,
      },
      tokens: {
        colors: {
          // Dark mode colors
          dark: {
            bg: {
              primary: { value: '#0A0A0A' },
              secondary: { value: '#1A1A1A' },
              tertiary: { value: '#2A2A2A' },
            },
            text: {
              primary: { value: '#FFFFFF' },
              secondary: { value: '#B4B4B4' },
              tertiary: { value: '#8A8A8A' },
            },
            border: {
              primary: { value: '#2A2A2A' },
              secondary: { value: 'rgba(255, 255, 255, 0.1)' },
            },
            overlay: { value: 'rgba(0, 0, 0, 0.6)' },
          },

          // Light mode colors
          light: {
            bg: {
              primary: { value: '#FFFFFF' },
              secondary: { value: '#F8F9FA' },
              tertiary: { value: '#E9ECEF' },
            },
            text: {
              primary: { value: '#1A1A1A' },
              secondary: { value: '#6C757D' },
              tertiary: { value: '#ADB5BD' },
            },
            border: {
              primary: { value: '#DEE2E6' },
              secondary: { value: 'rgba(0, 0, 0, 0.1)' },
            },
            overlay: { value: 'rgba(0, 0, 0, 0.4)' },
          },

          // 브랜드 액센트
          brand: {
            blue: { value: '#3B82F6' },
            purple: { value: '#8B5CF6' },
            blueHover: { value: '#2563EB' },
            purpleHover: { value: '#7C3AED' },
          },

          // Navigation
          nav: {
            bg: {
              scrolled: { value: 'rgba(26, 26, 26, 0.95)' },
            },
          },

          // 상태 색상
          success: { value: '#10B981' },
          warning: { value: '#F59E0B' },
          error: { value: '#EF4444' },
        },

        fonts: {
          pretendard: {
            value: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
          },
          geist: { value: 'var(--font-geist-sans), sans-serif' },
          mono: { value: 'var(--font-geist-mono), ui-monospace, monospace' },
        },

        fontSizes: {
          xs: { value: '0.75rem' }, // 12px
          sm: { value: '0.875rem' }, // 14px
          base: { value: '1rem' }, // 16px
          md: { value: '1.0625rem' }, // 16px
          lg: { value: '1.125rem' }, // 18px
          xl: { value: '1.25rem' }, // 20px
          '2xl': { value: '1.5rem' }, // 24px
          '2.5xl': { value: '1.75rem' }, // 24px
          '3xl': { value: '2rem' }, // 32px
          '4xl': { value: '2.5rem' }, // 40px
          '5xl': { value: '3.5rem' }, // 56px
          '6xl': { value: '4.5rem' }, // 72px
          '7xl': { value: '6rem' }, // 96px
          '8xl': { value: '8rem' }, // 128px
        },

        durations: {
          fast: { value: '0.2s' },
          normal: { value: '0.3s' },
          slow: { value: '0.5s' },
          slower: { value: '0.8s' },
        },
      },

      semanticTokens: {
        colors: {
          background: {
            primary: {
              value: { base: '{colors.dark.bg.primary}', _light: '{colors.light.bg.primary}' },
            },
            secondary: {
              value: { base: '{colors.dark.bg.secondary}', _light: '{colors.light.bg.secondary}' },
            },
            tertiary: {
              value: { base: '{colors.dark.bg.tertiary}', _light: '{colors.light.bg.tertiary}' },
            },
          },
          text: {
            primary: {
              value: { base: '{colors.dark.text.primary}', _light: '{colors.light.text.primary}' },
            },
            secondary: {
              value: {
                base: '{colors.dark.text.secondary}',
                _light: '{colors.light.text.secondary}',
              },
            },
            tertiary: {
              value: {
                base: '{colors.dark.text.tertiary}',
                _light: '{colors.light.text.tertiary}',
              },
            },
          },
          border: {
            primary: {
              value: {
                base: '{colors.dark.border.primary}',
                _light: '{colors.light.border.primary}',
              },
            },
            secondary: {
              value: {
                base: '{colors.dark.border.secondary}',
                _light: '{colors.light.border.secondary}',
              },
            },
          },
          overlay: {
            value: { base: '{colors.dark.overlay}', _light: '{colors.light.overlay}' },
          },
        },
      },

      keyframes: {
        // YAPP 스타일 플로팅
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },

        // Mash-Up 스타일 페이드인 업
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(3rem)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        // Leets 스타일 슬라이드인
        slideInLeft: {
          from: {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },

        // 스케일 인
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },

        // 그래디언트 애니메이션
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },

        // 펄스 효과
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },

  patterns: {
    extend: {
      // 중앙 정렬 컨테이너
      container: {
        description: 'A centered container with max width',
        properties: {},
        transform() {
          return {
            maxWidth: '1440px',
            marginX: 'auto',
            paddingX: { base: '2rem', md: '4rem', lg: '6rem' },
          };
        },
      },

      // 풀스크린 섹션
      section: {
        description: 'A full viewport section',
        properties: {},
        transform() {
          return {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          };
        },
      },
    },
  },

  globalCss: {
    html: {
      scrollBehavior: 'smooth',
      WebkitTapHighlightColor: 'transparent',
    },
    body: {
      backgroundColor: 'background.primary',
      color: 'text.primary',
      fontFamily: 'pretendard',
      overflow: 'auto',
      margin: 0,
      padding: 0,
      wordBreak: 'keep-all',
      overflowWrap: 'break-word',
    },
    '::selection': {
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      color: 'text.primary',
    },
    '*': {
      boxSizing: 'border-box',
    },
  },

  outdir: 'styled-system',
});
