import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <>
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
          </>
        }/>
      </Routes>
    </Router>
  );
}

export default App;