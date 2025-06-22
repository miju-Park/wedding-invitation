import { useEffect, useRef } from "react";

interface NaverMapProps {
  latitude: number;
  longitude: number;
  clientId: string;
}

export default function NaverMap({ latitude, longitude, clientId }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.naver && !document.getElementById("naver-map-script")) {
      const script = document.createElement("script");
      script.id = "naver-map-script";
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}&language=ko`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else if (window.naver) {
      initMap();
    }

    function initMap() {
      if (!mapRef.current || !window.naver) return;

      const location = new window.naver.maps.LatLng(latitude, longitude);

      const map = new window.naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 16,
      });

      new window.naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, [latitude, longitude, clientId]);

  return <div ref={mapRef} className="w-full h-[400px] rounded-lg shadow-md" />;
}
