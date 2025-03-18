import { media } from "../../utils/data";
import useContexts from "../../utils/useContexts";
import styles from "./ExamCard.module.css";
import PropTypes from "prop-types";

export default function ExamCard({ exam, selectable = false }) {
  const { addExamType, examTypeList } = useContexts();

  return (
    <div
      className={`${styles.examcard} ${
        selectable && examTypeList.includes(exam.name) ? styles.selected : ""
      } ${selectable ? styles.selectable : ""}`}
      onClick={() => addExamType(exam.name, selectable)}
    >
      <div className={styles.logobox}>
        <img src={exam.logo} alt="logo" />
      </div>
      <div className={styles.info}>
        <p
          className={`boldFont ${styles.title}`}
          style={{ marginBottom: "4px" }}
        >
          {exam.name}
        </p>
        <p className={`lightFont ${styles.desc}`}>{exam.description}</p>
      </div>
      {selectable && examTypeList.includes(exam.name) ? (
        <div className={styles.circle}>
          <img src={media.examCardTick} alt="tick" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

ExamCard.propTypes = {
  exam: PropTypes.object.isRequired,
  addExamType: PropTypes.func.isRequired,
  selectable: PropTypes.bool.isRequired,
};
