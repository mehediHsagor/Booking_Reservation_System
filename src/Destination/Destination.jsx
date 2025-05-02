import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Destination/Destination.css";

const Destination = () => {
  const [divisions, setDivisions] = useState([]);

  useEffect(() => {
    fetch("division.json")
      .then((res) => res.json())
      .then((data) => setDivisions(data));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center">
        Explore Bangladesh
      </h1>
      <p className="text-lg sm:text-xl text-center mt-2 mb-6">
        These popular destinations have a lot to offer
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {divisions.map((division) => (
          <div className="p-2" key={division.id}>

         
          <li
       
            className="cursor-pointer"
            onClick={() => navigate(`/hotelplace?${division.name}`)}
          >
            <div className="relative w-full h-72 sm:h-80 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
              <img
                src={division.image}
                alt={division.name}
                className="w-full h-full object-cover"
              />
              <h2 className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-lg font-semibold">
                {division.name}
              </h2>
            </div>
          </li>
          </div>
        ))}
      </ul>
      
    </div>
  );
};

export default Destination;
