import { TbParkingCircleFilled } from "react-icons/tb";
import { FaCarOn } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { BsPersonBadge } from "react-icons/bs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

const Followbanner = () => {
    const [scrollY, setScrollY] = useState(100); // 초기 위치 100px

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY + 100); // 스크롤 위치 + 100px 유지
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // TOP 버튼 클릭 시 맨 위로 부드럽게 스크롤
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div
            className="follow-banner"
            style={{ top: `${scrollY}px` }}
        >
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
            <div
                className="banner-item yellow top-btn"
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
            >
                <MdOutlineKeyboardArrowUp className="icon" />
                <span className="text">TOP</span>
            </div>
        </div>
    );
};

//헤헤

export default Followbanner;
