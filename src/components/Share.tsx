import { Link } from "lucide-react";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    Kakao: any;
  }
}

export const Share = () => {
  const handleClickKakaoShare = useCallback(() => {
    const { Kakao } = window;
    Kakao.Share.sendCustom({
      templateId: 124100,
    });
  }, []);

  const handleCopy = async () => {
    try {
      const copyText = window.location.href;
      await navigator.clipboard.writeText(copyText);
      toast.success("클립보드에 복사되었습니다!");
    } catch (err) {
      toast.error("복사에 실패했습니다.");
      console.error(err);
    }
  };
  return (
    <div className="flex items-center gap-4 justify-center mx-auto">
      <div
        className="cursor-pointer"
        id="kakaotalk-share-btn"
        onClick={handleClickKakaoShare}
      >
        <img
          className="size-8"
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </div>
      <Link onClick={handleCopy} className="cursor-pointer size-8" />
    </div>
  );
};
