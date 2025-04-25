import { useEffect, useState } from 'react';
import '../Searchbar/Searchbar.css';
import Showbar from '../../Showbar/Showbar';

const Searchbar = () => {
    const [hotels, setHotels] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch hotels from backend
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => {
               // console.log("Fetched Hotels:", data); // Debugging fetched data
                setHotels(data);
            })
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    // Filter hotels based on search query
    const filteredHotels = hotels.filter((hotel) => {
        if (!hotel.location) return false; // Ensure location exists

        const search = searchQuery.toLowerCase().trim();
        
        return (
           hotel.hotel_name.toLowerCase().includes(search) ||
            hotel.location.address?.toLowerCase().includes(search) ||
            hotel.location.city?.toLowerCase().includes(search) ||
            hotel.location.state?.toLowerCase().includes(search) ||
            hotel.location.country?.toLowerCase().includes(search)
        );
    });

   // Debugging filter results

    // Handle input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value.trim());
        console.log("Search Query:", e.target.value.trim()); // Debugging search input
    };

    return (
        <div className="text-center mb-5">
            <form onSubmit={(e) => e.preventDefault()}>
                <span className="text-orange-500 text-4xl ml-5">Search :</span>&nbsp;&nbsp;
                <input
                    type="text "
                    placeholder="Search by Address, City, State, or Country"
                    onChange={handleSearch}
                    className='bord'
                />
                &nbsp;&nbsp;&nbsp;
                <button type="submit" className="ssuubb text-2xl">Submit</button>
            </form>

            {/* Display filtered hotels */}
            {filteredHotels.length > 0 ? (
                filteredHotels.map((hotel) => (
                    <Showbar key={hotel._id} cart={hotel} />
                ))
            ) : (
                <p className="text-gray-500 mt-3">No results found.</p>
            )}
        </div>
    );
};

export default Searchbar;