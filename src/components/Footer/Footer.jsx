import { courseTabs, media, footerOptions } from "../../utils/data";
import FooterForm from "../FooterForm/FooterForm";
import Notifs from "../Notifs/Notifs";
import styles from "./Footer.module.css";

export default function Footer() {
  const learnOptions = footerOptions.filter((option) =>
    option.section.includes("learn")
  );
  const professcoOptions = footerOptions.filter((option) =>
    option.section.includes("professco")
  );

  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={`${styles.paperbox}`}>
          <img src={media.pagesthin} alt="pages" className={styles.pages} />
          <div className={`${styles.notifbox}`}>
            <Notifs dark={true} />
          </div>
        </div>
        <div className={styles.formbox}>
          <h1 className="boldFont">Free materials & resources</h1>
          <p style={{ margin: "24px 0 16px" }}>
            Get free ebooks, PDFs, past questions and other resourecs to help
            you get started as you prepare for your exams
          </p>
          <FooterForm />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className="container">
        <div>
          <h1>Logo</h1>
          <p style={{ margin: "16px 0 32px" }} className={styles.txt}>
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat... Read More
          </p>
          <div className={styles.row}>
            <img src={media.tel} alt="icon" />
            <p>310-437-2766</p>
          </div>
          <div className={styles.row}>
            <img src={media.mail} alt="icon" />
            <p>unreal@outlook.com</p>
          </div>
          <div className={styles.row}>
            <img src={media.location} alt="icon" />
            <p>706 Campfire Ave. Meriden, CT 06450</p>
          </div>
        </div>
        <div className={styles.table}>
          <div className={styles.column}>
            <p className={`boldFont ${styles.tabHead}`}>Exams</p>
            {courseTabs.map((tab) => (
              <p key={tab.id} className={styles.tab}>
                {tab.name}
              </p>
            ))}
          </div>
          <div className={styles.column}>
            <p className={`boldFont ${styles.tabHead}`}>Learn</p>
            {learnOptions.map((tab) => (
              <p key={tab.id} className={styles.tab}>
                {tab.name}
              </p>
            ))}
          </div>
          <div className={styles.column}>
            <p className={`boldFont ${styles.tabHead}`}>Professco</p>
            {professcoOptions.map((tab) => (
              <p key={tab.id} className={styles.tab}>
                {tab.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
