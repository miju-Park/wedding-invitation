import { Bus, BusFront, CarFront, TrainFront, TramFront } from "lucide-react";
import MapNavigationButtons from "./MapNavigationButtons";

export const Location = () => {
  return (
    <>
      <div className="text-start pt-10 text-brown-700 font-sans text-sm space-y-2">
        <h3 className="font-bold flex gap-2 items-center">
          <CarFront />
          <span>자차</span>
        </h3>
        <p>
          서울 강남구 논현로 79길 72 올림피아센터 빌딩
          <br />
          <span className="text-gray-500 text-xs">
            (서울 강남구 역삼동 828-10 올림피아센터 빌딩)
          </span>
        </p>
        <p className="text-xs">원하는 앱을 선택하시면 길안내가 시작됩니다.</p>
        <MapNavigationButtons
          lat={37.4960525}
          lng={127.0328914}
          placeName="세인트메리엘 메리엘홀"
        />
        <p className="text-gray-500">
        ∙ 건물 내부 주차장이 협소하여 안내요원의 안내에 따라 외부주차장을
          이용해주시길 바랍니다.
        </p>
        <p className="text-gray-500">
        ∙ 예식장 1층 로비에서 2시간 무료주차 등록이 가능합니다.
        </p>
      </div>
      <div className="text-start text-brown-700 pt-10 font-sans text-sm space-y-2">
        <h3 className="font-bold flex gap-2 items-center">
          <Bus />
          <span>셔틀버스</span>
        </h3>
        <p>강남역 1번 출구에서 탑승 가능</p>
        <p>예식 1시간 전부터 10분 간격으로 운행</p>
      </div>
      <div className="text-start text-brown-700 pt-10 font-sans text-sm space-y-2">
        <h3 className="font-bold flex gap-2 items-center">
          <TrainFront />
          <span>기차</span>
        </h3>
        <div className="space-y-2">
          <p>서울역(KTX)에서 오시는 길</p>
          <p className="ml-4">
          ∙ 서울역 버스환승센터(4번승강장) →{" "}
            <span className="font-bold text-black">421번 버스</span> 탑승 →
            신분당선 강남역 하차 (약 50분 소요)
          </p>
          <p className="ml-4">
          ∙ 서울역 버스환승센터(5번승강장) →{" "}
            <span className="font-bold text-black">402번 버스</span> 탑승 →
            신분당선 강남역 하차(약 50분 소요)
          </p>
        </div>
        <div className="space-y-2 mt-2">
          <p>수서역(SRT)에서 오시는 길</p>
          <p className="ml-4">
          ∙ 수서역 → <span className="font-bold text-black">402번 버스</span>
            탑승 → 신분당선 강남역 하차 (약 40분 소요)
          </p>
          <p className="ml-4">
          ∙ 수서역(3호선 구파발 행) →{" "}
            <span className="font-bold text-black">양재역</span> 환승 → 신분당선
            강남역 하차
          </p>
        </div>
      </div>
      <div className="text-start text-brown-700 pt-10 font-sans text-sm space-y-2">
        <h3 className="font-bold flex gap-2 items-center">
          <TramFront />
          <span>지하철</span>
        </h3>
        <p>강남역 2호선 1번 출구(도보 10분)</p>
        <p>강남역 신분당선 4번 출구(도보 7분)</p>
      </div>
      <div className="text-start text-brown-700 pt-10 font-sans text-sm space-y-2">
        <h3 className="font-bold flex gap-2 items-center">
          <BusFront />
          <span>버스</span>
        </h3>
        <div className="grid grid-cols-[60px_1fr]">
          <span className="text-[#3165a8] font-bold">간선버스</span>
          <p>140, 400, 402, 420, 421, 440, 441, 452, 470, 643, 741</p>
        </div>
        <div className="grid grid-cols-[60px_1fr]">
          <span className="text-[#dd5c32] font-bold">광역버스</span>
          <p>
            1550, 1560B, 1570, 3030, 3100, 3100N, 4401, 4402, 5001-1B, 5001B,
            5002B, 5003B, 9202, 9400, 9800, 9404, 9408, 9409, 9711, M6458
          </p>
        </div>
      </div>
    </>
  );
};
