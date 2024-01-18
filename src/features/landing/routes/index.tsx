import { Route, Routes } from "react-router-dom";

import { Landing } from "./landing";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
