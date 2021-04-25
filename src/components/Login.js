import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export function Login({ handleLogin }) {

  const [user, updateUser] = useState({
    username: "",
    email: "",
  });

  const handleChange = (key, value) => {
    updateUser({ ...user, [key]: value });
  };
  const context = useContext(UserContext).currentUser;

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="post-title" className="form-label">
          Username
        </label>
        <input
          id="post-title"
          onChange={(e) => handleChange("username", e.target.value)}
          value={user.username}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-body" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="post-body"
          onChange={(e) => handleChange("email", e.target.value)}
          value={user.email}
        />
      </div>

      <button className="btn btn-primary float-right" onClick={() => handleLogin(user.username, user.email)}>Login</button>
      <p class="form-check-label fs-3 mt-3 mb-3 text-danger text-center">
        {context.errorMsg}
      </p>

    </div >
  );
}
