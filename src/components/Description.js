import cssModules from "../assets/css/Description.module.css";

function Description() {
  return (
    <div className={cssModules.description}>
      <h1>
        Your donation is very helpful for people affected by forest fires in
        Kalimantan.
      </h1>
      <div className={cssModules.textWrapper}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
}

export default Description;
