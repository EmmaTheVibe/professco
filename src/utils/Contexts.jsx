import { createContext, useState } from "react";
import { examTabs } from "./data";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const ContextCreator = createContext();

function ContextProvider({ children }) {
  const [activeTab, setActiveTab] = useState(examTabs[0]);
  const [examTypeList, setExamTypeList] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  function addExamType(name, selectable) {
    if (!selectable) return;
    setExamTypeList((prevList) =>
      prevList.includes(name)
        ? prevList.filter((item) => item !== name)
        : [...prevList, name]
    );
  }

  // useEffect(() => {
  //   console.log(examTypeList);
  // }, [examTypeList]);

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
        examTypeList: examTypeList,
        setExamTypeList: setExamTypeList,
        addExamType: addExamType,
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
