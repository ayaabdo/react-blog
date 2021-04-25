import { Redirect } from "@reach/router";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export function PrivateRoute({ children }) {
  const context = useContext(UserContext).currentUser;

  return context.isAuthen ? (
        children
  ) : (
    <Redirect to="/login" noThrow />
  );
}