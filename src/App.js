import React, { createContext, useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="position-relative">
        <Navbar />
        <div className="wrapper-content">
          <Sidebar />
          <div className="w-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
