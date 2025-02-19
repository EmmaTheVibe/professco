import { courseTabs } from "../../utils/data";
import ExamCard from "../ExamCard/ExamCard";
import styles from "./Explore.module.css";

export default function Explore() {
  return (
    <section className={styles.explore}>
      <div className="container">
        <p style={{ color: "#4B5563" }}>Available on Professco</p>
        <h1 className="boldFont">Explore Professco</h1>
        <p>
          Learn from verified/certified Professionals in various fields with
          high performance, accomplishments/reputation and proven track records.
        </p>
        <div className={styles.examGrid}>
          {courseTabs.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
      <section className={styles.seg}>
        <div className="container">
          <h2 className="boldFont">
            Learn from vetted and certified chartered professionals with proven
            track records
          </h2>
          <div className={styles.segGrid}>
            {courseTabs.map((exam) => (
              <div key={exam.id}>
                <p className={`boldFont ${styles.heading}`}>{exam.name}</p>
                {exam.segments.map((segment, index) => (
                  <p key={index} className={styles.topic}>
                    {segment}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
