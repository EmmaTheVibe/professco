import styles from "./LoginForm.module.css";
import { useState } from "react";
import { media } from "../../utils/data";
import Button from "../Button/Button";

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <form className={styles.form}>
      <div style={{ marginBottom: "26px" }}>
        <p className={styles.label}>
          Email <span>*</span>
        </p>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input type="text" id="email" />
          <img src={media.formIconMail} alt="icon" className={styles.icon} />
        </div>
      </div>
      <div style={{ marginBottom: "26px" }}>
        <p className={styles.label}>
          Password <span>*</span>
        </p>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input type={passwordVisible ? "text" : "password"} id="password" />
          <img
            src={media.formIconVisibilityOff}
            alt="icon"
            onClick={toggleVisibility}
            className={styles.icon}
          />
        </div>
      </div>
      <Button type="filled">
        <p>Create Professco Account</p>
      </Button>
      <button className={styles.google}>
        <p className="semiboldFont">Use Google Instead</p>
        <img src={media.googleLogo} alt="logo" className={styles.logo} />
      </button>
      <p className={styles.txt}>
        Don’t have an account, create one <span>here</span>
      </p>
    </form>
  );
}
