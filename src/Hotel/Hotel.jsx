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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg text-orange-500"></span>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500">

        {/* Hotel Image Section */}
        <div className="relative group overflow-hidden">
          <img
            src={carts.images?.[1]}
            alt="Hotel"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
        </div>

        {/* Hotel Information */}
        <div className="p-8 flex flex-col justify-between space-y-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">{carts.hotel_name}</h2>
            <span className="inline-block bg-green-500 text-white text-xs font-semibold rounded-full px-4 py-1 mt-2">
              {carts.type}
            </span>
          </div>

          <div className="text-gray-700 space-y-2">
            <p><strong className="text-blue-600">Location:</strong> {carts.location?.address || "Not Available"}</p>
            <p><strong className="text-blue-600">Email:</strong> {carts.contact_info?.email || "Not Provided"}</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-green-600">
              ৳ {carts.price || "Contact For Price"}{" "}
              <span className="text-gray-500 text-sm">/ Night</span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Facilities:</h3>
            <ul className="grid grid-cols-2 md:grid-cols-2 gap-2 text-gray-600 list-disc list-inside">
              {carts.facility?.map((item, idx) => (
                <li key={idx} className="hover:text-orange-500 transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-right">
            <Link to={`/booknow/${carts._id}`}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300">
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
