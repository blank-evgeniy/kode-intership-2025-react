export const ButtonVariants = {
  text: "text",
  icon: "icon",
} as const;

export type ButtonVariant =
  (typeof ButtonVariants)[keyof typeof ButtonVariants];
