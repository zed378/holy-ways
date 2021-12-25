// import module
import { useState } from "react";

// import component
import DonateForm from "../components/DonateForm";

// import assets
import cssModules from "../assets/css/DetailRaise.module.css";
import pink from "../assets/img/pink.jpg";

function DetailRaise() {
  const [donate, setDonate] = useState(false);

  const makeDonate = () => {
    setDonate(true);
  };

  return (
    <>
      {donate ? (
        <DonateForm
          close={() => {
            setDonate(false);
          }}
        />
      ) : (
        <></>
      )}
      <div className={cssModules.detailContainer}>
        <div className={cssModules.imageRaise}>
          <div className={cssModules.imgRaise}>
            <div className={cssModules.img}>
              <img
                src={pink}
                alt="Thumbnail Pic"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className={cssModules.raiseDescription}>
              <h1>The Strength of a People. Power of Community</h1>
              <div>
                <div className={cssModules.totalDonation}>
                  <p>Rp 25.000.000</p>
                  <p>
                    <small>gathered from</small>
                  </p>
                  <p>Rp 200.000.000</p>
                </div>
                <div className={cssModules.progressbar}>
                  <div style={{ width: "40%" }}></div>
                </div>
                <div className={cssModules.totalDonation}>
                  <p>200 Donation</p>
                  <p>150 More Day</p>
                </div>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="#nav">
                <button onClick={makeDonate} style={{ cursor: "pointer" }}>
                  Donate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRaise;
