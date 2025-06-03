import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Error.jsx";
import Home from "./Components/Home.jsx";
import Skills from "./Components/Skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
  },
  {
    path: "/portfolio",
    element: <Home></Home>,
    children:[
{
    index:true,
    element: <Skills></Skills>,
  },
    ]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
