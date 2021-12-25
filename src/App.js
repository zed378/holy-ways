// import context
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

// import component
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import NavLoggedIn from "./components/NavLoggedIn";

function App() {
  const [state, dispatch] = useContext(UserContext);

  return (
    <>
      {state.logModal ? (
        <Login
          close={() => {
            dispatch({
              type: "closeLogModal",
            });
          }}
          move={() => {
            dispatch({
              type: "showRegModal",
            });
          }}
        />
      ) : (
        <></>
      )}

      {state.regModal ? (
        <Register
          close={() => {
            dispatch({
              type: "closeRegModal",
            });
          }}
          move={() => {
            dispatch({
              type: "showLogModal",
            });
          }}
        />
      ) : (
        <></>
      )}

      {state.isLogin ? (
        <NavLoggedIn />
      ) : (
        <Nav
          logBtn={() => {
            dispatch({ type: "showLogModal" });
          }}
          regBtn={() => {
            dispatch({ type: "showRegModal" });
          }}
        />
      )}
    </>
  );
}

export default App;
