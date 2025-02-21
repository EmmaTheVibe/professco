import { media } from "../../utils/data";
import styles from "./Rating.module.css";
import PropTypes from "prop-types";

export default function Rating({ course }) {
  const { courseRating, noOfReviews } = course;
  function roundToOneDecimal(courseRating) {
    return Math.round(courseRating * 10) / 10;
  }
  const roundedUpRating = roundToOneDecimal(courseRating);
  const fullStars = Math.floor(roundedUpRating);
  const hasHalfStar = courseRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.rating}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "8px",
          width: "96px",
        }}
      >
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, index) => (
          <img key={`full-${index}`} src={media.fullStar} alt="Full Star" />
        ))}

        {/* Render half star if needed */}
        {hasHalfStar && <img src={media.halfStar} alt="Half Star" />}

        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <img key={`empty-${index}`} src={media.emptyStar} alt="Empty Star" />
        ))}
      </div>
      <p>
        ({roundedUpRating} stars) • {noOfReviews} review
        {noOfReviews !== 1 && "s"}
      </p>
    </div>
  );
}

Rating.propTypes = {
  course: PropTypes.object.isRequired,
};
