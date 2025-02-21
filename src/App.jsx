// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/GeneralPages/HomePage/HomePage";
import Courses from "./pages/GeneralPages/Courses/Courses";
import { ContextProvider } from "./utils/Contexts.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
// import useContexts from "./utils/useContexts.js";
import CoursePage from "./pages/GeneralPages/CoursePage/CoursePage.jsx";

function App() {
  return (
    <main>
      <ContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="/courses/:type/:name" element={<CoursePage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </main>
  );
}

export default App;
