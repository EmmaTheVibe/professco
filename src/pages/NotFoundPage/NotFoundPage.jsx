import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className={styles.notfound}>
      <div className="container">
        <h1 className="boldFont">
          <span style={{ color: "#e65539" }}>404</span> <br /> Page not found.
        </h1>
      </div>
    </section>
  );
}
