import { formOptions, media } from "../../utils/data";
import Button from "../Button/Button";
import styles from "./FooterForm.module.css";
import { useState } from "react";

export default function FooterForm() {
  const [examType, setExamType] = useState("What exam are you preparing for?");
  const [email, setEmail] = useState("");
  return (
    <form className={styles.form}>
      <div className={styles.selectbox}>
        <img src={media.formarrow} alt="arrow" className={styles.arrow} />
        <select
          name=""
          id=""
          value={examType}
          onChange={(e) => setExamType(e.target.value)}
        >
          {formOptions.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className={styles.btn}>
          <Button type="filled">
            <p>Get materials</p>
          </Button>
        </div>
      </div>
    </form>
  );
}
