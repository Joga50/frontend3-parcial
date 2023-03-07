import React from "react";

function Input() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
      }}
    >
      <input placeholder="Ingresa tu nombre" style={{ margin: "15px" }} />
      <input
        style={{ margin: "15px" }}
        placeholder="Ingresa tu color favorito formato HEX"
      />
      <button style={{ margin: "15px" }}>Enviar</button>
    </div>
  );
}

export default Input;
