import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Home.js";
import Empleados from "./Empleados.js";
import Api from "./Api.js";
import Api2 from "./Api2.js";


const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route path="/api" element={<Api />} />
          <Route path="/api2" element={<Api2 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const styles = {
  app: {
    padding: 50,
  },
};