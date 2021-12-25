// import assets
import cssModules from "../assets/css/DonationApproval.module.css";
import transfer from "../assets/img/transfer.jpg";

function DonationApproval(props) {
  const { close } = props;
  const Approve = () => {
    console.log("approved");
  };

  const Reject = () => {
    console.log("Rejected");
  };

  const value = "45.000.000";

  return (
    <div id="approval" className={cssModules.approveContainer}>
      <div className={cssModules.appForm}>
        <button className={cssModules.close} onClick={close}>
          X
        </button>
        <h1>Zain</h1>
        <form className={cssModules.formApp}>
          <input type="text" value={value} />
          <div className={cssModules.transferImg}>
            <img src={transfer} alt="Transfer" />
          </div>
          <div>
            <label htmlFor="reason">
              <p>
                Reject Reason<sup>*</sup>
              </p>
            </label>
            <input type="text" id="reason" />
            <div style={{ color: "#313131" }}>
              <small>* fill if rejected</small>
            </div>
          </div>
          <div className={cssModules.button}>
            <button className={cssModules.appBtn} onClick={(Approve, close)}>
              Approve
            </button>
            <button className={cssModules.rejectBtn} onClick={(Reject, close)}>
              Reject
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationApproval;
