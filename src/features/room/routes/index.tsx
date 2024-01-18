import { Routes, Route } from "react-router-dom";

import { Room } from "./room";

export const RoomRoutes = () => {
  return (
    <Routes>
      <Route path=":roomId" element={<Room />} />
    </Routes>
  );
};
