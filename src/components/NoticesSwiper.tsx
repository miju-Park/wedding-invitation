import { Carousel, CarouselContent, CarouselItem } from "./carousel";

export default function NoticesSwiper(){
  return <Carousel opts={{
    loop:true,
  }}>
        <CarouselContent>        
          <CarouselItem >
            <div className="p-1 gap-2 flex flex-col items-center">
              <div className="w-full p-4 max-w-[280px] h-[90px] rounded-[28px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616363088386-31c4a8414858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}/>

              <h1 className="font-bold text-base">주차 안내</h1>
              <div className="space-y-1"><p>건물 내부 주차장이 협소하여&nbsp;</p><p>만차시 안내요원의 안내에 따라&nbsp;</p><p>외부주차장을 이용해야 하는 점 양해 부탁드립니다.</p><p>&nbsp;</p><p>예식장 1층 로비에서 2시간 주차권 등록이 가능합니다.&nbsp;</p></div>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1 flex gap-2 flex-col items-center">
              <div className="w-full max-w-[280px] h-[90px] rounded-[28px] bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/elegant-wedding-ceremony-venue-with-floral-decorations_23-2151976686.jpg?t=st=1755421721~exp=1755425321~hmac=e536d011fc3dc501a0b2b7a8a209d966021003beb33b0b7fb62a802734bcec33&w=740')" }}/>
              <h1 className="font-bold text-base">축하 화환 안내</h1>
              <div className="sectionDesc">
                <p>식장 사정에 따라</p>
                <p>화환은 정중히 사양합니다.</p>
                <br/>
                <p>좋은 마음만 감사히 받겠습니다.</p>  
              </div>
            </div>
          </CarouselItem>
          <CarouselItem >
            <div className="p-1 flex gap-2 flex-col items-center">
              <div className="w-full p-4 max-w-[280px] h-[90px] rounded-[28px] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1674004585426-c6ad2adbe4c0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}/>
              <h1 className="font-bold text-base">연회 & 식사 안내</h1>
              <div className="sectionDesc">
                <p>식사는 결혼식 30분 전부터</p>
                <p>웨딩홀 지하 1층에서 뷔페식으로 진행됩니다. </p>
                <br/>
                <p>부족함 없이 즐기실 수 있도록</p>  
                <p>한식을 비롯해 중식, 양식, 일식 등</p>  
                <p>다양한 메뉴가 준비되어 있습니다.</p>  
              </div>
            </div>
          </CarouselItem>
      </CarouselContent>
  </Carousel>
}