import { createHashRouter } from "react-router-dom";

import Dashboard from "./layouts/Dashboard";
import Launch from "./pages/Launch";
import Upcoming from "./pages/Upcoming";
import History from "./pages/History";

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Launch />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

export default router;
