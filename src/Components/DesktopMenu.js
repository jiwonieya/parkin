import MenuList from "./MenuList";

const DesktopMenu = () => {
  return (
    <nav className="desktop-menu">
      <MenuList device={false}/>
    </nav>
  );
};

export default DesktopMenu;