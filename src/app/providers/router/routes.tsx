import { RoutePath, RoutePathType } from "@/app/config/routes";
import { JSX } from "react";

interface Route {
  path: RoutePathType;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    path: RoutePath.MAIN,
    element: <div>main page</div>,
  },
  {
    path: RoutePath.DETAILS,
    element: <div>details page</div>,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <div>Not found page</div>,
  },
];
