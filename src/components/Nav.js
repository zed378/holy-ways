// import component
import LandingPage from "../pages/LandingPage";

// import assets
import cssModules from "../assets/css/Nav.module.css";
import logo from "../assets/img/logo.svg";

function Nav(props) {
  const { logBtn, regBtn } = props;

  return (
    <>
      <div id="navbar" className={cssModules.navbarTop}>
        <a href="/">
          <img src={logo} className={cssModules.hollyLogo} alt="Logo" />
        </a>
        <div className={cssModules.btnGroup}>
          <button className={cssModules.btnLogin} onClick={logBtn}>
            Login
          </button>
          <button className={cssModules.btnRegister} onClick={regBtn}>
            Register
          </button>
        </div>
      </div>
      <LandingPage />
    </>
  );
}

export default Nav;
