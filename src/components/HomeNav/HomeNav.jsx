import { useState } from "react";
import styles from "./HomeNav.module.css";
import { media } from "../../utils/data";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "../Drawer/Drawer";
import useContexts from "../../utils/useContexts";

export default function HomeNav() {
  const lg = useMediaQuery("(min-width: 1000px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  const { goToSignup, goToLogin } = useContexts();

  const toggleDrawer = (event) => {
    if (
      lg ||
      (event &&
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift"))
    ) {
      return;
    }

    setOpenDrawer(!openDrawer);
  };
  return (
    <nav>
      {!lg && (
        <Drawer
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
          toggleDrawer={toggleDrawer}
        />
      )}
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.homenav}>
          {!lg && (
            <NavLink to="/">
              <img src={media.logo} alt="logo" className={styles.logo} />
            </NavLink>
          )}
          <div className={styles.frame}>
            <SearchBar />
          </div>
          {lg && (
            <NavLink to="/">
              <img src={media.logoPc} alt="logo" className={styles.logoPc} />
            </NavLink>
          )}
          {lg ? (
            <div className={styles.box}>
              <div className={styles.txtBox}>
                <p>Why Professco</p>
                <p>Learn</p>
              </div>
              <button className="filled" onClick={goToSignup}>
                <p>Sign up</p>
              </button>
              <button className="outlined" onClick={goToLogin}>
                <p>Login</p>
              </button>
            </div>
          ) : (
            <img src={media.menu} alt="menu" onClick={toggleDrawer} />
          )}
        </div>
      </div>
    </nav>
  );
}
