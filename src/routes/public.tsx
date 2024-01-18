import { lazyImport } from "@/utils/lazy-import";

const { PublicRoutes } = lazyImport(
  () => import("@/features/landing"),
  "PublicRoutes"
);
const { RoomRoutes } = lazyImport(
  () => import("@/features/room"),
  "RoomRoutes"
);

export const publicRoutes = [
  {
    path: "/",
    element: <PublicRoutes />,
  },
  {
    path: "/room/*",
    element: <RoomRoutes />,
  },
];
