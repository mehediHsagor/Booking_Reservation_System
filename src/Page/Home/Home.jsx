import Searchbar from "../Searchbar/Searchbar.jsx"

import Beststaff from "../Best_staff/BestStaff.jsx";
import Swiperslider from "../../swiperslide/Swiperslide.jsx";
import Destination from "../../Destination/Destination.jsx";
import Feedbackshow from "../../Reviewsss/Feedbackshow.jsx";


const Home = () => {
  return (
    <div className="">
    <Swiperslider></Swiperslider>
     
      <Destination></Destination>
      <Beststaff />
      <Searchbar />
      <Feedbackshow></Feedbackshow>
      
    </div>
  );
};

export default Home;
