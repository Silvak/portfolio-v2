import { createBrowserRouter } from "react-router-dom";
/* Pages */
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

/* Set routes in router */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact",
        element: <ErrorPage />,
      },
    ],
  },
]);
