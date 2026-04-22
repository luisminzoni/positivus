// ─── Design Tokens ───────────────────────────────────────────────────────────
// Single source of truth for all design values used across the project.
// Mirrors the Figma design system.

export const colors = {
  green: '#B9FF66',
  dark: '#191A23',
  gray: '#F3F3F3',
  white: '#FFFFFF',
} as const;

export const typography = {
  desktop: {
    h1: 'text-[60px] leading-[1.1] font-medium',
    h2: 'text-[40px] leading-[1.2] font-medium',
    h3: 'text-[28px] leading-[1.3] font-medium',
    h4: 'text-[20px] leading-[1.4] font-medium',
    body: 'text-[18px] leading-[1.6] font-normal',
  },
  mobile: {
    h1: 'text-[36px] leading-[1.1] font-medium',
    h2: 'text-[28px] leading-[1.2] font-medium',
    h3: 'text-[20px] leading-[1.3] font-medium',
    h4: 'text-[18px] leading-[1.4] font-medium',
    body: 'text-[16px] leading-[1.6] font-normal',
  },
} as const;

// Responsive typography helpers (mobile-first, desktop at md+)
export const type = {
  h1: 'text-[36px] md:text-[60px] leading-[1.1] font-medium',
  h2: 'text-[28px] md:text-[40px] leading-[1.2] font-medium',
  h3: 'text-[20px] md:text-[28px] leading-[1.3] font-medium',
  h4: 'text-[18px] md:text-[20px] leading-[1.4] font-medium',
  body: 'text-[16px] md:text-[18px] leading-[1.6] font-normal',
  small: 'text-[14px] leading-[1.5] font-normal',
} as const;
