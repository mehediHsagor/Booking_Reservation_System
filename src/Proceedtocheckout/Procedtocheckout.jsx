import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Procedtocheckout = () => {
  const { id } = useParams();
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/carts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => setCart(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!cart) return <p>Loading...</p>; // ডাটা না এলে লোডিং দেখাবে

  return (
    <div>
      <h2>Proceed to Checkout</h2>
      <img src={cart.image} alt={cart.hotelName} />
      <p>Hotel: {cart.hotelName}</p>
      <p>Check-in: {cart.checkin}</p>
      <p>Check-out: {cart.checkout}</p>
      <p>Total Price: ${cart.totalPrice}</p>
    </div>
  );
};

export default Procedtocheckout;
