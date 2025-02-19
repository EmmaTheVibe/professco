import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({
  children,
  type,
  onClick = () => {},
  width,
  height = 48,
}) {
  return (
    <div
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
      style={{ width: `${width}`, height: `${height}px` }}
    >
      {children}
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  width: PropTypes.number,
  height: PropTypes.number,
};
