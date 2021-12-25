import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import cssModules from "../assets/css/Login.module.css";

function Login(props) {
  const [state, dispatch] = useContext(UserContext);
  const { close, move } = props;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      email,
      password,
    };

    dispatch({
      type: "LOGIN",
      user: data,
    });
  };

  return (
    <div className={cssModules.loginContainer}>
      <div className={cssModules.loginModal}>
        <div className={cssModules.loginCard}>
          <button
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
          <h1>Login</h1>
          <form onSubmit={handleOnSubmit}>
            <div className={cssModules.inputGroup}>
              <input type="email" id="email" name="email" placeholder="Email" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <p onClick={move}>
            Don't have an account ? Click <strong>Here</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
