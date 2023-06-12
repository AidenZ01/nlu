import "./Footer.css";
import logo from "../imgs/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <span>Copyright &copy; {year}. All rights reserved.</span>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
