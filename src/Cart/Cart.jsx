import { useEffect, useState } from "react";
import ff from "../Cart/delete (2).png";
import { Link } from "react-router-dom";



const Cart = () => {
    const [carts, setcarts] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:5000/carts")
      .then((res) => res.json())
      .then((data) => setcarts(data));
  }, []);
    return (
        <div>
              <h1> this is a cart</h1>
              <div className="cart-container mx-auto items-center justify-center  w-full">
    <table className="table">
      <thead>
        <tr className="bg-blue-100">
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th >Action</th>
          <th>Payment</th>

        </tr>
      </thead>
      <tbody>
        {carts.map((cart, index) => (
          <tr key={cart._id}>
             <td>
              <label>{index + 1}</label>
            </td>
            <td>
                <img  className="h-14 w-14" src={cart.image}></img>
            </td>
            <td>
                {cart.hotelName}
            </td>
            
              
         <td>
            {cart.pricePerNight};

         </td>
         <td>
         
              <button
               
                className="btn btn-ghost btn-lg text-white"
              >
                <img className="h-10" src={ff} alt="Delete" />
              </button>
           
         </td>
         <td>
            <button><Link to={`/procedtocheckout/${cart._id}`}>Proced TO Checkout</Link></button>
         </td>
             
            
       
          </tr>
        ))}
      </tbody>
    </table>

    <div className="p-7 m-10 ">
   

    </div>
  </div>
        </div>
    );
};

export default Cart;