import { Link } from "react-router-dom";
import '../ShowWatch/ShowWatch.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Payment/Payment.css";

const Showwatch = () => {
  const [productInfo, setProductInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/hote/${id}`) 
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productInfo) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="p-5 m-5">
      <div className="card bg-base-100 backgro shadow-xl">
        <figure className="h-80 w-2/3 carousel">
          {productInfo.images?.length > 0 && (
            <>
              <div className="carousel-item w-1/2 p-3">
                <img src={productInfo.images[0]} className="w-full h-60" />
              </div>
              {productInfo.images[1] && (
                <div className="carousel-item w-1/2">
                  <img src={productInfo.images[1]} className="w-full  h-60" />
                </div>
              )}
            </>
          )}
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {productInfo.hotel_name}
            <div className="badge badge-secondary">{productInfo.type}</div>
          </h2>
          <p>{productInfo.location?.address || "Address not available"}</p>
          <p>{productInfo.contact_info?.email || "Email not provided"}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success"><Link to="/booknow">Book Now</Link></button>
            <button className="btn btn-outline btn-warning">
              <Link to={`/hotel/${productInfo._id}`}>View details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showwatch;
