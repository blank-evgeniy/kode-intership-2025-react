export type SortType = "alphabetical" | "birthday";

export interface UsersResponse {
  items: User[];
}

export interface User {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: Department;
  position: string;
  birthday: string;
  phone: string;
}

export const Department = {
  all: "all",
  android: "android",
  ios: "ios",
  design: "design",
  management: "management",
  analytics: "analytics",
  qa: "qa",
  frontend: "frontend",
  hr: "hr",
  pr: "pr",
  backend: "backend",
  support: "support",
} as const;

export type Department = (typeof Department)[keyof typeof Department];
