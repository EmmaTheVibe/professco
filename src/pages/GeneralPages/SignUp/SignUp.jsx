import BackButton from "../../../components/BackButton/BackButton";
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
      <section className={styles.footer}>
        <div className={`container ${styles.wrapper}`}>
          <p className="boldFont">Become a lecturer on Professco</p>
          <p className={styles.txt}>
            Are you a certified ICAN, CIMA, CITN, CIS, CFA, ACCA professional
          </p>
          <button>
            <p>Teach on Professco</p>
          </button>
        </div>
      </section>
    </section>
  );
}
