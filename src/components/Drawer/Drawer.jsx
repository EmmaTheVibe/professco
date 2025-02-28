import styles from "./Drawer.module.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import { media } from "../../utils/data";
import useContexts from "../../utils/useContexts";

export default function Drawer({ openDrawer, setOpenDrawer }) {
  const { goToLogin, goToSignup } = useContexts();
  return (
    <div className={styles.drawer}>
      <SwipeableDrawer
        anchor={"top"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <div className={styles.frame} onKeyDown={() => setOpenDrawer(false)}>
          <div className={styles.top}>
            <div className={`container ${styles.topWrapper}`}>
              <img src={media.logo} alt="logo" />
              <img
                src={media.closer}
                alt="closer"
                onClick={() => setOpenDrawer(false)}
              />
            </div>
          </div>
          <div className={`container ${styles.wrapper}`}>
            <div className={styles.searchbox}>
              <SearchBar width="100%" />
              <p
                className="semiboldFont"
                style={{
                  fontSize: "18px",
                  lineHeight: "29.7px",
                }}
              >
                Why Professco
              </p>
              <p
                className="semiboldFont"
                style={{
                  fontSize: "18px",
                  lineHeight: "29.7px",
                }}
              >
                Learn
              </p>
            </div>
            <div className={styles.btnPack}>
              <button className="filled" onClick={goToSignup}>
                <p>Sign up</p>
              </button>

              <button className="outlined" onClick={goToLogin}>
                <p>Login</p>
              </button>
            </div>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
}

Drawer.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
  goToLogin: PropTypes.func.isRequired,
  goToSignup: PropTypes.func.isRequired,
};
