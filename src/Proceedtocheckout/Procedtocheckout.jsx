import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Procedtocheckout = () => {
  const { id } = useParams();
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('Card'); // Default Payment Method
  const [methodNumber, setMethodNumber] = useState(''); // Method Number input
  const navigate = useNavigate();

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

  const generateTransactionId = () => {
    return 'TXN-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handlePayment = async () => {
    if (!methodNumber) {
      Swal.fire('Number Required', 'Please enter your payment number!', 'warning');
      return;
    }

    try {
      const transactionId = generateTransactionId();
      
      Swal.fire({
        title: "Processing Payment...",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        }
      }).then(() => {
        Swal.fire(
          'Payment Successful!',
          `✅ Method: ${paymentMethod}\n📞 Number: ${methodNumber}\n🧾 Transaction ID: ${transactionId}`,
          'success'
        );
        navigate('/');
      });

    } catch (error) {
      Swal.fire('Payment Failed', 'Something went wrong. Please try again.', 'error');
    }
  };

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!cart) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">Proceed to Checkout</h2>
        <img src={cart.image} alt={cart.hotelName} className="rounded-md w-full h-60 object-cover mb-6" />
        <div className="space-y-3 text-lg">
          <p><span className="font-bold">Hotel:</span> {cart.hotelName}</p>
          <p><span className="font-bold">Check-in:</span> {cart.checkin}</p>
          <p><span className="font-bold">Check-out:</span> {cart.checkout}</p>
          <p><span className="font-bold">Total Price:</span> <span className="text-green-600 font-bold">${cart.totalPrice}</span></p>
        </div>

        {/* Payment Method Dropdown */}
        <div className="mt-6">
          <label className="block mb-2 font-semibold">Select Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Card">Card (Visa/Master)</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
          </select>
        </div>

        {/* Method Number Input */}
        <div className="mt-4">
          <label className="block mb-2 font-semibold">Enter {paymentMethod} Number:</label>
          <input
            type="text"
            placeholder={`Enter your ${paymentMethod} number`}
            value={methodNumber}
            onChange={(e) => setMethodNumber(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          onClick={handlePayment}
          className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Procedtocheckout;
