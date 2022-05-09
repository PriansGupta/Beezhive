import Logo from "../../../Assets/Logo.png";
import "./Header.css"
import { Link } from "react-router-dom"; 

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo"></img>
      </div>
      <div className="navigation">
          <ul>
             <Link className="Home-link" to="/Home">
              <li>About</li>
             </Link>
              <li>Blog</li>
              <li>Rewards</li>
              <li>Register</li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
