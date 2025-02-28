import { useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { coursesData } from "../../utils/data";
import styles from "./CourseList.module.css";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import useContexts from "../../utils/useContexts";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

export default function CourseList({ showAll }) {
  const { activeTab } = useContexts();
  const [query, setQuery] = useState("");

  const md = useMediaQuery("(min-width: 600px)");
  const lg = useMediaQuery("(min-width: 1000px)");
  const lg2 = useMediaQuery("(min-width: 1400px)");

  let filteredCourses = coursesData.filter((course) =>
    course.courseType.includes(activeTab.name)
  );
  if (!showAll) {
    filteredCourses = filteredCourses.slice(0, lg2 ? 3 : lg ? 2 : md ? 2 : 3);
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
      <div
        className={`${styles.top} ${
          searchedCourses.length === 0 ? styles.border : ""
        }`}
        style={{ borderBottom: showAll && "none" }}
      >
        <div className={styles.wrapper}>
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
                <button className="filled">
                  <p>View all</p>
                </button>
              </div>
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <div className={styles.divider}></div> */}
      <div
        className={`${styles.bottom} ${
          searchedCourses.length === 0 ? "" : styles.borderB
        }`}
      >
        <div
          className={styles.gridWrapper}
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
