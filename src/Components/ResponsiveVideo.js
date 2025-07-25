import { useEffect, useState } from "react";

const ResponsiveVideo = () => {
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const [show, setShow] = useState(false);

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 768) return "mobile";
    if (width < 1440) return "tablet";
    return "pc";
  }

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //PC 영상 효과주기
  useEffect(() => {
    if (deviceType === "pc") {
      const timer = setTimeout(() => {
        setShow(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [deviceType]);

  // 모바일만 다른 영상/태블릿,PC는 같은 영상
  const selectedVideo =
    deviceType === "mobile" ? "PINbennerMobile.mp4" : "PINbennerPC.mp4";

  return (
    <div className="video-wrap">
      <video
        key={deviceType}
        className={show ? "show" : ""}
        src={`${process.env.PUBLIC_URL}/video/${selectedVideo}`}
        autoPlay
        muted
        loop
      />
      {deviceType === "pc" && (
        <div className={`video-mask ${show ? "open" : ""}`} />
      )}
    </div>
  );
};

export default ResponsiveVideo;
