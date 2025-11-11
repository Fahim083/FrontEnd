import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import hero1 from '../assets/hero1.jpeg'
import hero2 from '../assets/hero2.jpeg'
import hero3 from '../assets/hero3.png'

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "The Key to Your New Home",
      desc: "Effortless listings, endless possibilities. Discover a place you'll love to live.",
      img: hero3,
    },
    {
      id: 2,
      title: "Find Your Dream Apartment",
      desc: "Luxury spaces, modern amenities, and prime locations — explore your options today.",
      img: hero2,
    },
    {
      id: 3,
      title: "Invest in the Future of Real Estate",
      desc: "Smart choices start here. Explore commercial properties with growth potential.",
      img: hero1,
    },
  ];

  return (
   <div className="relative w-full mt-5 md:mt-8 lg:mt-10 xl:mt-16 h-[500px] md:h-[600px] my-5 rounded-xl overflow-hidden">
  <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  pagination={{ clickable: true }}
  autoplay={{ delay: 400000 }}
  loop
  onInit={(swiper) => {
    swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
    swiper.params.navigation.nextEl = ".swiper-button-next-custom";
    swiper.navigation.init();
    swiper.navigation.update();
  }}
  className="w-full h-full"
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <div
        className="w-full h-full bg-center bg-cover relative"
        style={{ backgroundImage: `url(${slide.img})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white p-6">
          <h1 className="text-4xl md:text-6xl font-black">{slide.title}</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">{slide.desc}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}

  {/* Custom buttons */}
  <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
  <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>
</Swiper>

</div>

  );
};

export default HeroSection;
