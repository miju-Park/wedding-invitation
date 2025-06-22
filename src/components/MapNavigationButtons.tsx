import { useEffect, useState } from "react";

interface MapNavigationButtonsProps {
  lat: number; // 위도
  lng: number; // 경도
  placeName: string; // 장소 이름
}

const MapNavigationButtons = ({ lat, lng, placeName }: MapNavigationButtonsProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const encodedName = encodeURIComponent(placeName);

  useEffect(() => {
    const mobileCheck = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

  const openNaver = () => {
    if (isMobile) {
      window.location.href = `nmap://route/public?dlat=${lat}&dlng=${lng}&dname=${encodedName}`;
    } else {
      // PC는 웹 주소로
      window.open(`https://map.naver.com/p/directions/-/${lng},${lat},${encodedName},PLACE_ID,PLACE_POI/-/car?c=15.00,0,0,0,dh`, '_blank');
    }
  };

  const openKakao = () => {
    if (isMobile) {
      // 앱으로 이동
      window.location.href = `kakaomap://route?ep=${lat},${lng}&by=CAR`;
    } else {
      // PC 웹
      window.open(`https://map.kakao.com/link/to/${encodedName},${lat},${lng}`, '_blank');
    }
  };

  const openTmap = () => {
    if (isMobile) {
      // Tmap 앱 URI
      window.location.href = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${encodedName}`;
    } else {
      // PC는 Tmap 웹 경로가 없으므로 fallback 안내
      alert("Tmap은 모바일에서만 지원됩니다.");
    }
  };

  return (
    <div className="space-x-2 mt-4">
      <button onClick={openNaver} className="px-4 py-2 bg-green-500 text-white rounded-md">네이버 지도</button>
      <button onClick={openKakao} className="px-4 py-2 bg-yellow-400 text-black rounded-md">카카오맵</button>
      <button onClick={openTmap} className="px-4 py-2 bg-blue-600 text-white rounded-md">티맵</button>
    </div>
  );
};

export default MapNavigationButtons;
