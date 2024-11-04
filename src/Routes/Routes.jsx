import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Hotel from "../Hotel/Hotel";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },

  {
    path: '/hotel/:id',
    element: <Hotel></Hotel>,
    loader: ({ params }) => fetch(`http://localhost:5000/hotel/${params.id}`),
  },
]);
export default router;
