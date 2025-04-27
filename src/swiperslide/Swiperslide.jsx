import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Swiperslider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // উদাহরণ: API endpoint থেকে ডাটা আনো
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:5000/category');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('ডাটা আনতে সমস্যা হয়েছে:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="my-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden shadow-md">
              <img
                src={product.image || `https://source.unsplash.com/800x400/?product,${index}`}
                alt={product.name || `Product ${index}`}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-40 rounded">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="mb-4">{product.description || 'বিস্তারিত তথ্য এখানে পাওয়া যাবে।'}</p>
                <button className="px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition">
                 <Link to="/searchbar"> Show Hotel</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiperslider;
