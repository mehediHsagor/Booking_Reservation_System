import BestStaff from "../Best_staff/BestStaff";
import Searchbar from "../Searchbar/Searchbar";
import Swiper_pagination from "../Swiper_pagination.jsx/Swiper_pagination";


const Home = () => {
    return (
        <div>
            <Searchbar></Searchbar>

           <Swiper_pagination></Swiper_pagination>
           <BestStaff></BestStaff>
        </div>
    );
};

export default Home;