// import assets
import cssModules from "../assets/css/DonateForm.module.css";
import bill from "../assets/img/bill.svg";

function DonateForm(props) {
  const { close } = props;

  return (
    <div className={cssModules.formWrapper}>
      <div className={cssModules.formContainer}>
        <div className={cssModules.donateForm}>
          <button className={cssModules.btnClose} onClick={close}>
            X
          </button>
          <form action="">
            <div className={cssModules.grouping}>
              <input type="number" name="money" placeholder="Input Donation" />
              <div className={cssModules.groupElem}>
                <label htmlFor="thumbnail">
                  Attach Payment
                  <img src={bill} alt="" />
                </label>
                <input type="file" id="thumbnail" name="thumbnail" hidden />
                <p>*transfers can be made to holyways accounts</p>
              </div>
            </div>
            <button onClick={close}>Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonateForm;
