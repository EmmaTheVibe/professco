import { useContext } from "react";
import { ContextCreator } from "./Contexts";

function useContexts() {
  const context = useContext(ContextCreator);
  if (!context) {
    throw new Error("useContexts must be used within a ContextProvider");
  }
  return context;
}

export default useContexts;
