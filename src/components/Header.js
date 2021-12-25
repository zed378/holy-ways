import cssModules from "../assets/css/Header.module.css";

function Header() {
  return (
    <div className={cssModules.header}>
      <div className={cssModules.headBanner}>
        <h1>
          While you are still standing, try to reach out to the people who are
          falling.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a href="#donate">
          <button type="button" className={cssModules.btnDonate}>
            Donate Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Header;
