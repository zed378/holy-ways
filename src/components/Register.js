import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import cssModules from "../assets/css/Register.module.css";

function Register(props) {
  const [state, dispatch] = useContext(UserContext);

  const { close, move } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;

    const data = {
      email,
      password,
      name,
    };

    dispatch({
      type: "REGISTER",
      user: data,
    });
  };

  return (
    <div className={cssModules.regContainer}>
      <div className={cssModules.regModal} id="modalReg">
        <div className={cssModules.loginCard}>
          <button
            id="btnClose"
            onClick={close}
            style={{
              display: "block",
              background: "none",
              border: "none",
              position: "absolute",
              right: 10,
              top: 10,
              color: "#313131",
              fontSize: "1rem",
              fontWeight: "900",
              cursor: "pointer",
            }}
          >
            X
          </button>
          <h1>Register</h1>
          <form action="" onSubmit={handleOnSubmit}>
            <div className={cssModules.inputGroup}>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <input type="text" name="name" placeholder="Full Name" />
            </div>
            <button type="submit" onClick={close}>
              Register
            </button>
          </form>
          <p onClick={move}>
            Don't have an account ? Click <strong>Here</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
