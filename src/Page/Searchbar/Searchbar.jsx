
import '../Searchbar/Searchbar.css'
const Searchbar = () => {
    return (
        <div className="text-center mb-5">
       <span className="text-orange-500 text-2xl ml-5"> Search: </span>&nbsp;&nbsp;  <input type="text"placeholder="Place"></input>
            <input type="text"placeholder="Category"></input>
            <input type="date"placeholder="time"></input>&nbsp;&nbsp;&nbsp;
            <input className="ssuubb" type="Submit"></input>
        </div>
    );
};

export default Searchbar;