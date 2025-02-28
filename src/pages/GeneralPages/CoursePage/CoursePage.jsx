import Footer from "../../../components/Footer/Footer";
import HomeNav from "../../../components/HomeNav/HomeNav";
import styles from "./CoursePage.module.css";
import { useParams } from "react-router-dom";
import { coursesData, media } from "../../../utils/data";
import Explore from "../../../components/Explore/Explore";
import Rating from "../../../components/Rating/Rating";
import CourseCard from "../../../components/CourseCard/CourseCard";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";
import { useMediaQuery } from "@mui/material";

export default function CoursePage() {
  const { type, name } = useParams();

  const lg = useMediaQuery("(min-width: 600px)");
  const lg2 = useMediaQuery("(min-width: 1400px)");
  //   const course = coursesData.find((course) => course.id === parseInt(id));
  const course = coursesData.find(
    (c) =>
      c.courseType.toLowerCase() === type.toLowerCase() &&
      c.courseTitle.toLowerCase() === name.toLowerCase()
  );

  if (!course) {
    return <NotFoundPage />;
    // Alternatively, you could use a redirect:
    // return <Navigate to="/not-found" />;
  }

  const relatedCourses = coursesData.filter((c) =>
    c.courseType.includes(course.courseType)
  );

  return (
    <section className={styles.coursepage}>
      <HomeNav />
      <section className={styles.seg}>
        <div className="container">
          <div className={styles.wrapper}>
            <div>
              <div className={styles.line}>
                <p>Courses</p>
                <img
                  src={media.arrowright}
                  alt="arrow"
                  style={{
                    margin: "0 8px",
                    transform: "translateY(-0.7px)",
                    // border: "1px solid red",
                    // width: "13.5px",
                    // height: "13.5px",
                  }}
                />
                <p>{course.courseType}</p>
                <img
                  src={media.arrowright}
                  alt="arrow"
                  style={{
                    margin: "0 8px",
                    transform: "translateY(-1.3px)",
                    // border: "1px solid red",
                    // width: "13.5px",
                    // height: "13.5px",
                  }}
                />
                <p className="semiboldFont">Fundamentals</p>
              </div>
              <h1 className={`boldFont ${styles.title}`}>
                {course.courseTitle}
              </h1>
              <p className={styles.desc}>
                Learn from vetted and certified chartered professionals with
                proven track records
              </p>
              <div className={styles.pricePack}>
                <div className={styles.price}>
                  <p className="boldFont">N12,000</p>
                </div>

                <Rating course={course} />
              </div>
              <button className={`filled ${styles.btn}`}>
                <p>Purchase course</p>
              </button>
            </div>
            <img
              src={media.coursebanner}
              alt="banner"
              className={styles.banner}
            />
          </div>
        </div>
      </section>
      <section className={styles.segB}></section>
      <section className={styles.segC}>
        <div className={`container ${styles.segCWrapper}`}>
          <div className={styles.top}>
            <h1 className="boldFont">Related courses</h1>
            <p className={`lightFont ${styles.relatedInfo}`}>
              Similar courses taken by others who are preparing for exams like
              you
            </p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.grid}>
              {relatedCourses
                .slice(0, `${lg2 ? 3 : lg ? 2 : 3}`)
                .map((course) => (
                  <CourseCard key={course.id} courseItem={course} />
                ))}
            </div>
          </div>
        </div>
      </section>
      <Explore />
      <Footer />
    </section>
  );
}
