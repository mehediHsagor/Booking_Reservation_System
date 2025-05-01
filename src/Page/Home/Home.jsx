import Searchbar from "../Searchbar/Searchbar.jsx"

import Beststaff from "../Best_staff/BestStaff.jsx";
import Swiperslider from "../../swiperslide/Swiperslide.jsx";
import Destination from "../../Destination/Destination.jsx";


const Home = () => {
  return (
    <div className="">
    <Swiperslider></Swiperslider>
     
      <Destination></Destination>
      <Beststaff />
      <Searchbar />
      
    </div>
  );
};

export default Home;
