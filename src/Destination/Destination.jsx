import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      These popular destinations have a lot to offer
      <ul className='grid grid-cols-4 '>
        {divisions.map(division => (
           
            <div key={division.id}  onClick={() => navigate(`/hotelplace?${division.name}`)} >

                    
         <li  className="relative w-[250px] m-8 h-[200px]">
         <img src={division.image} alt={division.name} className="w-full h-full object-cover rounded" />
         <h2 className="absolute bottom-14 left-16 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
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
