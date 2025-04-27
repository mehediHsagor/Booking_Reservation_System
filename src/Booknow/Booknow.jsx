import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import styles
//import guest from "../../src/Booknow/guests.png";
//import bed from "../Booknow/bed.png";
//import bathroom from "../Booknow/bathroom.png";
import cash from "../Booknow/cash.png";
import "../Booknow/Booknow.css";

const HotelRoomTypes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleCheckin = (e) => setCheckin(e.target.value);
  const handleCheckout = (e) => setCheckout(e.target.value);

  const getNumberOfNights = () => {
    if (!checkin || !checkout) return 0;
    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);
    const timeDiff = checkOutDate - checkInDate;
    const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/hotel/${id}`);
        setHotel(response.data);
      } catch (error) {
        console.error("Failed to fetch hotel:", error);
      }
    };
    fetchHotel();
  }, [id]);

  const handleSelectRoom = (type) => {
    const room = hotel?.roomTypes.find((r) => r.type === type);
    setSelectedRoom(room);
  };

  const handleBookNow = async () => {
    try {
      const totalPrice = selectedRoom.price * quantity * getNumberOfNights();
  
      const bookingData = {
        hotelId: id,
        hotelName: hotel.hotel_name,
        pricePerNight: selectedRoom.price,
        quantity,
        checkin,
        checkout,
        totalPrice,
        image: selectedRoom.image,
      };
  
      await axios.post("http://localhost:5000/carts", bookingData);
  
      toast.success("Booking Added to Cart Successfully!", {
        position: "top-center",
      });
  
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to Add Booking!", {
        position: "top-center",
      });
    }
  };
  

  if (!hotel) return <div className="text-center text-2xl mt-20">Loading hotel data...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <ToastContainer /> {/* Add ToastContainer here */}
      <h1 className="text-5xl font-bold text-center mb-10 text-blue-700">{hotel.hotel_name}</h1>

      <div className="flex justify-center gap-8 mb-12">
        <button
          onClick={() => handleSelectRoom("luxury")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition duration-300"
        >
          Luxury
        </button>
        <button
          onClick={() => handleSelectRoom("vip")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition duration-300"
        >
          VIP
        </button>
        <button
          onClick={() => handleSelectRoom("normal")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300"
        >
          Normal
        </button>
      </div>
      {selectedRoom ? (
        <div className="border p-8 rounded-xl shadow-lg bg-white max-w-3xl mx-auto">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.type}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-semibold mb-3 capitalize text-purple-700">
            {selectedRoom.type} Room
          </h2>
          <p className="text-2xl text-green-700 mb-4 font-bold">
            Price: {selectedRoom.price}৳ / night
          </p>
          <p className="text-lg text-gray-700 leading-7">{selectedRoom.details}</p>

          {/* Booking Form */}
          <div className="mt-8 bg-base-100 bookinput p-6 ml-16 w-full rounded shadow-xl">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-4xl text-orange-500">Reserve:</h2>
                <span className="ml-2 mt-3">From</span>
                <div className="flex items-center ml-4">
                  <img className="h-10" src={cash} alt="Price Icon" />
                  <span className="mt-2 text-red-500 text-xl ml-2">{selectedRoom.price}৳/night</span>
                </div>
              </div>

              <input
                className="bbbboook w-full mb-4"
                type="text"
                name="user"
                placeholder="User name"
              />

              <div className="flex justify-between mb-4">
                <label className="text-xl mt-7">CheckIn &nbsp;</label>
                <input
                  className="border px-3 py-1 ml-1 rounded"
                  type="date"
                  name="checkin"
                  onChange={handleCheckin}
                  value={checkin}
                />
              </div>

              <div className="flex justify-between mb-4">
                <label className="text-xl mt-7">CheckOut &nbsp; </label>
                <input
                  className="border px-3 py-1 ml-1 rounded"
                  type="date"
                  name="checkout"
                  onChange={handleCheckout}
                  value={checkout}
                />
              </div>

              <div className="room flex justify-between items-center bg-gray-100 p-3 rounded mb-4">
                <h2 className="text-xl">Room</h2>
                <div className="flex items-center space-x-4">
                  <button onClick={decrease} className="text-2xl text-blue-500">-</button>
                  <span>{quantity}</span>
                  <button onClick={increase} className="text-2xl text-blue-500">+</button>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <h2 className="text-xl text-orange-500">Total Cost:</h2>
                <span className="text-xl text-blue-500">{selectedRoom.price * quantity * getNumberOfNights()} Tk</span>
              </div>

              <button
                className="btn btn-outline w-full"
                onClick={handleBookNow}
              >
                Book Your Stay Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl text-gray-600 text-center mt-12">
          Please select a room type above.
        </p>
      )}
    </div>
  );
};

export default HotelRoomTypes;