import React from "react";
import { Switch, Route, Links } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
