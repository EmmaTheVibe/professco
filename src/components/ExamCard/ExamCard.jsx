import styles from "./ExamCard.module.css";
import PropTypes from "prop-types";

export default function ExamCard({ exam }) {
  return (
    <div className={styles.examcard}>
      <img src={exam.logo} alt="logo" />
      <div>
        <p className="boldFont" style={{ marginBottom: "4px" }}>
          {exam.name}
        </p>
        <p className={`lightFont ${styles.desc}`}>{exam.description}</p>
      </div>
    </div>
  );
}

ExamCard.propTypes = {
  exam: PropTypes.object.isRequired,
};
