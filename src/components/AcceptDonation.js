import cssModules from "../assets/css/AcceptDonation.module.css";

function AcceptDonation() {
  return (
    <div className={cssModules.accept}>
      <div className={cssModules.acceptList}>
        <h1>List Donation (200)</h1>
        <div className={cssModules.listWrapper}>
          <div className={cssModules.list}>
            <h3>Andi</h3>
            <p>
              <strong>Saturday</strong>, 12 April 2021
            </p>
            <p className={cssModules.listMoney}>Total : Rp 45.000</p>
          </div>
          <div className={cssModules.list}>
            <h3>Jamal</h3>
            <p>
              <strong>Saturday</strong>, 12 April 2021
            </p>
            <p className={cssModules.listMoney}>Total : Rp 45.000</p>
          </div>
          <div className={cssModules.list}>
            <h3>Udin</h3>
            <p>
              <strong>Saturday</strong>, 12 April 2021
            </p>
            <p className={cssModules.listMoney}>Total : Rp 45.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcceptDonation;
