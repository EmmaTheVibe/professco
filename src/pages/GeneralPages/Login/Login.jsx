import BackButton from "../../../components/BackButton/BackButton";
import BottomBanner from "../../../components/BottomBanner/BottomBanner";
import LoginForm from "../../../components/LoginForm.jsx/LoginForm";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <section className={styles.login}>
      <section className={styles.main}>
        <div className="container">
          <BackButton />
          <div className={styles.frame}>
            <div>
              <p style={{ color: "#4B5563" }}>Create account</p>
              <h1 className="boldFont">Hey, welcome back to professco</h1>
              <p className={`lightFont ${styles.desc}`}>
                We’ve got courses for every professional exam
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </section>
      <BottomBanner />
    </section>
  );
}
