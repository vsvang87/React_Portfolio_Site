import { useState } from "react";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import "./css/styles.scss";
import data from "./components/data.js";

function App() {
  const { projects } = data;
  return (
    <div className="app">
      <Navbar />
      <AnimatedRoutes projects={projects} />
    </div>
  );
}

export default App;
