import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Hotel = () => {
  const { id } = useParams();
  
  const [carts, setcarts] = useState({}); // ✅ Use an object instead of an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/hotel/${id}`) // ✅ Correct API endpoint
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
  //if (!carts || Object.keys(carts).length === 0) return <div>Hotel not found.</div>; // ✅ Better validation

  return (
    <div className="p-5 m-5">
      <div className="card bg-base-100 shadow-xl">
        <figure className="h-80 w-2/3 carousel">
          {carts.images?.length > 0 ? (
            <>
              <div className="carousel-item w-1/2 p-3">
                <img src={carts.images[0]} className="w-full h-60" alt="Hotel 1" />
              </div>
              {carts.images[1] && (
                <div className="carousel-item w-1/2">
                  <img src={carts.images[1]} className="w-full h-60" alt="Hotel 2" />
                </div>
              )}
            </>
          ) : (
            <p>No images available</p>
          )}
        </figure>
        <div className="flex">

     
        <div className="card-body">
          <h2 className="card-title">
            {carts.hotel_name}
            <div className="badge badge-secondary">{carts.type}</div>
          </h2>
          <p>{carts.location?.address || "Address not available"}</p>
          <p>{carts.contact_info?.email || "Email not provided"}</p>
          <div>
          <p className="text-orange-500 text-2xl"><span className="text-2xl text-blue-600">Per Night:&nbsp;
            </span>{carts.price || "price inbox"}TK</p>
          </div>
       
          <div className="card-actions justify-end">
        <Link to={`/booknow/${carts._id}`}>    <button className="btn btn-outline btn-warning">Booknow</button> </Link>
          </div>
          
        </div >
        
        <div className="">
  {carts.facility.map((item, index) => (
    <h1 key={index} className="p-1">
      <li className="grid grid-cols-3">{item}</li>
    </h1>
  ))}
</div>
       
     
        </div>
       

      </div>
    </div>
  );
};

export default Hotel;
