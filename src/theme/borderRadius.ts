export const borderRadius = {
  s: 2,
  m: 4,
  l: 8,
  full: 9999,
} as const satisfies Record<string, number>;

export type BorderRadius = typeof borderRadius;
