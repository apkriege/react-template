import { createBrowserRouter } from "react-router";

import App from "@app/App";
import Home from "@app/pages/Home";
import Films from "@app/pages/Films";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/films",
        element: <Films />,
      },
    ],
  },
]);

export default router;
