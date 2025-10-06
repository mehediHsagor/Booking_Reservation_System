import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Swal from "sweetalert2";
import cash from "../Booknow/cash.png";
import "../Booknow/Booknow.css";

const Booknow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const getNumberOfNights = () => {
    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);
    const timeDiff = checkOutDate - checkInDate;
    const nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const totalPrice = useMemo(() => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * quantity * getNumberOfNights();
  }, [selectedRoom, quantity, checkin, checkout]);

  const handleDateSelect = (ranges) => {
    const { startDate, endDate } = ranges.selection;
    const nights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    if (nights > 7) {
      Swal.fire({
        icon: "error",
        title: "Booking Limit Exceeded",
        text: "You can’t book more than 7 nights!",
      });
      return;
    }

    setDateRange([ranges.selection]);
    setCheckin(startDate.toISOString().split("T")[0]);
    setCheckout(endDate.toISOString().split("T")[0]);
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
    if (!selectedRoom) {
      toast.error("Please select a room type!", {
        position: "top-center",
      });
      return;
    }

    if (!checkin || !checkout || getNumberOfNights() === 0) {
      toast.error("Please select valid check-in and check-out dates!", {
        position: "top-center",
      });
      return;
    }

    try {
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

  if (!hotel)
    return (
      <div className="text-center text-2xl mt-20">Loading hotel data...</div>
    );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <ToastContainer />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-indigo-800">
        {hotel.hotel_name}
      </h1>

      {/* Room Selection Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        {["luxury", "vip", "normal"].map((type) => (
          <button
            key={type}
            onClick={() => handleSelectRoom(type)}
            className={`px-8 py-4 rounded-lg transition duration-300 text-white text-xl capitalize ${
              selectedRoom?.type === type
                ? "bg-blue-700"
                : type === "luxury"
                ? "bg-blue-600 hover:bg-blue-700"
                : type === "vip"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {selectedRoom ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Room Details */}
          <div className="border p-8 rounded-lg shadow-lg bg-white h-auto">
            <img
              src={selectedRoom.image}
              alt={selectedRoom.type}
              className="w-full h-80 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-semibold mb-3 text-purple-800">
              {selectedRoom.type} Room
            </h2>
            <p className="text-2xl text-green-700 mb-4 font-bold">
              Price: {selectedRoom.price}৳ / night
            </p>
            <p className="text-lg text-gray-600 leading-7">{selectedRoom.details}</p>
          </div>

          {/* Booking Section */}
          <div className="bg-base-100 p-8 rounded-lg shadow-xl border border-gray-200">
            <div className="mb-6">
              <h2 className="text-3xl text-orange-600">Reserve:</h2>
              <div className="flex items-center mt-3">
                <img className="h-8" src={cash} alt="Price Icon" />
                <span className="mt-2 text-red-500 text-xl ml-2">
                  {selectedRoom.price}৳/night
                </span>
              </div>
            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <label className="text-xl mb-2 block">Select Date Range</label>
              <DateRange
                editableDateInputs={true}
                onChange={handleDateSelect}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={new Date()}
              />
              <div className="mt-2 text-sm text-gray-600">
                {checkin && checkout && (
                  <>
                   <span className="text-orange-500 ">Check-in:</span>  <strong>{checkin}</strong> | <span className="text-orange-500 ">Check-out:{" "}</span>
                    <strong>{checkout}</strong> | <span className="text-orange-500 ">Nights:{" "}</span> 
                    <strong>{getNumberOfNights()}</strong>
                  </>
                )}
              </div>
            </div>

            {/* Room Quantity */}
            <div className="room flex justify-between items-center bg-gray-100 p-4 rounded mb-4">
              <h2 className="text-xl">Room</h2>
              <div className="flex items-center space-x-4">
                <button onClick={decrease} className="text-2xl text-blue-500">
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={increase} className="text-2xl text-blue-500">
                  +
                </button>
              </div>
            </div>

            {/* Total Cost */}
            <div className="flex justify-between mb-6">
              <h2 className="text-xl text-orange-600">Total Cost:</h2>
              <span className="text-xl text-blue-500">{totalPrice} Tk</span>
            </div>

            {/* Book Button */}
            <button
              className="btn btn-outline w-full py-3 bg-indigo-600 text-white rounded-lg"
              onClick={handleBookNow}
              disabled={!selectedRoom || getNumberOfNights() === 0}
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      ) : (
        <p className="text-4xl text-orange-600 text-center mt-12">
          Please select a room type above.
        </p>
      )}
    </div>
  );
};

export default Booknow;
