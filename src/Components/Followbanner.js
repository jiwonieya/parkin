
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbParkingCircleFilled } from "react-icons/tb";
import { FaCarOn } from "react-icons/fa6";
import { IoTicketSharp, IoClose } from "react-icons/io5";
import { BsPersonBadge } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Coupons from "./Coupons";

const Followbanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [showCoupons, setShowCoupons] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
 const openCouponPopup = () => {
    setShowCoupons(true);
  };


  const closeCouponPopup = () => {
    setShowCoupons(false);
  };

    if (!isVisible) return null;
    return (
        <>
         {showCoupons && <Coupons onClose={closeCouponPopup} />} {/* 팝업 조건부 렌더링 */}
            {/* X 버튼 */}
            <button className="floating-close-btn" onClick={() => setIsVisible(false)}>
                <IoClose />
            </button>
            <div className="follow-banner">
                <button className="banner-item orange">
                    <TbParkingCircleFilled className="icon" />
                    <span className="text">빈자리 확인</span>
                </button>

                <button className="banner-item orange">
                    <FaCarOn className="icon" />
                    <span className="text">주차 예약</span>
                </button>

                <button
                    className="banner-item yellow"
                    onClick={openCouponPopup}

                >
                    <IoTicketSharp className="icon" />
                    <span className="text">할인 쿠폰</span>
                </button>
                <button className="banner-item yellow">
                    <BsPersonBadge className="icon" />
                    <span className="text">멤버십 가입</span>
                </button>
                <button className="banner-item yellow top-btn" onClick={scrollToTop}>
                    <MdOutlineKeyboardArrowUp className="icon" />
                    <span className="text">TOP</span>
                </button>
            

            </div>
        </>
    );
};

export default Followbanner;