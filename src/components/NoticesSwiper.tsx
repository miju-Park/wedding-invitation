import { useCallback, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function NoticesSwiper() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>()
  
    // embla 이벤트 등록
  useEffect(() => {
      if (!api) return
      setCurrent(api.selectedScrollSnap()) // 초기 index
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap())
      })
    }, [api])
  


  const slides = [
    {
      title: "주차 안내",
      desc: (
        <>
          <p>건물 내부 주차장이 협소하여&nbsp;</p>
          <p>만차시 안내요원의 안내에 따라&nbsp;</p>
          <p>외부주차장을 이용해야 하는 점 양해 부탁드립니다.</p>
          <p>&nbsp;</p>
          <p>예식장 1층 로비에서 2시간 주차권 등록이 가능합니다.&nbsp;</p>
        </>
      ),
      img: "https://images.unsplash.com/photo-1616363088386-31c4a8414858?q=80&w=1170&auto=format&fit=crop",
    },
    {
      title: "축하 화환 안내",
      desc: (
        <>
          {" "}
          <p>식장 사정에 따라</p>
          <p>화환은 정중히 사양합니다.</p>
          <br />
          <p>좋은 마음만 감사히 받겠습니다.</p>
        </>
      ),
      img: "https://img.freepik.com/free-photo/elegant-wedding-ceremony-venue-with-floral-decorations_23-2151976686.jpg",
    },
    {
      title: "연회 & 식사 안내",
      desc: (
        <>
          <p>식사는 결혼식 30분 전부터</p>
          <p>웨딩홀 지하 1층에서 뷔페식으로 진행됩니다. </p>
          <br />
          <p>부족함 없이 즐기실 수 있도록</p>
          <p>한식을 비롯해 중식, 양식, 일식 등</p>
          <p>다양한 메뉴가 준비되어 있습니다.</p>
        </>
      ),
      img: "https://plus.unsplash.com/premium_photo-1674004585426-c6ad2adbe4c0?q=80&w=1332&auto=format&fit=crop",
    },
  ];

  return (
    <Carousel
    opts={{ loop: true, align: "center", startIndex:1}}
    className="w-full"
    setApi={setApi}
      >
         <CarouselContent className="px-16">
        {slides.map((slide, idx) => {
          const isActive = idx === current
          return (
            <CarouselItem
              key={idx}
              className="basis-[65%] transition-all"
            >
              <div
                className={`
                  rounded-2xl p-6 text-center transition-all duration-300
                  ${isActive ? "opacity-100" : "opacity-30"}
                `}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="rounded-4xl w-full h-[120px] object-cover"
                />
                <h3
                  className={`mt-4 text-lg font-bold ${
                    isActive ? "text-black" : "text-transparent"
                  }`}
                >
                  {slide.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    isActive ? "text-gray-600" : "text-transparent"
                  }`}
                >
                  {slide.desc}
                </p>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  );
}
