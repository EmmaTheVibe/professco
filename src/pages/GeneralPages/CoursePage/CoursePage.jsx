import Footer from "../../../components/Footer/Footer";
import HomeNav from "../../../components/HomeNav/HomeNav";
import styles from "./CoursePage.module.css";
import { useParams } from "react-router-dom";
import { coursesData, media } from "../../../utils/data";
import Explore from "../../../components/Explore/Explore";
import Rating from "../../../components/Rating/Rating";
import Button from "../../../components/Button/Button";
import CourseCard from "../../../components/CourseCard/CourseCard";

export default function CoursePage() {
  const { type, name } = useParams();
  //   const course = coursesData.find((course) => course.id === parseInt(id));
  const course = coursesData.find(
    (c) =>
      c.courseType.toLowerCase() === type.toLowerCase() &&
      c.courseTitle.toLowerCase() === name.toLowerCase()
  );

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
              <div className={styles.btn}>
                <Button type="filled">Purchase course</Button>
              </div>
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
        <div className="container">
          <h1 className="boldFont">Related courses</h1>
          <p className={`lightFont ${styles.relatedInfo}`}>
            Similar courses taken by others who are preparing for exams like you
          </p>
          <div className={styles.grid}>
            {relatedCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} courseItem={course} />
            ))}
          </div>
        </div>
      </section>
      <Explore />
      <Footer />
    </section>
  );
}
