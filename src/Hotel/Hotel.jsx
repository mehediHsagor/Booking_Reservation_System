import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../Hotel/Hotel.css";

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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg text-orange-500"></span>
      </div>
    );
  }

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
        
        {/* Hotel Images */}
        <div className="relative">
          <div className="carousel w-full h-96">
            {carts.images?.length > 0 ? (
              carts.images.map((img, index) => (
                <div key={index}  className="carousel-item hhhh w-full">
                  <img
                    src={img}
                    alt={`Hotel Image ${index + 1}`}
                    className="w-full  object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-96 bg-gray-100 text-gray-500">
                No Images Available
              </div>
            )}
          </div>
        </div>

        {/* Hotel Info */}
        <div className="p-8 space-y-5 flex flex-col justify-center">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-gray-800">{carts.hotel_name}</h2>
            <span className="inline-block bg-green-500 text-white text-xs font-semibold rounded-full px-4 py-1">
              {carts.type}
            </span>
          </div>

          <div className="text-gray-600 text-lg">
            <p><strong className="text-blue-600">Location:</strong> {carts.location?.address || "Not Available"}</p>
            <p><strong className="text-blue-600">Email:</strong> {carts.contact_info?.email || "Not Provided"}</p>
          </div>

          <div className="pt-4">
            <p className="text-2xl font-semibold text-green-600">
              ৳ {carts.price || "Contact For Price"} <span className="text-gray-600 text-sm">/ Per Night</span>
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-bold text-red-500 mb-2">Facilities:</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
              {carts.facility?.map((item, idx) => (
                <li key={idx} className="hover:text-orange-500 transition-colors duration-300">{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
            <Link to={`/booknow/${carts._id}`}>
              <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all duration-300">
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
