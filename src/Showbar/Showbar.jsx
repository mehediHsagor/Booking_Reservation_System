import {  Link, useNavigate} from "react-router-dom";

const Showbar = ({cart}) => {
    const navigation = useNavigate();  
return (
    <div className="p-5 m-5">
    <div className="card bg-base-100  shadow-xl">
    <figure className="h-72 w-2/3 carousel">
      <div className="carousel-item w-1/2 p-3">
        <img src={cart?.images[0]} className="w-full h-60" />
      </div>
      <div className="carousel-item w-1/2">
      <img src={cart?.images[1]} className="w-full h-60" />
      </div>
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {cart?.hotel_name}
        <div className="badge badge-secondary">{cart?.type}</div>
      </h2>
      <p>{cart?.location.address}</p>
      <p>{cart?.contact_info.email}</p>
      <div className="card-actions justify-end">
     
      <button  onClick={() => navigation(`/hotel/${cart._id}`)} className="btn btn-outline btn-warning"> View details</button>
      </div>
    </div>
    </div>
    </div>
    );
    };
    
    
    export default Showbar;
    