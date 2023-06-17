import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import "./css/styles.scss";
import data from "./components/data.js";

function App() {
  const { projects } = data;
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="project" element={<Projects projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;
