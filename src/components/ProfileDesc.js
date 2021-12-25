import cssModules from "../assets/css/ProfileDesc.module.css";
import profile from "../assets/img/profile.jpg";

function ProfileDesc() {
  return (
    <div className={cssModules.profileDesc}>
      <div className={cssModules.profile}>
        <h1>My Profile</h1>
        <div className={cssModules.profileInfo}>
          <div className={cssModules.profileWrapper}>
            <img
              src={profile}
              alt="Profile Pic"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={cssModules.info}>
            <h2>Full Name</h2>
            <p>Andi</p>
            <h2>Email</h2>
            <p>andigans@gmail.com</p>
            <h2>Phone</h2>
            <p>08389683312</p>
          </div>
        </div>
      </div>
      <div className={cssModules.history}>
        <h1>History Donation</h1>
        <div className={cssModules.historyDonation}>
          <h3>The Strength of a People. Power of Community</h3>
          <p>
            <strong>Saturday</strong>, 12 April 2021
          </p>
          <div className={cssModules.total}>
            <p className={cssModules.donation}>Total: Rp 45.000</p>
            <p
              className={cssModules.status}
              style={{ color: "#00FF47", background: "#ddfcec" }}
            >
              Finished
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDesc;
