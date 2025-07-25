import { TbParkingCircleFilled } from "react-icons/tb";
import { FaCarOn } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { BsPersonBadge } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Followbanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    // TOP 버튼 클릭 시 부드럽게 스크롤
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <>
            {/* X 버튼 */}
            <button className="floating-close-btn" onClick={() => setIsVisible(false)}>
                <IoClose />
            </button>

            <div className="follow-banner">
                <div className="banner-item orange">
                    <TbParkingCircleFilled className="icon" />
                    <span className="text">빈자리 확인</span>
                </div>
                <div className="banner-item orange">
                    <FaCarOn className="icon" />
                    <span className="text">주차 예약</span>
                </div>
                <div className="banner-item yellow">
                    <IoTicketSharp className="icon" />
                    <span className="text">일일권 / 정기권</span>
                </div>
                <div className="banner-item yellow">
                    <BsPersonBadge className="icon" />
                    <span className="text">멤버십 가입</span>
                </div>
                <div className="banner-item yellow top-btn" onClick={scrollToTop}>
                    <MdOutlineKeyboardArrowUp className="icon" />
                    <span className="text">TOP</span>
                </div>
            </div>
        </>
    );
};

//헤헤

export default Followbanner;
