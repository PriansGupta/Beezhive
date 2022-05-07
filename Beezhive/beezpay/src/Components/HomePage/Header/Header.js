import Logo from "../../../Assets/Logo.png";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="navigation"></div>
    </div>
  );
};

export default Header;
