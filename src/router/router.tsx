import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../components/Home/Home";
import Gallery from "../components/Gallery/Gallery";
import WorkPage from "../components/Work/WorkPage";
import About from "../components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/galerie", element: <Gallery /> },
      { path: "/galerie/:slug", element: <WorkPage /> },
      { path: "/a-propos", element: <About /> },
    ],
  },
]);

export default router;
