
import { useState } from "react";
import "../Admin_route/Admin_route.css";

const Admin_route = () => {
    const [users, setUsers] = useState([]);
    const handleaddsubmit = event =>{
        event.preventDefault();
       const  form = event.target;
       const  hotel_id = form.hotel_id.value;
       const name = form.name.value;
       const facility = form.facility.value;
       const  address = form.address.value;
       const city = form.city.value;
       const state = form.state.value;
       const country = form.country.value;
       const zip_code = form.zip_code.value;
       const phone = form.phone.value;
       const website = form.website.value;
       const rating = form.rating.value;
       const rooms = form.rooms.value;
       const type = form.type.value;
       const images1 = form.images1.value;
        const price = form.price.value;
       const images2 =form.images2.value;

  const user ={hotel_id,name,facility,address,city,state,country,zip_code,phone,website,rating,rooms,type,images1,price,images2};
  console.log(user)

  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{

        "Content-Type": "application/json",

    },
    body : JSON.stringify(user)


  })
  .then(res=>res.json())
  .then(data=>{
    setUsers((Users) => [...Users, data]);
    console.log(data);
    
    form.reset();
  })

    }
    return (
        <>
        <div className="h-screen bg-lime-100" >

       <div className=" ">

      
      
        <form  onSubmit={handleaddsubmit} className="pt-10  jkjkjk mx-auto ">

      
        <input type="text" placeholder="Hotel_id" name="hotel_id" className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Hotel_name" name="name" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        <input type="text" placeholder="facility" name="facility" className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="address" name="address" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        <input type="text" placeholder="city" name="city" className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        
        <input type="text" placeholder="state" name="state" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        <input type="text" placeholder="country" name="country" className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="zip_code" name="zip_code" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        <input type="text" placeholder="phone" name="phone" className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Website" name="website" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        
        <input type="text" placeholder="Hotel_rating" name="rating"  className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Number_of_rooms" name="rooms" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        <input type="text" placeholder="Type" name="type" className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="url" placeholder="Images1" name="images1" className="input input-bordered w-full max-w-xs mt-3" /><br/>
        <input type="text" placeholder="Price" name="price"  className="input input-bordered w-full max-w-xs mt-3" />&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="url" placeholder="Images2" name="images2" className="input input-bordered w-full max-w-xs mt-3" /><br/><br/>
        <button className="btn btn-outline btn-warning">Submit</button>
        </form>
        </div>
        </div>
       </>
    )
};

export default Admin_route;