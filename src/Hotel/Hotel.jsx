import { useLoaderData } from "react-router-dom";
import "../Hotel/Hotel.css"


const Hotel = () => {
   const data=useLoaderData();
   console.log(data)
    return (
        <div className="">
              <div className="card card-side  bghg shadow-xl">
  <figure>
    <img className="ppp"
      src={data.images[0]}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.hotel_name}</h2>
    <h2>{data.location.address}</h2>
    <h1>{data.number_of_rooms}</h1>
    <p>{data.facility[0]}</p>
    <p>{data.facility[1]}</p>
    <p>{data.facility[2]}</p>
    <p>{data.facility[3]}</p>
    <p>{data.facility[4]}</p>
    <div className="card-actions justify-end">
    
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Hotel;