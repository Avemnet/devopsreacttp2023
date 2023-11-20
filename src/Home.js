import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1><center>Pagina Principal</center></h1>
      <hr />
        <center>
      {/* Button */}
      <p>
        <button onClick={() => navigate("/Empleados")}>Listar Empleados</button>
      </p>
      {/* Button */}
      <p>
        <button onClick={() => navigate("/Api")}>Testear API</button>
      </p>
      </center>
    </>
  );
};

export default Home;