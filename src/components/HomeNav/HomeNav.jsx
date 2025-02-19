import styles from "./HomeNav.module.css";
import { media } from "../../utils/data";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
export default function HomeNav() {
  return (
    <nav>
      <div className="container">
        <div className={styles.homenav}>
          <NavLink to="/">
            <img src={media.logo} alt="logo" className={styles.logo} />
          </NavLink>
          <SearchBar />
          <img src={media.menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
}
