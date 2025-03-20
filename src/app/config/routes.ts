export const RoutePath = {
  MAIN: "/",
  DETAILS: "/details/:id",
  NOT_FOUND: "*",
} as const;

export type RoutePathType = (typeof RoutePath)[keyof typeof RoutePath];
