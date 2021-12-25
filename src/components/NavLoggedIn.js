// import module
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import assets
import cssModules from "../assets/css/NavLoggedIn.module.css";
import logo from "../assets/img/logo.svg";
import profile from "../assets/img/profile.jpg";

// import pages
import LandingPage from "../pages/LandingPage";
import Profile from "../pages/Profile";
import RaiseFund from "../pages/RaiseFund";
import FormFund from "../pages/FormFund";
import ViewFund from "../pages/ViewFund";
import DetailDonate from "../pages/DetailDonate";

// import component
import DropDown from "./DropDown";

function NavLoggedIn() {
  const [drop, setDrop] = useState({
    isDrop: false,
  });

  const showModal = () => {
    setDrop({ isDrop: true });
  };

  return (
    <Router>
      <div id="nav" className={cssModules.header}>
        <div className={cssModules.navbarTop}>
          <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
            <img src={logo} className={cssModules.hollyLogo} alt="Logo" />
          </Link>
          <Link to="/profile"></Link>
          <Link to="/raisefund"></Link>
          <Link to="/formfund"></Link>
          <Link to="/viewfund"></Link>
          <Link to="/donatedetail"></Link>
          <div className={cssModules.profileWrapper} onClick={showModal}>
            <img
              src={profile}
              alt="Profile Pic"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {drop.isDrop ? (
        <DropDown
          close={() => {
            setDrop({ isDrop: false });
          }}
        />
      ) : (
        <></>
      )}

      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/raisefund" component={RaiseFund} />
        <Route exact path="/formfund" component={FormFund} />
        <Route exact path="/viewfund" component={ViewFund} />
        <Route exact path="/donatedetail" component={DetailDonate} />
      </Switch>
    </Router>
  );
}

export default NavLoggedIn;
