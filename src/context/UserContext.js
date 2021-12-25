import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initState = {
  isLogin: false,
  user: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "REGISTER":
      return {
        user: payload,
      };
    case "LOGIN":
      return {
        isLogin: true,
        user: payload,
      };

    case "LOGOUT":
      return {
        isLogin: false,
        user: {},
      };

    case "showLogModal":
      return { logModal: true };

    case "closeLogModal":
      return { logModal: false };

    case "showRegModal":
      return { regModal: true };

    case "closeRegModal":
      return { regModal: false };

    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
