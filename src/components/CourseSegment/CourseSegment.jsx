import { useState, useEffect, useRef } from "react";
import styles from "./CourseSegment.module.css";
import { courseTabs } from "../../utils/data";
import CourseList from "../CourseList/CourseList";

export default function CourseSegment() {
  const [activeTab, setactiveTab] = useState(courseTabs[0]);

  const sliderRef = useRef(null);
  const navRefs = useRef([]);

  useEffect(() => {
    const activeNavItem = navRefs.current[activeTab.id];
    if (activeNavItem && sliderRef.current) {
      sliderRef.current.style.width = `${activeNavItem.offsetWidth}px`;
      sliderRef.current.style.left = `${activeNavItem.offsetLeft}px`;
    }
  }, [activeTab]);

  const handleClick = (tab) => {
    setactiveTab(tab);
  };

  return (
    <div className={styles.courseSegment}>
      <div className={styles.nav}>
        <div className="container">
          <div className={styles.courseNav}>
            <ul className={styles.tabs}>
              {courseTabs.map((tab, index) => (
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
      <CourseList activeTab={activeTab} showAll={false} />
    </div>
  );
}
