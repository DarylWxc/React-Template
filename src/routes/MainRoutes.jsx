import Layout from "../layout";
import Dashboard from "pages/dashboard/index";
import Resume from "pages/resume/index";
const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <a href="/dashboard">Welcome to Home</a>,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
  ],
};

export default MainRoutes;
