import React, { useState } from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [pelicula, setPelicula] = useState("");
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim().length < 3 || /^\s/.test(nombre) || pelicula.length < 6) {
      setError(true);
      return;
    }
    setError(false);
    setEnviado(true);
  };

  const handleNombreInputChange = (e) => {
    setNombre(e.target.value);
  };

  const handlePeliculaInputChange = (e) => {
    setPelicula(e.target.value);
  };

  return (
    <div className="App">
      <h1>Elige un color:</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "gray",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <label>Nombre:</label>
          <input
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={handleNombreInputChange}
            style={{ margin: "15px" }}
          />
          <lbael>Color:</lbael>
          <input
            value={pelicula}
            onChange={handlePeliculaInputChange}
            style={{ margin: "15px" }}
            placeholder="Ingresa tu color favorito formato HEX"
          />
          <button type="submit" style={{ margin: "15px" }}>
            Enviar
          </button>
        </div>
      </form>
      {error && <p>Porfavor ingresa la informacion correcta</p>}
      {enviado && <Card nombre={nombre} pelicula={pelicula} />}
    </div>
  );
}

export default App;
