/**
 * Design tokens for the Human Reset Lab platform.
 *
 * These tokens are the single source of truth for colours, typography,
 * spacing and animation values.  They are consumed by Tailwind's CSS
 * custom-property layer via globals.css and can also be imported directly
 * by any component that needs a token at the JS level.
 */

// ─── Colours ──────────────────────────────────────────────────────────────────

export const colors = {
  /** Primary brand – deep teal */
  primary: {
    50: "#edfafa",
    100: "#d5f5f6",
    200: "#afebed",
    300: "#7edde0",
    400: "#48ccd0",
    500: "#20b3b8",  // base
    600: "#178f94",
    700: "#186f74",
    800: "#1a595d",
    900: "#1a4b4e",
    950: "#0b3135",
  },

  /** Accent – warm amber */
  accent: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",  // base
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03",
  },

  /** Neutrals */
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },

  /** Semantic */
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const fontFamily = {
  sans: ["var(--font-sans)", "system-ui", "sans-serif"],
  heading: ["var(--font-heading)", "Georgia", "serif"],
  mono: ["var(--font-mono)", "ui-monospace", "monospace"],
} as const;

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
} as const;

// ─── Spacing ──────────────────────────────────────────────────────────────────

export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
  40: "10rem",
  48: "12rem",
} as const;

// ─── Border radius ────────────────────────────────────────────────────────────

export const borderRadius = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
} as const;

// ─── Shadows ──────────────────────────────────────────────────────────────────

export const boxShadow = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  none: "none",
} as const;

// ─── Animation ────────────────────────────────────────────────────────────────

export const transitionDuration = {
  75: "75ms",
  100: "100ms",
  150: "150ms",
  200: "200ms",
  300: "300ms",
  500: "500ms",
  700: "700ms",
  1000: "1000ms",
} as const;

export const transitionTimingFunction = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
