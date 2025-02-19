import { useState } from "react";
import Button from "../Button/Button";
import CourseCard from "../CourseCard/CourseCard";
import { coursesData } from "../../utils/data";
import styles from "./CourseList.module.css";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";

export default function CourseList({ activeTab, showAll = true }) {
  const [query, setQuery] = useState("");
  let filteredCourses = coursesData.filter((course) =>
    course.courseType.includes(activeTab.name)
  );
  if (!showAll) {
    filteredCourses = filteredCourses.slice(0, 3);
  }

  const searchedCourses =
    query.length > 0
      ? filteredCourses.filter((course) =>
          `${course.courseTitle} ${course.courseDesc} ${course.courseType}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      : filteredCourses;

  return (
    <div className={styles.courseList}>
      <div className={styles.top}>
        <div className={`container ${styles.wrapper}`}>
          <p>Courses</p>
          <h1 className={styles.heading}>
            {activeTab.name} courses from the very best
          </h1>
          <p className={`lightFont ${styles.moreInfo}`}>
            Learn from vetted and certified chartered professionals with proven
            track records
          </p>
          <Button type="filled" width="201px">
            <p>View all</p>
          </Button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.gridWrapper}`}>
          {showAll ? (
            <div>
              <SearchBar query={query} setQuery={setQuery} width="288" />
              {query.length > 0 ? (
                <p>Found {searchedCourses.length} results</p>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          <div className={styles.courseGrid}>
            {searchedCourses.map((course) => (
              <CourseCard courseItem={course} key={course.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CourseList.propTypes = {
  activeTab: PropTypes.object.isRequired,
  showAll: PropTypes.bool.isRequired,
};
