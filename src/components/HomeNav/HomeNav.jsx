import { useState } from "react";
import styles from "./HomeNav.module.css";
import { media } from "../../utils/data";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "../Drawer/Drawer";
import { useNavigate, useLocation } from "react-router-dom";

export default function HomeNav() {
  const lg = useMediaQuery("(min-width: 768px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const goToLogin = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  const goToSignup = () => {
    navigate("/signup", { state: { from: location.pathname } });
  };

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
      <Drawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        toggleDrawer={toggleDrawer}
        goToLogin={goToLogin}
        goToSignup={goToSignup}
      />
      <div className="container">
        <div className={styles.homenav}>
          <NavLink to="/">
            <img src={media.logo} alt="logo" className={styles.logo} />
          </NavLink>
          <SearchBar />
          <img src={media.menu} alt="menu" onClick={toggleDrawer} />
        </div>
      </div>
    </nav>
  );
}
