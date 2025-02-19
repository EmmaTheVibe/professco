import { media } from "../../utils/data";
import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [activeId, setActiveId] = useState(0);

  const array = [...Array(13)];

  const nextCard = () => {
    setActiveId((curr) => {
      if (curr === array.length - 1) return 0;
      return curr + 1;
    });
  };
  useEffect(() => {
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {array.map((_, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              activeId === index ? styles.activeCard : ""
            }`}
            style={{ translate: `${-100 * activeId}%` }}
          >
            <img
              src={media.carouselphoto}
              alt="lecturer"
              className={styles.lecturer}
            />
            <div className={styles.cardInfo}>
              <p className="boldFont">Okoro James</p>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#6B7280",
                    }}
                  >
                    ACCA certified expert (20 yrs)
                  </p>
                  <div style={{ display: "flex" }}>
                    <img
                      src={media.blackstar}
                      alt="star"
                      style={{ marginRight: "2.23px" }}
                    />
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#6B7280",
                      }}
                    >
                      4.8 (150 courses)
                    </p>
                  </div>
                </div>
                <img src={media.cardmedal} alt="medal" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          width: "296px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {array.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              activeId === index ? styles.activeDot : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
