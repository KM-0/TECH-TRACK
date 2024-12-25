export const spacing = {
  x3s: 8,
  xxs: 12,
  xs: 16,
  s: 24,
  m: 32,
  l: 40,
  xl: 48,
  xxl: 56,
  x3l: 64,
} as const satisfies Record<string, number>;

export type Spacing = keyof typeof spacing;
