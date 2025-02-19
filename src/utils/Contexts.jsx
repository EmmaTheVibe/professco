import { createContext, useState } from "react";
import { courseTabs } from "./data";
import PropTypes from "prop-types";

const ContextCreator = createContext();

function ContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState(courseTabs[0]);
  return (
    <ContextCreator.Provider
      value={{ activeTab: activeTab, setActiveTab: setActiveTab }}
    >
      {children}
    </ContextCreator.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, ContextCreator };
