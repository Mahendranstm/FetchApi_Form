import React from "react";
import "./css/main.min.css";
import Signup from "./components/Singup/Signup";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
