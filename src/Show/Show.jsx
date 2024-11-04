import { useEffect, useState } from "react";


import Showwatch from "../ShowWatch/Showwatch";
const Show = () => {
  const [carts, setcart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setcart(data));
  }, []);
  return (
    <div>
    
    <div>
      <h1> this is a Home </h1>
      <h1>{carts.length}</h1>
      <h1>name:{carts.hotel_name}</h1>
      {carts?.map((cart) => (
        <Showwatch key={cart?.id} cart={cart}></Showwatch>
      ))}
    </div>
    </div>
  );
};

export default Show;
