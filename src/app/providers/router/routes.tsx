import { JSX } from "react";
import { RoutePath, RoutePathType } from "@/app/config/routes";
import { MainPage } from "@/pages/main-page";
import { DetailsPage } from "@/pages/details-page";

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
    element: <DetailsPage />,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <div>Not found page</div>,
  },
];
