import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News";
import TermsAndCondions from "../Pages/Other/TermsAndCondions/TermsAndCondions";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://bd-news-portal-server-rabbinur.vercel.app/news"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://bd-news-portal-server-rabbinur.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/news/:id", //eta router id news id nah
        element: (
          <PrivateRoutes>
            <News></News>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bd-news-portal-server-rabbinur.vercel.app/news/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      { path: "/register", element: <Register></Register> },
      {
        path: "terms",
        element: <TermsAndCondions></TermsAndCondions>,
      },
    ],
  },
]);
