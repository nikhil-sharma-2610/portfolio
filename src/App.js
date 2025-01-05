import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/leftbar.js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import SkillSet from "./components/SkillSet.js";
import MyJourney from "./components/MyJourney.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skillset" element={<SkillSet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
