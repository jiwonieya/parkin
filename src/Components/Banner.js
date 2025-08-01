import { useState, useEffect } from 'react';
import Coupons from "./Coupons";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();
  const [deviceMode, setDeviceMode] = useState("mobile");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTextSlide, setCurrentTextSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(window.innerWidth);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);

  const slides = [
    `${process.env.PUBLIC_URL}/image/images/main.png`,
    `${process.env.PUBLIC_URL}/image/images/save.png`,
    `${process.env.PUBLIC_URL}/image/images/membership.png`,
    `${process.env.PUBLIC_URL}/image/images/CCTV.png`,
    `${process.env.PUBLIC_URL}/image/images/cupon.png`,
    `${process.env.PUBLIC_URL}/image/images/navi.png`
];

  // 슬라이드 복제 - 무한 루프 효과를 위해
  const extendedSlides = [...slides, ...slides.slice(0, 3)];

  const textItems = [
    "주차장 찾기",
    "주차예약",
    "정기권/멤버십",
    "할인/쿠폰",
    "길안내",
    "CCTV",
    "결제정보",
    "개인 주차장 공유"
  ];

  // 간격 상수 정의 - 태블릿에서만 사용
  const GAP_SIZE = 15; // CSS의 gap과 동일한 값

  // 이미지 슬라이드 영역
  useEffect(() => {
    const updateDeviceMode = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setDeviceMode("desktop");
      } else if (width >= 768) {
        setDeviceMode("tablet");
        // 태블릿에서는 3개씩 보이므로 간격도 고려
        setSlideWidth((width - GAP_SIZE * 2) / 3);
      } else {
        setDeviceMode("mobile");
        // 모바일에서는 간격 없이 전체 너비
        setSlideWidth(width);
      }
    };

    updateDeviceMode();
    window.addEventListener('resize', updateDeviceMode);
    return () => window.removeEventListener('resize', updateDeviceMode);
  }, []);

  // 5초마다 자동으로 슬라이드 변경하는 기능 
  useEffect(() => {
    if (isTransitioning) return;

    const autoSlideInterval = setInterval(() => {
      handleSlideChange(1);
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [deviceMode, slides.length, isTransitioning]);

  const handleSlideChange = (dir) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const step = deviceMode === "tablet" ? 3 : 1;
    const maxIndex = deviceMode === "tablet" ? slides.length - 3 : slides.length - 1;

    if (dir === 1) {
      // 오른쪽으로 이동
      if (currentSlide >= maxIndex) {
        // 마지막 슬라이드에서 첫 슬라이드로 이동
        setCurrentSlide(maxIndex + step);
        // 첫 슬라이드로 리셋
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(0);
        }, 500);
      } else {
        setCurrentSlide(currentSlide + step);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    } else {
      // 왼쪽으로 이동
      if (currentSlide <= 0) {
        setCurrentSlide(-step);

        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentSlide(maxIndex);
        }, 500);
      } else {
        setCurrentSlide(currentSlide - step);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }
  };

  const changeTextSlide = (dir) => {
    if (dir === 1) {
      setCurrentTextSlide((prev) => (prev + 1) % 2);
    } else {
      setCurrentTextSlide((prev) => (prev - 1 + 2) % 2);
    }
  };

  const getVisibleTextItems = () => {
    const startIndex = currentTextSlide * 4;
    return textItems.slice(startIndex, startIndex + 4);
  };

  const handleTextClick = (item) => {
    if (item === "할인/쿠폰") {
      setIsCouponOpen(true);
    } else if (item === "주차장 찾기") {
      navigate("/itempage");
    } else if (item === "주차예약") {
      navigate("/itempagetwo");
    } else if (item === "정기권/멤버십") {
      navigate("/itempagethree");
    } else if (item === "CCTV") {
      navigate("/itempagefour");
    } else if (item === "개인 주차장 공유") {
      navigate("/itempagefive");
    }
  };

  // 간격을 고려한 translateX 계산 - 태블릿에서만 간격 적용
  const translateX = deviceMode === "tablet"
    ? currentSlide * (slideWidth + GAP_SIZE)
    : currentSlide * slideWidth;

  return (
    <>
      {/* 텍스트 영역 */}
      <div className="text-container">
        {deviceMode === "mobile" ? (
          <div className="text-grid-mobile">
            {getVisibleTextItems().map((item, index) => (
              <div
                key={`${currentTextSlide}-${index}`}
                className="text-item-mobile"
                onClick={() => {
                  handleTextClick(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-flex-tablet">
            {textItems.map((item, index) => (
              <div
                key={index}
                className="text-item-tablet"
                onClick={() => {
                  handleTextClick(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {deviceMode === "mobile" && (
          <>
            <button
              onClick={() => changeTextSlide(-1)}
              className="text-nav-button prev"
            >
              ‹
            </button>
            <button
              onClick={() => changeTextSlide(1)}
              className="text-nav-button next"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* 이미지 영역 */}
      {deviceMode === "desktop" ? (
        <div className="grid-desktop">
          {slides.map((slide, index) => (
            <div className="grid-item" key={index}>
              <img src={slide} alt={`slide-${index}`} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="slider-container"
          style={{
            maxWidth: `${
              slideWidth * (deviceMode === "tablet" ? 3 : 1) +
              (deviceMode === "tablet" ? GAP_SIZE * 2 : 0)
            }px`,
          }}
        >
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${translateX}px)`,
              width:
                deviceMode === "tablet"
                  ? `${extendedSlides.length * (slideWidth + GAP_SIZE)}px`
                  : `${extendedSlides.length * slideWidth}px`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                className="slide"
                key={index}
                style={{ width: `${slideWidth}px` }}
              >
                <img src={slide} alt={`slide-${index}`} />
              </div>
            ))}
          </div>
          {/* 화살표: 데스크탑에서는 숨김 */}
          {deviceMode !== "desktop" && (
            <>
              <button
                className="nav-arrow prev"
                onClick={() => handleSlideChange(-1)}
              >
                ‹
              </button>
              <button
                className="nav-arrow next"
                onClick={() => handleSlideChange(1)}
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
      {isCouponOpen && <Coupons onClose={() => setIsCouponOpen(false)} />}
    </>
  );
};

export default Banner;