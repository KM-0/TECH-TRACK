import { colors } from "./colors";

export const LINE_HEIGHT_RATIO = 1.2;
export const FONT_FAMILY = "BIZUDPGothic";

export const fontSizes = {
  xxs: 12,
  xs: 14,
  s: 18,
  m: 24,
  l: 28,
  xl: 36,
  xxl: 44,
} as const satisfies Record<string, number>;

export const fontWeight = {
  regular: 400,
  bold: 700,
} as const satisfies Record<string, number>;

export type FontColor = keyof typeof colors;
export type FontSize = keyof typeof fontSizes;
export type FontWeight = keyof typeof fontWeight;

export const getTypography = ({
  color = "black",
  size = "m",
  weight = "regular",
}: { color?: FontColor; size?: FontSize; weight?: FontWeight }) => ({
  color: colors[color],
  fontSize: fontSizes[size],
  fontWeight: fontWeight[weight],
  fontFamily: FONT_FAMILY,
  lineHeight: LINE_HEIGHT_RATIO,
});
