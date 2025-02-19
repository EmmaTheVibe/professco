import CourseSegment from "../../../components/CourseSegment/CourseSegment";
import Explore from "../../../components/Explore/Explore";
import Footer from "../../../components/Footer/Footer";
import HomeNav from "../../../components/HomeNav/HomeNav";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <section className={styles.courses}>
      <HomeNav />
      <section className={styles.seg}>
        <CourseSegment showAll={true} />
      </section>
      <Explore />
      <Footer />
    </section>
  );
}
