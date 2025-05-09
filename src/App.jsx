// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/GeneralPages/HomePage/HomePage";
import Courses from "./pages/GeneralPages/Courses/Courses";
import { ContextProvider } from "./utils/Contexts.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
// import useContexts from "./utils/useContexts.js";
import CoursePage from "./pages/GeneralPages/CoursePage/CoursePage.jsx";
import SignUp from "./pages/GeneralPages/SignUp/SignUp.jsx";
import Login from "./pages/GeneralPages/Login/Login.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import ContactPage from "./pages/GeneralPages/ContactPage/ContactPage.jsx";
import TermsPage from "./pages/GeneralPages/TermsPage/TermsPage.jsx";
import GetStarted from "./pages/GeneralPages/GetStarted/GetStarted.jsx";
import About from "./pages/GeneralPages/About/About.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <ContextProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="courses" element={<Courses />} />
            <Route path="/courses/:type/:id/:name" element={<CoursePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
