import { createContext, useState } from "react";
import { courseTabs } from "./data";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const ContextCreator = createContext();

function ContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState(courseTabs[0]);

  const navigate = useNavigate();
  const location = useLocation();

  const goToLogin = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  const goToSignup = () => {
    navigate("/signup", { state: { from: location.pathname } });
  };

  return (
    <ContextCreator.Provider
      value={{
        activeTab: activeTab,
        setActiveTab: setActiveTab,
        goToLogin: goToLogin,
        goToSignup: goToSignup,
      }}
    >
      {children}
    </ContextCreator.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, ContextCreator };
