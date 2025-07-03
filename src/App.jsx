// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="min-h-screen  font-sofia  bg-white">
      {/* You can add a NavBar here */}
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
};

export default App;
