// import assets
import cssModules from "../assets/css/LandingPage.module.css";
import flood from "../assets/img/flood.jpg";
import forest from "../assets/img/forest.jpg";

//Import component
import Header from "../components/Header";
import Description from "../components/Description";
import DonateBanner from "../components/DonateBanner";

function LandingPage() {
  return (
    <>
      <Header />
      <div className={cssModules.flood}>
        <img src={flood} alt="flood disaster" />
      </div>
      <Description />
      <div className={cssModules.forest}>
        <img src={forest} alt="forest" />
      </div>
      <DonateBanner />
    </>
  );
}

export default LandingPage;
