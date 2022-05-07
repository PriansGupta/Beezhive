import Logo from "../../../Assets/Logo.png";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="navigation">
          <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Rewards</li>
              <li>Register</li>
          </ul>
          
      </div>
    </div>
  );
};

export default Header;
