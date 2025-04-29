import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Destination/Destination.css";

const Destination = () => {
  const [divisions, setDivisions] = useState([]);
  

  useEffect(() => {
    // Simulate fetching data
    fetch('division.json')
      .then(res => res.json())
      .then(data => setDivisions(data));
  }, []); // 
  // Empty dependency array = run once on mount

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-4xl mt-2 text-orange-500 text-center' >Explore Bangladesh</h1>
      <p className='text-2xl text-center mt-1'> These popular destinations have a lot to offer</p> 
      <ul className='grid grid-cols-1  sm:grid-cols-2 ml-16 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {divisions.map(division => (
           
            <div className='opopop ' key={division.id}  onClick={() => navigate(`/hotelplace?${division.name}`)} >
              

                    
         <li  className="relative w-[300px] m-8 h-[300px]">
         <img src={division.image} alt={division.name} className="w-full h-full object-cover rounded" />
         <h2 className="absolute bottom-20 left-20 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
           {division.name}
         </h2>
       </li>
       </div> 
           
  
         
       
        ))}
      </ul>
    </div>
  );
};

export default Destination;
