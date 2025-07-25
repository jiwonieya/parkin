import { IoMdClose } from "react-icons/io";
import MenuList from "./MenuList";

//메뉴 외 영역 클릭 시 메뉴 닫힘 기능 추가
const MobileMenu = ({ onClose }) => {
  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <IoMdClose />
        </button>
        <MenuList device={true} />
      </div>
    </div>
  );
};
export default MobileMenu;