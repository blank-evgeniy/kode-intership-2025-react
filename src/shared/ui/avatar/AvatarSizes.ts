export const AvatarSizes = {
  md: "md",
  lg: "lg",
} as const;

export type AvatarSizes = (typeof AvatarSizes)[keyof typeof AvatarSizes];
