import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // Import your Navbar component
import Quizzes from "./components/Quizzes";
import InterviewQuestions from "./components/InterviewQuestions";
import VideoPage from "./components/VideoPage";
import SearchResultsPage from "./components/SearchResultsPage";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const LocationBasedNavbar = () => {
    const location = useLocation();

    // Show the Navbar only on `/home`, `/quizzes`, and `/interview-questions` routes
    const showNavbar = ["/home", "/quizzes", "/interview-questions"].includes(location.pathname);

    return showNavbar && <Navbar />;
  };

  return (
    <Router>
      <LocationBasedNavbar />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/quizzes"
          element={isAuthenticated ? <Quizzes /> : <Navigate to="/login" />}
        />
        <Route
          path="/interview-questions"
          element={isAuthenticated ? <InterviewQuestions /> : <Navigate to="/login" />}
        />
        <Route
          path="/video/:id"
          element={isAuthenticated ? <VideoPage /> : <Navigate to="/login" />}
        />
         <Route path="/search" element={<SearchResultsPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
