import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);