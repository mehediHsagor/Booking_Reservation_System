import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import "../Booknow/Booknow.css";
import guest from "../../src/Booknow/guests.png";
import bed from "../Booknow/bed.png";
import bathroom from "../Booknow/bathroom.png";
import cash from "../Booknow/cash.png";
import { useNavigate } from "react-router-dom";

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
      console.log(cart);
      const res = await axios.post("http://localhost:5000/carts", cart);
      navigate("/cart"); 
      console.log(res.data);
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
    <div>
      <div className="bookimag">
        <img src={carts.images?.[0]} alt="Hotel Preview" />
      </div>

      <div className="flex">
        <div className="bookput">
          <h1 className="card-title text-green-500 ml-20 mt-48">
            {carts.hotel_name}
          </h1>
          <h1 className="card-title text-blue-500 ml-20 mt-2">{carts.type}</h1>

          <div className="flex ml-20 mt-4 text-xl">
            <h1 className="flex">
              <img className="h-10" src={guest} alt="" />
              <span className="mt-2"> {carts.facility?.[3]} </span>
            </h1>
            <h1 className="flex ml-6">
              <img className="h-10" src={bed} alt="" />
              <span className="mt-2"> {carts.facility?.[4]} </span>
            </h1>
            <h1 className="flex ml-6">
              <img className="h-10" src={bathroom} alt="" />
              <span className="mt-2"> {carts.facility?.[5]} </span>
            </h1>
            <h1 className="mt-2 ml-6">{carts.facility?.[6]}</h1>
            <h1 className="mt-2 ml-6">{carts.facility?.[7]}</h1>
          </div>

          <div>
            <h1 className="ml-20 mt-4 text-xl text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </h1>
          </div>

          <div>
            <h1 className="text-4xl ml-20 mt-4">Room Amenities</h1>
            {carts.facility?.map((item, index) => (
              <h2 key={index} className="ml-24">
                {item}
              </h2>
            ))}
          </div>
        </div>

        <div className="mt-48 bg-base-100 bookinput p-5 mr-10">
          <div className="ml-6">
            <div>
              <h1 className="flex">
                <span className="text-4xl mt-3 text-orange-500">Reserve:</span>
                <span className="ml-2 mt-6">From</span>
                <span className="flex ml-4 mt-5">
                  <img className="h-10" src={cash} alt="" />
                  <span className="mt-2 text-red-500">{carts.price}/night</span>
                </span>
              </h1>
            </div>

            <input className="bbbboook" type="text" name="user" placeholder="User name" />

            <div className="flex bbbbooo mt-3">
              <h1 className="text-4xl">Check In</h1>
              <input
                className="ml-36"
                type="date"
                name="checkin"
                onChange={handleCheckin}
                value={checkin}
              />
            </div>

            <div className="flex bbbbooo mt-6">
              <h1 className="text-4xl">Check Out</h1>
              <input
                className="ml-32"
                type="date"
                name="checkout"
                onChange={handleCheckout}
                value={checkout}
              />
            </div>

            <div className="room flex bg-base-100 shadow-xl p-1 bbbbooo mt-5">
              <h1 className="text-4xl ml-5">Room</h1>

              <div className="collapse collapse-arrow bg-base-100 ml-44">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  {quantity} Room
                </div>
                <div className="collapse-content flex">
                  <h1>Rooms</h1>
                  <button onClick={decrease} className="rounded ml-3">
                    <span className="text-2xl text-blue-500">-</span>
                  </button>
                  <span className="text-lg ml-2">{quantity}</span>
                  <button onClick={increase} className="rounded">
                    <span className="text-2xl text-blue-500 ml-2">+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex mt-8">
              <h1 className="text-4xl text-orange-500">Total Cost:</h1>
              <h1 className="text-2xl text-blue-500 mt-2 ml-4">{totalPrice} Tk</h1>
            </div>

            <h1 className="ml-40 mt-5 p-3">
              <button
                className="btn btn-outline"
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
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
