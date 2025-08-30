import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ImageViewer } from './ImageViewer';

const images = Array.from({ length: 12 }, (_, i) => `/images/img${i}.webp`);

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
      <ul className='grid grid-cols-3 gap-1.5'>
        {images.map((src,idx)=> (
          <li key={idx} className='relative w-full after:block after:content:"" after:pb-[100%]'>
            <img src={src}      onClick={() => goToSlide(idx)} alt="갤러리이미지" className='w-full absolute h-full left-0 object-cover rounded-lg  cursor-pointer hover:scale-105'/>
          </li>
        ))}
      </ul>

  </div>)
}

export default Gallery;
