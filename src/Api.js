import React, { useState, useEffect } from "react";
import "./App.css";
const url = process.env.BACKEND_ENDPOINT + "/api";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
       <h1>Respuesta API</h1>
       <p></p>
       <h1>{message}</h1>
    </div>
  );
}

export default App