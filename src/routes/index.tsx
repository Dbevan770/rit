import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = false;

  const routes = auth ? [] : publicRoutes;

  const element = useRoutes(routes);

  return <>{element}</>;
};
