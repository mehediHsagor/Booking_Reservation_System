import gpsIcon from "../Contact/gps.png";
import phoneIcon from "../Contact/phone-call.png";
import emailIcon from "../Contact/gmail (2).png";
import facebookIcon from "../Contact/Facebook (5).png";

const Contact = () => {
  return (
    <div className="px-6 py-12 bg-gray-100 mt-6">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum
          dolor tempore ex corporis soluta id totam unde nisi animi optio
          consectetur iusto vel velit.
        </p>
      </div>

      {/* Contact Details & Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Contact Information */}
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img className="w-10 h-10" src={gpsIcon} alt="Address" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Address</h2>
              <p className="text-gray-500">Technosoft ,it park</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img className="w-10 h-10" src={phoneIcon} alt="Phone" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
              <p className="text-gray-500">01797566358</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
            <img className="w-10 h-10" src={emailIcon} alt="Email" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">Email</h2>
              <p className="text-gray-500">mehedisagor2001@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Connect with Us
            </h2>
            <div className="flex space-x-4 mt-2 aaaaa mx-7">
              <a href="#">
                <img className="w-10 h-10 mx-5 mt-2" src={gpsIcon} alt="GPS" />
              </a>
              <a href="#">
                <img
                  className="w-10 h-10 mx-5 mt-2"
                  src={emailIcon}
                  alt="Email"
                />
              </a>
              <a href="#">
                <img
                  className="w-10 h-10 mx-5 mt-2"
                  src={phoneIcon}
                  alt="Phone"
                />
              </a>
              <a href="#">
                <img
                  className="w-10 h-10 mx-5 mt-2"
                  src={facebookIcon}
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Contact{" "}
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
