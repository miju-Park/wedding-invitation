import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import generateImageUrl from "../js/generateImageUrl";

function Gallery() {
  const modalSwiperRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(
    () => Array.from({ length: 12 }, (_, i) => `img${i}`),
    []
  );

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

  const Modal = (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999]"
      onClick={closeModal}
    >
      <div
        className="relative w-screen h-screen flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-white text-3xl font-bold z-50 hover:scale-110 transition-transform"
        >
          ✕
        </button>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
          } as any}
          navigation={true}
          modules={[Navigation]}
          onSwiper={(swiper) => {
            modalSwiperRef.current = swiper;
            swiper.slideTo(activeIndex, 0);
          }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-screen h-screen [&>.swiper-wrapper]:flex [&>.swiper-wrapper]:items-center"
        >
          {images.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="!flex justify-center items-center w-screen h-screen"
            >
              <picture>
                <source
                  className="max-h-screen max-w-screen object-contain rounded-lg mx-auto"
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
                  className="max-h-screen max-w-screen object-contain rounded-lg mx-auto"
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );

  return (
    <>
      <ul className="grid grid-cols-3 gap-1.5">
        {images.map((src, idx) => (
          <li
            key={idx}
            className="relative w-full after:block after:content-[''] after:pb-[100%]"
            onClick={() => goToSlide(idx)}
          >
            <picture>
              <source
                className="w-full absolute h-full left-0 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
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
                className="w-full absolute h-full left-0 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
              />
            </picture>
          </li>
        ))}
      </ul>

      {isOpen && createPortal(Modal, document.body)}
    </>
  );
}

export default Gallery;
