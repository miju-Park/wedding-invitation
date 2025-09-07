import { Share2 } from "lucide-react";
import { useEffect } from "react";

export const Share = ()=>{
  useEffect(()=>{
    useEffect(() => {
      const script = document.createElement('script')
      script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.8/kakao.min.js"
      script.async = true
  
      document.head.appendChild(script)
  
      script.onload = () => {
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(import.meta.env.PUBLIC_KAKAO_JS_SDK_KEY)
        }
      }
    }, [])
  },[])
  return     <div className="flex items-center gap-2 justify-center mx-auto">
  <div
    className="cursor-pointer"
    id="kakaotalk-share-btn"
  >
    <img
      className="size-8"
      src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
      alt="카카오톡 공유 보내기 버튼"
    />
  </div>
  <Share2 />
</div>
}