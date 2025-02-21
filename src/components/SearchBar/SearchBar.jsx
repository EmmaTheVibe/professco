import styles from "./SearchBar.module.css";
import { media } from "../../utils/data";
import PropTypes from "prop-types";

export default function SearchBar({ query, setQuery, width = "240px" }) {
  return (
    <div className={styles.searchbar} style={{ width: width }}>
      <img src={media.search} alt="search icon" />
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};
