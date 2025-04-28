import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ff from "../Cart/delete (2).png";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/carts/${_id}`, {
            method: "DELETE",
          });
          const data = await response.json();
          if (data.deletedCount > 0) {
            setCarts(carts.filter((cart) => cart._id !== _id));
            Swal.fire("Deleted!", "Your cart item has been deleted.", "success");
          }
        } catch (error) {
          console.error("Failed to delete cart item:", error);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  return (
    <div className="p-10 min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold text-center text-orange-400 mb-10">🛒 Your Cart</h1>
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full shadow-xl rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800">
            <tr>
              <th className="py-4 px-6 text-left">#</th>
              <th className="py-4 px-6 text-left">Image</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Action</th>
              <th className="py-4 px-6 text-left">Payment</th>
            </tr>
          </thead>
          <tbody>
            {carts.length > 0 ? (
              carts.map((cart, index) => (
                <tr key={cart._id} className="bg-white hover:bg-blue-50 transition">
                  <td className="py-4 px-6">{index + 1}</td>
                  <td className="py-4 px-6">
                    <img className="h-14 w-14 object-cover rounded-md" src={cart.image} alt="hotel" />
                  </td>
                  <td className="py-4 px-6 font-semibold">{cart.hotelName}</td>
                  <td className="py-4 px-6 font-bold text-green-600">${cart.pricePerNight}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleDelete(cart._id)}
                      className=" hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition"
                    >
                      <img className="h-6 w-6 inline" src={ff} alt="Delete" />
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <Link to={`/procedtocheckout/${cart._id}`}>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-500 text-xl">
                  No items in cart 🛒
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
