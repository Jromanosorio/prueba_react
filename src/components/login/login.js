import React, { useRef } from "react";
import Table from "../table/table";
import styles from "./login.module.scss";

export default function Login() {
  const username = useRef();
  const password = useRef();

  const getUsername = localStorage.getItem("CryptoUsername");
  const getPassword = localStorage.getItem("CryptoPassword");

  const handleSubmit = () => {
    localStorage.setItem("CryptoUsername", username);
    localStorage.setItem("CryptoPassword", password);
  };

  return (
    <div>
      {getUsername && getPassword ? (
        <div>
            <Table user={getUsername} />
        </div>
      ) : (
        <div className={styles.login}>
          <label> Sign In </label>
          <form onSubmit={handleSubmit}>
            <input
              className={styles.field}
              placeholder="Username"
              type={"text"}
              required
              ref={username}
            />
            <input
              className={styles.field}
              placeholder="Password"
              type={"password"}
              required
              ref={password}
            />
            <button className={styles.btnLogin}> Ingresar </button>
          </form>
        </div>
      )}
    </div>
  );
}
