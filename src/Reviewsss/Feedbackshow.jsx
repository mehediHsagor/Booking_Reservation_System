import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Feedbackshow = () => {
  const [loading, setLoading] = useState(true);
  const [feedbackList, setFeedbackList] = useState([]);
  const progressContent = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks`)
      .then((res) => res.json())
      .then((data) => {
        setFeedbackList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!feedbackList.length) return <div>No feedback available.</div>;

  return (
    <div className="p-4 mb-5 mt-2">
      <h1 className="text-3xl font-bold text-orange-500 text-center mb-6">User Feedback</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {feedbackList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow p-6 rounded-lg text-center">
              <h2 className="text-xl font-semibold mb-2">{item.username}</h2>
              <p className="text-gray-600 italic">Hotel: {item.hotelname}</p>
              <p className="text-sm mt-2">{item.review}</p>
              <p className="text-yellow-500 mt-2">Rating: {item.rating} ⭐</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Feedbackshow;
