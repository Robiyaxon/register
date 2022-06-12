import { Register } from "./register/Register";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from './home/Home';
import "./App.css"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
