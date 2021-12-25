// import module
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// import assets
import cssModules from "../assets/css/DonateBanner.module.css";
import pink from "../assets/img/pink.jpg";
import baby from "../assets/img/baby.jpg";
import ragged from "../assets/img/ragged.jpg";

function DonateBanner() {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);

  const donateDetail = () => {
    history.push("/donatedetail");
  };

  return (
    <div id="donate" className={cssModules.donateBanner}>
      <h1>Donate Now</h1>
      <div className={cssModules.cardWrap}>
        <div className={cssModules.cardDonate}>
          <img src={pink} alt="Strong Child" className={cssModules.image} />
          <div className={cssModules.cardDesc}>
            <h1>The Strength of a People. Power of Community</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={cssModules.progressbar}>
              <div style={{ width: "40%" }}></div>
            </div>
            <div className={cssModules.totalDonation}>
              <p>Rp 25.000.000</p>
              {state.isLogin ? (
                <button className={cssModules.cardBtn} onClick={donateDetail}>
                  Donate
                </button>
              ) : (
                <a href="#navbar">
                  <button
                    className={cssModules.cardBtn}
                    onClick={() => dispatch({ type: "showLogModal" })}
                  >
                    Donate
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={cssModules.cardDonate}>
          <img src={baby} alt="Starv Baby" className={cssModules.image} />
          <div className={cssModules.cardDesc}>
            <h1>Empowering Communities Ending Poverty</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={cssModules.progressbar}>
              <div style={{ width: "50%" }}></div>
            </div>
            <div className={cssModules.totalDonation}>
              <p>Rp 50.000.000</p>
              {state.isLogin ? (
                <button className={cssModules.cardBtn} onClick={donateDetail}>
                  Donate
                </button>
              ) : (
                <a href="#navbar">
                  <button
                    className={cssModules.cardBtn}
                    onClick={() => dispatch({ type: "showLogModal" })}
                  >
                    Donate
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={cssModules.cardDonate}>
          <img
            src={ragged}
            alt="Natural Disaster"
            className={cssModules.image}
          />
          <div className={cssModules.cardDesc}>
            <h1>Please help our brothers in flores</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={cssModules.progressbar}>
              <div style={{ width: "75%" }}></div>
            </div>
            <div className={cssModules.totalDonation}>
              <p>Rp 100.000.000</p>
              {state.isLogin ? (
                <button className={cssModules.cardBtn} onClick={donateDetail}>
                  Donate
                </button>
              ) : (
                <a href="#navbar">
                  <button
                    className={cssModules.cardBtn}
                    onClick={() => dispatch({ type: "showLogModal" })}
                  >
                    Donate
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonateBanner;
