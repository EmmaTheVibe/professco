import styles from "./HomeNav.module.css";
import { media } from "../../utils/data";
import SearchBar from "../SearchBar/SearchBar";
export default function HomeNav() {
  return (
    <nav>
      <div className="container">
        <div className={styles.homenav}>
          <img src={media.logo} alt="logo" className={styles.logo} />
          <SearchBar />
          <img src={media.menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
}
