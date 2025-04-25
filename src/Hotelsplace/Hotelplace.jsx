import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Hotelplace = () => {
  const [hotels, setHotels] = useState([]);
  const query = useQuery();
  const navigate = useNavigate();

  const division = useLocation()?.search?.split("?")?.[1];
  console.log(division);
  // ✅ Now it's defined

  const fetchHotels = async (divisionname) => {
    try {
        const res = await fetch(`http://localhost:5000/hotelplace?division=${divisionname}`);
      const data = await res.json();
      setHotels(data);
      console.log(data)
    } catch (error) {
      console.error("Failed to fetch hotels:", error);
    }
  };

  useEffect(() => {
    if (division) {
      console.log("Division changed to:", division);
      fetchHotels(division);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [division]);
  

  return (
    <div className="mt-6">
      {hotels.length === 0 ? (
        <p>No hotels found for this division.</p>
      ) : (
        <div className=" gap-4">
          {hotels.map((hotel) => (
            <div key={hotel._id} className="border p-4 shadow rounded">
           
             <div>
             <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={hotel.images[1]}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {hotel.hotel_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{hotel.location.address}</p>
    <div className="card-actions justify-end">
    <button  onClick={() => navigate(`/booknow/${hotel._id}`)}
                      className="badge badge-outline" >
                      Book now
                    </button>

    </div>
  </div>
</div>
             </div>
            
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotelplace;
