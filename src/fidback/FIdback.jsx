import { useState } from "react";
import axios from "axios";

const FIdback = () => {
  const [userName, setUserName] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [feedbacks, setfeedbacks] = useState([]);
  const [rating, setRating] = useState(5);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const hotelname = form.hotelname.value;
    const review = form.review.value;
    const rating = form.rating.value;
    const feedback = { username, hotelname, review, rating };
    console.log(feedback);

    fetch("http://localhost:5000/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    })
      .then((res) => res.json())
      .then((data) => {
        setfeedbacks((feedbacks) => [...feedbacks, data]);
        console.log(data);

        form.reset();
      });

    const feedbackData = {
      userName,
      hotelName,
      reviewText,
      rating,
    };

    try {
      await axios.post("/api/feedback", feedbackData); // Update with actual endpoint
      alert("Feedback submitted successfully!");
      setUserName("");
      setHotelName("");
      setReviewText("");
      setRating(5);
    } catch (error) {
      alert("Failed to submit feedback");
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Hotel Feedback Form
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-2xl font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            value={userName}
            name="username"
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-2xl font-medium text-gray-700">
            Hotel Name
          </label>
          <input
            type="text"
            name="hotelname"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-2xl font-medium text-gray-700">
            Review
          </label>
          <textarea
            value={reviewText}
            name="review"
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-2xl font-medium text-gray-700">
            Rating (1-5)
          </label>
          <input
            type="number"
            value={rating}
            name="rating"
            onChange={(e) => setRating(Number(e.target.value))}
            min={1}
            max={5}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FIdback;
