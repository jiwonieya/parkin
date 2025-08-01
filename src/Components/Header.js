import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import ResponsiveVideo from "./ResponsiveVideo";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMainPage =
    location.pathname === "/" || location.pathname === "/MainPage";
  
  return (
    <header className="header">
      <div className="menu-wrap">
        <div className="logo" onClick={()=>{navigate("/");}}>
          <img
            src={`${process.env.PUBLIC_URL}/image/logo/Logo-03.png`}
            alt="P'IN PARK IN 로고"
          />
        </div>
        {isMobile ? (
          <>
            {!menuOpen && (
              <button className="hamburger" onClick={() => setMenuOpen(true)}>
                <MdMenu />
              </button>
            )}
            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
          </>
        ) : (
          <DesktopMenu />
        )}
      </div>
      {isMainPage && <ResponsiveVideo />}
    </header>
  );
};

export default Header;
