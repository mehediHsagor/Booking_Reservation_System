
import BestStaff from "../Best_staff/BestStaff";
import Searchbar from "../Searchbar/Searchbar";
import Swiper_pagination from "../Swiper_pagination.jsx/Swiper_pagination";
import Title_extras from "../../Title_extra";
import Showwatch from "../../ShowWatch/Showwatch";
import Show from "../../Show/Show";


const Home = () => {
    return (
        <div>
            <Searchbar/>

           <Swiper_pagination/>
           <BestStaff/>
           <Title_extras title={ 'our gellery'}/>
          
           <Show></Show>
        </div>
    );
};

export default Home;