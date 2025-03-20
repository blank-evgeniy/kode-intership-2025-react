import { JSX } from "react";
import { RoutePath, RoutePathType } from "@/app/config/routes";
import { MainPage } from "@/pages/main-page";

interface Route {
  path: RoutePathType;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
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
