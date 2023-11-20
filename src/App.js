import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Empleados from "./Empleados";
import Api from "./Api";


const App = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Empleados" element={<Empleados />} />
          <Route path="/api" element={<Api />} />
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