// import module
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

//import assets
import cssModules from "../assets/css/DropDown.module.css";
import triangle from "../assets/img/triangle.svg";
import user from "../assets/img/user.svg";
import raise from "../assets/img/raise.svg";
import logout from "../assets/img/logout.svg";
import line from "../assets/img/line.svg";

function DropDown(props) {
  const [state, dispatch] = useContext(UserContext);

  const { close } = props;
  const history = useHistory();

  const profile = () => {
    history.push("/profile");
  };

  const fund = () => {
    history.push("/raisefund");
  };

  const logOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div id="dropModal" className={cssModules.dropContainer}>
      <img src={triangle} alt="triangle" className={cssModules.triangle} />
      <button
        onClick={close}
        style={{
          display: "block",
          background: "none",
          border: "none",
          position: "absolute",
          right: 27,
          top: 15,
          color: "#313131",
          fontSize: "1.25rem",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        X
      </button>
      <div className={cssModules.menu}>
        <div onClick={profile}>
          <img src={user} alt="menu" />
          <h1>Profile</h1>
        </div>
        <div onClick={fund}>
          <img src={raise} alt="menu" />
          <h1>Raise Fund</h1>
        </div>
        <img src={line} alt="divider" />
        <div onClick={logOut}>
          <img src={logout} alt="menu" />
          <h1>Log Out</h1>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
