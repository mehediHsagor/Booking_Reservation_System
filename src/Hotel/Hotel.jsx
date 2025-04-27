import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Hotel = () => {
  const { id } = useParams();
  const [carts, setCarts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/hotel/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotel data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-2xl py-20">Loading...</div>;

  return (
    <div className="p-6 m-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500">
        {/* Images Carousel */}
        <div className="overflow-hidden rounded-l-3xl">
          <div className="carousel w-full">
            {carts.images?.length > 0 ? (
              <>
                <div className="carousel-item w-full">
                  <img src={carts.images[0]} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" alt="Hotel Image 1" />
                </div>
                {carts.images[1] && (
                  <div className="carousel-item w-full">
                    <img src={carts.images[1]} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" alt="Hotel Image 2" />
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-gray-500">No images available</p>
            )}
          </div>
        </div>

        {/* Hotel Details */}
        <div className="p-8 space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">{carts.hotel_name}</h2>
            <div className="inline-block px-4 py-1 bg-green-400 text-white rounded-full text-sm font-semibold">
              {carts.type}
            </div>
          </div>

          <p className="text-blue-500 text-lg">{carts.location?.address || "Address not available"}</p>
          <p className="text-gray-700">{carts.contact_info?.email || "Email not provided"}</p>

          <div className="pt-4">
            <p className="text-2xl text-blue-700">
              <span className="font-semibold text-orange-500">Per Night:</span> {carts.price || "Price inbox"} TK
            </p>
          </div>

          <div className="pt-6">
            <h1 className="text-2xl text-red-500 mb-4">Our Hotel Advantages:</h1>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
              {carts.facility?.map((item, index) => (
                <li key={index} className="hover:text-orange-500 transition-colors duration-300">{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end pt-6">
            <Link to={`/booknow/${carts._id}`}>
              <button className="btn btn-warning rounded-full px-8 py-3 text-lg font-semibold text-white hover:scale-105 hover:bg-orange-500 transition-all duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
