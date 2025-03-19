import { useEffect, useRef } from "react";
import styles from "./CourseSegment.module.css";
import { examTabs } from "../../utils/data";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import useContexts from "../../utils/useContexts";

export default function CourseSegment({ showAll = false }) {
  const { activeTab, setActiveTab } = useContexts();

  const sliderRef = useRef(null);
  const navRefs = useRef([]);

  // useEffect(() => {
  //   const activeNavItem = navRefs.current[activeTab.id];
  //   if (activeNavItem && sliderRef.current) {
  //     sliderRef.current.style.width = `${activeNavItem.offsetWidth}px`;
  //     sliderRef.current.style.left = `${activeNavItem.offsetLeft}px`;
  //   }
  // }, [activeTab]);

  useEffect(() => {
    const updateSliderPosition = () => {
      const activeNavItem = navRefs.current[activeTab.id];
      if (activeNavItem && sliderRef.current) {
        sliderRef.current.style.width = `${activeNavItem.offsetWidth}px`;
        sliderRef.current.style.left = `${activeNavItem.offsetLeft}px`;
      }
    };

    updateSliderPosition();

    window.addEventListener("resize", updateSliderPosition);

    return () => {
      window.removeEventListener("resize", updateSliderPosition);
    };
  }, [activeTab]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.courseSegment}>
      <div className={styles.nav}>
        <div className="container">
          <div className={styles.courseNav}>
            <ul className={styles.tabs}>
              {examTabs.map((tab, index) => (
                <li
                  key={tab.id}
                  className={` semiboldFont ${styles.tabItem} ${
                    index === activeTab.id ? styles.activeTabItem : ""
                  }`}
                  onClick={() => handleClick(tab)}
                  ref={(el) => (navRefs.current[index] = el)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
            <div className={styles.slider} ref={sliderRef}></div>
          </div>
        </div>
      </div>
      <CourseList showAll={showAll} />
    </div>
  );
}

CourseSegment.propTypes = {
  showAll: PropTypes.bool.isRequired,
};
