import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Hotel from "../Hotel/Hotel";
import Admin_route from "../Admin_route/Admin_route";
import Booknow from "../Booknow/Booknow";
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
   
  },
  {

    path:"admin_route",
    element:<Admin_route></Admin_route>
  },{

    path:"/booknow/:id",
    element:<Booknow></Booknow>
  }
]);
export default router;
