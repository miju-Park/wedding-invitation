import { useCallback, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Image = ({ src, goSlide }: { src: string; goSlide: () => void }) => {
  return (
    <li className='relative w-full after:block after:content:"" after:pb-[100%]'>
      <img
        src={src}
        onClick={() => goSlide()}
        alt="갤러리이미지"
        className="w-full absolute h-full left-0 object-cover rounded-lg  cursor-pointer hover:scale-105"
      />
    </li>
  );
};

function Gallery() {
  const swiperRef = useRef<any>(null);

  const images = useMemo(
    () => Array.from({ length: 12 }, (_, i) => `/images/img${i}.webp`),
    []
  );

  const goToSlide = useCallback((index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  }, []);

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
            <img
              src={src}
              alt={`slide-${idx}`}
              className="w-full h-[400px] object-contain mx-auto rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 썸네일 그리드 */}
      <ul className="grid grid-cols-3 gap-1.5">
        {images.map((src, idx) => (
          <Image src={src} key={idx} goSlide={() => goToSlide(idx)} />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
