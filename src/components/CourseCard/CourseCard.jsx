import styles from "./CourseCard.module.css";
import PropTypes from "prop-types";
import { media } from "../../utils/data";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ courseItem }) {
  const navigate = useNavigate();

  const courseTypeUrl = courseItem.courseType.toLowerCase();
  const courseTitleUrl = courseItem.courseTitle.toLowerCase();

  const handleBtn = () => {
    navigate(`/courses/${courseTypeUrl}/${courseTitleUrl}#${courseItem.id}`);
  };

  return (
    <div className={styles.courseCard}>
      <div className={styles.preview}>
        <img
          src={courseItem.courseThumbnail}
          alt="thumbnail"
          className={styles.thumbnail}
        />
      </div>
      <div className={styles.courseInfo}>
        <p className={styles.courseTitle}>{courseItem.courseTitle}</p>
        <div className={styles.courseType}>
          <p className="semiboldFont">{courseItem.courseType}</p>
        </div>
        <div className={styles.rating}>
          <img src={media.blackstar} alt="star" className={styles.blackstar} />
          <p style={{ fontSize: "14px", lineHeight: "20px" }}>
            {courseItem.courseRating} ({courseItem.noOfReviews} review
            {courseItem.noOfReviews !== 1 && "s"})
          </p>
        </div>
        <p className={styles.courseDesc}>{courseItem.courseDesc}</p>
        <div className={styles.tags}>
          {courseItem.courseTags.map((tag) => (
            <div
              key={tag.tagName}
              className={`semiboldFont ${styles.tag}`}
              style={{ backgroundColor: `${tag.tagColor}` }}
            >
              <p>{tag.tagName}</p>
            </div>
          ))}
        </div>
        <div className={styles.btn}>
          <Button type="outlined" height="40" onClick={handleBtn}>
            <p>Purchase course</p>{" "}
            <img src={media.cart} alt="cart" className={styles.cart} />
          </Button>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  courseItem: PropTypes.object.isRequired,
};
