import { Link, useNavigate} from "react-router-dom";
import '../ShowWatch/ShowWatch.css';

const Showwatch = ({ cart }) => {
  const navigation = useNavigate();

  return (
    <div className="p-5 m-5">
      <div className="card bg-base-100 backgro  shadow-xl">
        <figure className="h-80 w-2/3 carousel">
          <div className="carousel-item w-1/2 p-3">
            <img src={cart.images[0]} className="w-full h-60" />
          </div>
          <div className="carousel-item w-1/2">
            <img src={cart.images[1]} className="w-full  h-60" />
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {cart.hotel_name}
            <div className="badge badge-secondary">{cart.type}</div>
          </h2>
          <p>{cart.location.address}</p>
          <p>{cart.contact_info.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success"> Book Now</button>
            <button
            
              className="btn btn-outline btn-warning"
            >
              {" "}
            <Link to={`/hotel/${cart._id}`}>View details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showwatch;
