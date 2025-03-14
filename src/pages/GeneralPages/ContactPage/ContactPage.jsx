import styles from "./ContactPage.module.css";
import HomeNav from "../../../components/HomeNav/HomeNav";
import ContactForm from "../../../components/ContactForm/ContactForm";
import BottomBanner from "../../../components/BottomBanner/BottomBanner";
import { media } from "../../../utils/data";

export default function ContactPage() {
  return (
    <section className={styles.contactPage}>
      <HomeNav />
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.formbox}>
          <div className={styles.hero}>
            <p className={`semiboldFont ${styles.txt}`}>Contact us</p>
            <h1>Get in touch</h1>
            <p className={styles.desc}>
              We&apos;d love to hear from you. Please fill out this form.
            </p>
          </div>
          <ContactForm />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.moreInfo}>
          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img src={media.chat} alt="chat" />
            </div>
            <h2 className="boldFont">Chat to support</h2>
            <p>We&apos;re here to help.</p>
            <p className={`semiboldFont ${styles.tag}`}>
              support@professco.com
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img src={media.visit} alt="visit" />
            </div>
            <h2 className="boldFont">Visit us</h2>
            <p>Visit our office HQ.</p>
            <p className={`semiboldFont ${styles.tag}`}>
              100 Smith Street Collingwood, Lagos, Nigeria
            </p>
          </div>

          <div className={styles.box}>
            <div className={styles.iconBox}>
              <img src={media.call} alt="call" />
            </div>
            <h2 className="boldFont">Call us</h2>
            <p>Mon-Fri from 8am to 5pm.</p>
            <p className={`semiboldFont ${styles.tag}`}>+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
      <BottomBanner />
    </section>
  );
}
