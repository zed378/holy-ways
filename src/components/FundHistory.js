import { useHistory } from "react-router-dom";

// import assets
import cssModules from "../assets/css/FundHistory.module.css";
import pink from "../assets/img/pink.jpg";

function FundHistory() {
  const history = useHistory();

  const makeRaise = () => {
    history.push("/formfund");
  };

  const viewFund = () => {
    history.push("/viewfund");
  };

  return (
    <div className={cssModules.history}>
      <div className={cssModules.title}>
        <h1>My Raise Fund</h1>
        <button onClick={makeRaise}>Make Raise Fund</button>
      </div>
      <div className={cssModules.fundHistory}>
        <div className={cssModules.cardDonate}>
          <img src={pink} alt="Strong Child" className={cssModules.image} />
          <div className={cssModules.cardDesc}>
            <h1>The Strength of a People. Power of Community.</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={cssModules.progressbar}>
              <div style={{ width: "40%" }}></div>
            </div>
            <div className={cssModules.totalDonation}>
              <p>Rp 25.000.000</p>
              <button onClick={viewFund} className={cssModules.cardBtn}>
                View Fund
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundHistory;
