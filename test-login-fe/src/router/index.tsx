import type { RouteObject } from "react-router-dom";
import Layout from "../templates/Layout";
import Main from "../pages/Main";
import ProfilePage from "../pages/Profile.page";
import LoginPage from "../pages/Login.page";
import RegisterPage from "../pages/Register.page";

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Main />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
