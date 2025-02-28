import BackButton from "../../../components/BackButton/BackButton";
import BottomBanner from "../../../components/BottomBanner/BottomBanner";
import SignUpForm from "../../../components/SignUpForm/SignUpForm";
import { media } from "../../../utils/data";
import styles from "./SignUp.module.css";
import { useMediaQuery } from "@mui/material";

export default function SignUp() {
  const lg = useMediaQuery("(min-width: 1200px)");

  return (
    <section className={styles.signup}>
      <section className={styles.main}>
        <div className="container">
          <BackButton />
          <div className={styles.frame}>
            <div className={styles.box}>
              <p style={{ color: "#4B5563" }}>Create account</p>
              <h1 className={`boldFont ${styles.title}`}>
                Awesome, let’s help you prepare for your exam
              </h1>
              <p className={`lightFont ${styles.desc}`}>
                We’ve got courses for every professional exam
              </p>
            </div>
            <SignUpForm />
            {lg && (
              <img src={media.graduation} alt="grad" className={styles.grad} />
            )}
          </div>
        </div>
      </section>
      <div className={styles.boxB}>
        <BottomBanner />
      </div>
    </section>
  );
}
