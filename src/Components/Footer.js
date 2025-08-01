import { BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-page">
            <div className="footer-wrap">
                <div className="img-company-group">
                    <img src={`${process.env.PUBLIC_URL}/image/logo/Logo-08.png`} alt="푸터로고이미지" />
                    <div className="company">
                        <p>(주)P'IN</p>
                        <p>대표자 박서윤</p>
                    </div>
                </div>
                <div className="info">
                    <p>주소 수원시 팔달구 매산로</p>
                    <p>사업자 번호 123-45-67890</p>
                    <p>고객센터 1234-5678</p>
                </div>

                {/* 새로 만든 하단 영역 */}
                <div className="footer-bottom">
                    <div className="icon-wrap">
                        <BsYoutube className="youtube-icon" />
                        <FaInstagram className="insta-icon" />
                        <FaFacebook className="facebook-icon" />
                    </div>
                    <nav className="note">
                        <ul>
                            <li>공지사항</li>
                            <li>이용약관</li>
                            <li>개인정보 처리방침</li>
                            <li>위치정보 이용약관</li>
                        </ul>
                    </nav>
                    <h1>© 2025 P’IN. All rights reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;