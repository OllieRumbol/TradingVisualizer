import React from "react";

import Banner from "components/banner/Banner";
import Dashboard from "pages/dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div>
      <Banner>
        <h1 style={{color: "white", margin: 0, padding: "5px"}}>Trading Visualizer</h1>
      </Banner>
      <Dashboard />
    </div>
  );
}

export default App;
