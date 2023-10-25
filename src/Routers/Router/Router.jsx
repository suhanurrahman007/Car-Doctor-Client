import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },
]);

export default router
