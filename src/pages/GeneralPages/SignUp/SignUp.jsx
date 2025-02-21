import BackButton from "../../../components/BackButton/BackButton";
import BottomBanner from "../../../components/BottomBanner/BottomBanner";
import SignUpForm from "../../../components/SignUpForm/SignUpForm";
import styles from "./SignUp.module.css";

export default function SignUp() {
  return (
    <section className={styles.signup}>
      <section className={styles.main}>
        <div className="container">
          <BackButton />
          <div className={styles.frame}>
            <div>
              <p style={{ color: "#4B5563" }}>Create account</p>
              <h1 className="boldFont">
                Awesome, let’s help you prepare for your exam
              </h1>
              <p className="lightFont">
                We’ve got courses for every professional exam
              </p>
            </div>
            <SignUpForm />
          </div>
        </div>
      </section>
      <BottomBanner />
    </section>
  );
}
