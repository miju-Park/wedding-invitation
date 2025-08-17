import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = Array.from({ length: 12 }, (_, i) => `/images/img${i}.jpg`);

function Gallery() {
  const swiperRef = useRef<any>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        className="mb-6 rounded overflow-hidden"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`slide-${idx}`} className="w-full h-[400px] object-contain mx-auto rounded" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 그리드 */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((src, idx) => (
          
          <img
            key={idx}
            src={src}
            alt={`thumb-${idx}`}
            onClick={() => goToSlide(idx)}
            className="w-full h-24 object-cover rounded cursor-pointer hover:scale-105 transition"
          />
        ))}
      </div>
  </div>)
}

export default Gallery;
