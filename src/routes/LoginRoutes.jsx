// import { lazy } from 'react';
import NotFound from "pages/authentication/NotFound";
import LoginPage from "pages/authentication/Login";
import Resume from "pages/resume/index";
const LoginRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  { path: "*", element: <NotFound /> },
];

export default LoginRoutes;
