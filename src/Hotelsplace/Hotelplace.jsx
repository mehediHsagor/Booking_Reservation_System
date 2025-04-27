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
            <div key={hotel._id} className="border p-4  rounded ml-80">
           
             <div>
             <div className="card bg-base-100 w-2/3 h-1/2 shadow-xl">
  <figure>
    <img
      src={hotel.images[0]}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    <div>  {hotel.hotel_name}</div> 
      <div className="badge badge-secondary">{hotel.type}</div>
    </h2>
    <p>{hotel?.location?.address || "No address available"}</p>

    <div className="card-actions justify-end">
    <button  onClick={() => navigate(`/booknow/${hotel._id}`)}
                      className="btn btn-outline btn-warning h-5 w-48 text-2xl" >
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
