import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
// import Equipe from "./pages/Equipe";
// import Services from "./pages/Services";
import Hospitalisations from "./pages/Hospitalisations";
// import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // {
  //   path: "/l'equipe",
  //   element: <Equipe />,
  // },

  // {
  //   path: "/services",
  //   element: <Services />,
  // },
  {
    path: "/hospitalisations",
    element: <Hospitalisations />,
    // loader: () => fetch("https://localhost:3310/")
  },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
