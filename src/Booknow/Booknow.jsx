import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Booknow = () => {
    const { id } = useParams();
     
     const [carts, setcarts] = useState({}); // ✅ Use an object instead of an array
     const [loading, setLoading] = useState(true);
   
     useEffect(() => {
       fetch(`http://localhost:5000/booknow/${id}`) // ✅ Correct API endpoint
         .then((res) => res.json())
         .then((data) => {
           setcarts(data);
           console.log(data)
         
           setLoading(false);
         })
         .catch((error) => {
           console.error("Error fetching hotel data:", error);
           setLoading(false);
         });
     }, [id]); // ✅ Add `id` dependency
   
     if (loading) return <div>Loading...</div>;
    return (
        <div>
          
          <div>
               {carts.hotel_name}
          </div>
          <div>
          <h1> {carts.hotel_name}</h1>
          </div>
          
          
       
             
        </div>
    );
};

export default Booknow;