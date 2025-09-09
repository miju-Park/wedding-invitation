import { useCallback, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import generateImageUrl from "../js/generateImageUrl";

const Image = ({ src, goSlide }: { src: string; goSlide: () => void }) => {
  return (
    <li
      className='relative w-full after:block after:content:"" after:pb-[100%]'
      onClick={() => goSlide()}
    >
      <picture>
        <source
          className="w-full absolute h-full left-0 object-cover rounded-lg  cursor-pointer hover:scale-105"
          srcSet={generateImageUrl({
            filename: src,
            format: "webp",
            option: "w_120,ar_1:1,c_fill",
          })}
          type="image/webp"
        />
        <img
          src={generateImageUrl({
            filename: src,
            format: "jpg",
            option: "w_120,ar_1:1,c_fill",
          })}
          alt="photo"
          className="w-full absolute h-full left-0 object-cover rounded-lg  cursor-pointer hover:scale-105"
        />
      </picture>
    </li>
  );
};

function Gallery() {
  const swiperRef = useRef<any>(null);

  const images = useMemo(
    () => Array.from({ length: 12 }, (_, i) => `img${i}`),
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
          style={{
            '--swiper-navigation-color': '#fff'
            
          }}
        navigation={true}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        className="mb-6 rounded overflow-hidden [&>.swiper-wrapper]:flex [&>.swiper-wrapper]:items-center"
      >
        {images.map((src, idx) => (
          <SwiperSlide
            key={idx}
            className="h-full justify-center items-center flex"
          >
            <picture>
              <source
                className="w-full object-contain rounded-lg mx-auto h-full"
                srcSet={generateImageUrl({
                  filename: src,
                  format: "webp",
                })}
                type="image/webp"
              />
              <img
                src={generateImageUrl({
                  filename: src,
                  format: "jpg",
                })}
                alt="photo"
                className="w-full object-contain rounded-lg mx-auto h-full"
              />
            </picture>
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
