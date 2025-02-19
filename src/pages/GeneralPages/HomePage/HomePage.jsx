import Button from "../../../components/Button/Button";
import Carousel from "../../../components/Carousel/Carousel";
import CourseSegment from "../../../components/CourseSegment/CourseSegment";
import HomeNav from "../../../components/HomeNav/HomeNav";
import Notifs from "../../../components/Notifs/Notifs";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import { guideData, media } from "../../../utils/data";
import styles from "./HomePage.module.css";
import Faqs from "../../../components/Faqs/Faqs";
import GuideCard from "../../../components/GuideCard/GuideCard";
import Footer from "../../../components/Footer/Footer";

export default function HomePage() {
  return (
    <section style={{ paddingTop: "142px" }}>
      <HomeNav />

      <div className="container">
        <div className={styles.hero}>
          <h1 className={` boldFont ${styles.title}`}>
            Pass your professional exams with ease the first time
          </h1>
          <p className={`lightFont ${styles.desc}`}>
            We offer you/provide a variety of professional courses and
            certification from top education providers (from around the world).
            Learn with Professco today!
          </p>
          <Button type="filled" width="270px">
            <p>Explore our courses</p>
          </Button>
        </div>
      </div>

      <CourseSegment />

      <section className={styles.seg}>
        <div className="container">
          <div className={styles.frame}>
            <h1 className="boldFont">
              A professional learning platform <span>you can trust</span>
            </h1>
            <div className={styles.content}>
              <h3 className="boldFont">
                Verified lecturers with proven track record of success
              </h3>
              <p className={`lightFont ${styles.txt}`}>
                Meet qualified professionals and instructors with expertise in
                various fields, ready to provide you top-grade (or first -
                class) tutoring/training.
              </p>
              <div className={styles.wrapper}>
                <img
                  src={media.lecturer1}
                  alt="lecturer"
                  className={styles.lecturer1}
                />
                <img src={media.award} alt="award" className={styles.award} />
                <div className={styles.notifBox}>
                  <Notifs dark={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.segB}>
        <div className="container">
          <div className={styles.frameB}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src={media.medalbg}
                alt="medalbg"
                className={styles.medalbg}
              />
              <img
                src={media.pagesthick}
                alt="pages"
                className={styles.pagesthick}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1 className="boldFont">Become certified</h1>
              <p
                style={{ textAlign: "center" }}
                className={`lightFont ${styles.txt}`}
              >
                Improve your resume, expand your abilities, start a new career
                path by becoming a certified professional. Join us to start.
              </p>
              <div className={styles.btnPack}>
                <Button type="filled">
                  <p>Get started</p>
                </Button>
                <Button type="bare" width="242px">
                  <p>Explore courses</p>
                  <img
                    src={media.plus}
                    alt="plus"
                    style={{
                      marginLeft: "10px",
                      transform: "translateY(1px)",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.segC}>
        <div className={`container ${styles.segCWrapper}`}>
          <div className={styles.segCFrame}>
            <img src={media.avatargrp} alt="avatar group" />
            <div>
              <h3 className="boldFont">5000+</h3>
              <p>Professionals prepare with Professco</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.segD}>
        <div className={`container ${styles.segDWrapper}`}>
          <div className={styles.segDFrame}>
            <h1 className="boldFont">What professionals like you are saying</h1>
            <p className={`lightFont ${styles.txt}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className={styles.btnPackB}>
              <Button type="filled" width="134px">
                <p>Get started</p>
              </Button>
              <Button type="bare" width="180px">
                <p>Explore courses</p>
                <img
                  src={media.plus}
                  alt="plus"
                  style={{
                    marginLeft: "10px",
                    transform: "translateY(1px)",
                  }}
                />
              </Button>
            </div>
            <div className={styles.reviewGrid}>
              {[...Array(4)].map((_, index) => (
                <ReviewCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.segE}>
        <img
          src={media.greencurve}
          alt="vector"
          className={styles.greencurve}
        />
        <img
          src={media.yellowarch}
          alt="vector"
          className={styles.yellowarch}
        />
        <div className={`container ${styles.segEWrapper}`}>
          <div className={styles.segEFrame}>
            <h1 className="boldFont">Lecture on Professco</h1>
            <p className={`lightFont ${styles.txt}`}>
              Join (thousands of) qualified professionals/instructors from all
              over the world to teach (thousands/millions) of students on
              Professco.
            </p>
            <div className={styles.btnPackB}>
              <Button type="filled" width="134px">
                <p>Get started</p>
              </Button>
              <Button type="bare" width="180px">
                <p>Learn more</p>
                <img
                  src={media.plus}
                  alt="plus"
                  style={{
                    marginLeft: "10px",
                    transform: "translateY(1px)",
                  }}
                />
              </Button>
            </div>
            <Carousel />
          </div>
        </div>
      </section>

      <section className={styles.segF}>
        <div className={`container ${styles.segFWrapper}`}>
          <h1 className="boldFont" style={{ marginBottom: "22px" }}>
            FAQs
          </h1>
          <p className={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Faqs />
          <h1 className="boldFont" style={{ marginBottom: "16px" }}>
            Still have a question?
          </h1>
          <p className={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button width="147px" type="outlined">
            <p>Contact us</p>
          </Button>
          <div className={styles.guides}>
            <div style={{ marginBottom: "16px" }}>
              <p style={{ marginBottom: "16px" }}>Learn</p>
              <h2 className="boldFont" style={{ marginBottom: "16px" }}>
                Guides and Resources to help you
              </h2>
              <p className="lightFont">
                Learn from vetted and certified chartered professionals with
                proven track records
              </p>
            </div>
            <Button type="outlined" width="141px">
              <p>View all</p>
            </Button>
            <div className={styles.guides}>
              {guideData.map((guide, index) => (
                <GuideCard key={index} guide={guide} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
