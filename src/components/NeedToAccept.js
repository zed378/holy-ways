// import module
import { useState } from "react";

// import component
import DonationApproval from "./DonationApproval";

// import assets
import cssModules from "../assets/css/NeedToAccept.module.css";

function NeedToAccept() {
  const [app, setApp] = useState(false);

  const AppModal = () => {
    setApp(true);
  };

  const CloseApp = () => {
    setApp(false);
  };

  return (
    <>
      {app ? <DonationApproval close={CloseApp} /> : <></>}

      <div className={cssModules.accept}>
        <div className={cssModules.acceptList}>
          <h1>Donation need to approve (10)</h1>
          <div className={cssModules.listWrapper}>
            <div className={cssModules.listReject}>
              <div>
                <h3>Zain</h3>
                <p>
                  <strong>Saturday</strong>, 12 April 2021
                </p>
                <p className={cssModules.listMoney}>Total : Rp 45.000</p>
              </div>
              <div className={cssModules.viewBtn}>
                <a href="#approval">
                  <button onClick={AppModal}>View</button>
                </a>
              </div>
            </div>
            <div className={cssModules.listReject}>
              <div>
                <h3>Fadhil</h3>
                <p>
                  <strong>Saturday</strong>, 12 April 2021
                </p>
                <p className={cssModules.listMoney}>Total : Rp 45.000</p>
              </div>
              <div className={cssModules.viewBtn}>
                <a href="#approval">
                  <button onClick={AppModal}>View</button>
                </a>
              </div>
            </div>
            <div className={cssModules.listReject}>
              <div>
                <h3>Radif</h3>
                <p>
                  <strong>Saturday</strong>, 12 April 2021
                </p>
                <p className={cssModules.listMoney}>Total : Rp 45.000</p>
              </div>
              <div className={cssModules.viewBtn}>
                <a href="#approval">
                  <button onClick={AppModal}>View</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NeedToAccept;
