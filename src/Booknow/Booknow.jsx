import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Booknow/Booknow.css";
import guest from "../../src/Booknow/guests.png";
import bed from "../Booknow/bed.png";
import bathroom from "../Booknow/bathroom.png";
import cash from "../Booknow/cash.png";

const Booknow = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carts, setCarts] = useState({});
  const [loading, setLoading] = useState(true);
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

  const addToCart = async (cart) => {
    try {
      const res = await axios.post("http://localhost:5000/carts", cart);
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/booknow/${id}`)
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

  if (loading) return <div>Loading...</div>;

  const totalPrice = carts.price * quantity * getNumberOfNights();

  return (
    <div className="booknow-container">
      {/* Hotel Image */}
      <div className="bookimag">
        <img src={carts.images?.[0]} alt="Hotel Preview" />
      </div>

      <div className="flex">
        {/* Left Section */}
        <div className="bookput">
          <h1 className="card-title text-green-500 ml-20 mt-48">{carts.hotel_name}</h1>
          <h2 className="card-title text-blue-500 ml-20 mt-2">{carts.type}</h2>

          <div className="flex ml-20 mt-4 text-xl space-x-6">
            <div className="flex items-center space-x-2">
              <img className="h-10" src={guest} alt="Guest Icon" />
              <span>{carts.facility?.[3]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-10" src={bed} alt="Bed Icon" />
              <span>{carts.facility?.[4]}</span>
            </div>
            <div className="flex items-center space-x-2">
              <img className="h-10" src={bathroom} alt="Bathroom Icon" />
              <span>{carts.facility?.[5]}</span>
            </div>
            <span>{carts.facility?.[6]}</span>
            <span>{carts.facility?.[7]}</span>
          </div>

          <p className="ml-20 mt-4 text-xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>

          <div className="ml-20 mt-6">
            <h2 className="text-3xl mb-2">Room Amenities</h2>
            <ul className="list-disc ml-6">
              {carts.facility?.map((item, index) => (
                <li key={index} className="ml-4">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Booking Form */}
        <div className="mt-48 bg-base-100 bookinput p-6 ml-16 w-1/3 rounded shadow-xl">
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-4xl text-orange-500">Reserve:</h2>
              <span className="ml-2 mt-3">From</span>
              <div className="flex items-center ml-4">
                <img className="h-10" src={cash} alt="Price Icon" />
                <span className="mt-2 text-red-500 text-xl ml-2">{carts.price}/night</span>
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
              <span className="text-xl text-blue-500">{totalPrice} Tk</span>
            </div>

            <button
              className="btn btn-outline w-full"
              onClick={() =>
                addToCart({
                  hotelId: id,
                  hotelName: carts.hotel_name,
                  pricePerNight: carts.price,
                  quantity: quantity,
                  checkin: checkin,
                  checkout: checkout,
                  totalPrice: totalPrice,
                  image: carts.images?.[0],
                })
              }
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
