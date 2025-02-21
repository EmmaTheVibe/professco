import { useState } from "react";
import Button from "../Button/Button";
import CourseCard from "../CourseCard/CourseCard";
import { coursesData } from "../../utils/data";
import styles from "./CourseList.module.css";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import useContexts from "../../utils/useContexts";
import { NavLink } from "react-router-dom";

export default function CourseList({ showAll }) {
  const { activeTab } = useContexts();
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
      <div className={styles.top} style={{ borderBottom: showAll && "none" }}>
        <div className={`container ${styles.wrapper}`}>
          <p>Courses</p>
          <h1 className={styles.heading}>
            {activeTab.name} courses from the very best
          </h1>
          <p className={`lightFont ${styles.moreInfo}`}>
            Learn from vetted and certified chartered professionals with proven
            track records
          </p>
          {!showAll ? (
            <NavLink to="/courses">
              <div className={styles.btn}>
                <Button type="filled">
                  <p>View all</p>
                </Button>
              </div>
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <div
          className={`container ${styles.gridWrapper}`}
          style={{ paddingTop: showAll && "0" }}
        >
          {showAll ? (
            <div className={styles.filterBox}>
              <div style={{ marginBottom: "12px" }}>
                <SearchBar query={query} setQuery={setQuery} width="288px" />
              </div>

              {query.length > 0 ? (
                <p style={{ marginBottom: "12px" }}>
                  Found {searchedCourses.length} results
                </p>
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
  showAll: PropTypes.bool.isRequired,
};
