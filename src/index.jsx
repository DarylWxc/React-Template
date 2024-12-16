import { createRoot } from "react-dom/client";
import ScrollTop from "components/ScrollTop";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "src/routes";

createRoot(document.getElementById("root")).render(
  <ScrollTop>
    <RouterProvider router={router} />
  </ScrollTop>
);
