// import assets
import cssModules from "../assets/css/RejectDonation.module.css";

function RejectDonation() {
  return (
    <div className={cssModules.accept}>
      <div className={cssModules.acceptList}>
        <h1>Donation has not been approved (10)</h1>
        <div className={cssModules.listWrapper}>
          <div className={cssModules.listReject}>
            <div>
              <h3>Zain</h3>
              <p>
                <strong>Saturday</strong>, 12 April 2021
              </p>
              <p className={cssModules.listMoney}>Total : Rp 45.000</p>
              <p className={cssModules.alertReject}>
                <strong>Reason:</strong> fake receipt
              </p>
            </div>
            <div className={cssModules.viewBtn}>
              <button>Rejected</button>
            </div>
          </div>
          <div className={cssModules.listReject}>
            <div>
              <h3>Fadhil</h3>
              <p>
                <strong>Saturday</strong>, 12 April 2021
              </p>
              <p className={cssModules.listMoney}>Total : Rp 45.000</p>
              <p className={cssModules.alertReject}>
                <strong>Reason:</strong> fake transfer
              </p>
            </div>
            <div className={cssModules.viewBtn}>
              <button>Rejected</button>
            </div>
          </div>
          <div className={cssModules.listReject}>
            <div>
              <h3>Radif</h3>
              <p>
                <strong>Saturday</strong>, 12 April 2021
              </p>
              <p className={cssModules.listMoney}>Total : Rp 45.000</p>
              <p className={cssModules.alertReject}>
                <strong>Reason:</strong> fake receipt
              </p>
            </div>
            <div className={cssModules.viewBtn}>
              <button>Rejected</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RejectDonation;
