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
import Cart from "../Cart/Cart";
import Procedtocheckout from "../Proceedtocheckout/Procedtocheckout";
import Addcategory from "../Addcategory/Addcategory";
import Admindashboard from "../AdminDashboard/Admindashboard";
import Hotelplace from "../Hotelsplace/Hotelplace";
import Searchbar from "../Page/Searchbar/Searchbar";
import PrivateRoute from "./PrivateRoute";
import FIdback from "../fidback/FIdback";
import Feedbackshow from "../Reviewsss/Feedbackshow";

import Otpverification from "../Page/Otpverification/Otpverification";
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

    path:"/admin_route",
    element:<Admin_route></Admin_route>
  },{

    path:"/booknow/:id",
    element:<PrivateRoute><Booknow></Booknow></PrivateRoute>
  },{

    path:"/cart",
    element:<Cart></Cart>
  },
  {

    path:"/procedtocheckout/:id",
    element:<Procedtocheckout></Procedtocheckout>
  },{

    path:"/addcategory",
    element:<Addcategory></Addcategory>
  },{
    path:"/admindashboard",
    element:<Admindashboard/>
    
  },
  {
    path:"/hotelplace",
    element:<Hotelplace></Hotelplace>
  }
  ,{
    path:"/searchbar",
    element:<Searchbar></Searchbar>
  },{

    path:"/fidback",
    element:<FIdback></FIdback>
  },{

    path:"/feedbackshow",
    element:<Feedbackshow></Feedbackshow>
  },{
    path:"/otp",
    element:<Otpverification></Otpverification>
  }
]);
export default router;
