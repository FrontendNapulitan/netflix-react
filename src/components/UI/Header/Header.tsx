import logoNetflix from "../../../assets/netflixlogo.svg";
import './Header.css';
const Header = () => {
  return (
    <div className="wrapperHeader">
      <div className="header">
        <img src={logoNetflix} alt="logo_netflix" />
      </div>
    </div>
  );
};
export default Header;
