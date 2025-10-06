import about from "../About/About.jpg";
import "../About/About.css";

const About = () => {
  return (
    <div className="abouttt my-20 ">
      <div className="w-1/2">
        <img className="aboutimg mx-auto" src={about} alt="About"></img>
      </div>
      <div className="w-1/2 mx-auto">
        <h1 className="about_ss text-4xl">About us....</h1>
        <p className="text-2xl mt-5 aboutpara  ">
          At [Your Hotel Booking Platform Name], we are committed to providing a
          seamless and hassle-free hotel booking experience for travelers around
          the world. Whether you’re planning a business trip, a romantic
          getaway, or a family vacation, our platform connects you with the best
          hotels at competitive prices.
        </p>
        <button className="btn btn-outline btn-info mt-6 ml-10">
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
