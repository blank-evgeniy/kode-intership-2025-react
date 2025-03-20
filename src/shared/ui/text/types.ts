export const TextColors = {
  primary: "var(--text-primary)",
  secondary: "var(--text-secondary)",
  tertiary: "var(--text-tertiary)",
} as const;

export type TextColorsType = (typeof TextColors)[keyof typeof TextColors];

export type TextWeight = "400" | "500" | "600" | "700";
