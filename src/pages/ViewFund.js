// import components
import DetailRaise from "../components/DetailRaise";
import AcceptDonation from "../components/AcceptDonation";
import RejectDonation from "../components/RejectDonation";
import NeedToAccept from "../components/NeedToAccept";

function ViewFund() {
  return (
    <div style={{ paddingBottom: 100 }}>
      <DetailRaise />
      <AcceptDonation />
      <a href="#" style={{ textDecoration: "none" }}>
        <p
          style={{
            textAlign: "center",
            color: "#616161",
          }}
        >
          Load More
        </p>
      </a>
      <NeedToAccept />
      <a href="#" style={{ textDecoration: "none" }}>
        <p
          style={{
            textAlign: "center",
            color: "#616161",
          }}
        >
          Load More
        </p>
      </a>
      <RejectDonation />
      <a href="#" style={{ textDecoration: "none" }}>
        <p
          style={{
            textAlign: "center",
            color: "#616161",
          }}
        >
          Load More
        </p>
      </a>
    </div>
  );
}

export default ViewFund;
