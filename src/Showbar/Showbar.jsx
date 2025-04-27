import { useNavigate } from "react-router-dom";

const Showbar = ({ cart }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 m-5">
      <div className="card bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition duration-300">
        {/* Images Carousel */}
        <div className="h-72 w-full relative overflow-hidden rounded-t-3xl">
          <div className="carousel w-full">
            <div className="carousel-item w-full">
              <img src={cart?.images?.[0]} className="object-cover w-full h-72" alt="Hotel Image 1" />
            </div>
            <div className="carousel-item w-full">
              <img src={cart?.images?.[1]} className="object-cover w-full h-72" alt="Hotel Image 2" />
            </div>
          </div>
        </div>

        {/* Hotel Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">{cart?.hotel_name}</h2>
            <span className="badge badge-success text-white px-3 py-2">{cart?.type}</span>
          </div>

          <div className="text-gray-600">
            <p><span className="font-semibold">Location:</span> {cart?.location?.address || "Address not available"}</p>
            <p><span className="font-semibold">Email:</span> {cart?.contact_info?.email || "Email not available"}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => navigate(`/hotel/${cart?._id}`)}
              className="btn btn-warning rounded-full px-6 py-2 font-semibold text-white hover:scale-105 transition transform duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showbar;
