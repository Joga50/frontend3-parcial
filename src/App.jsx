import React from "react";

import Input from "./input";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (
    <div className="App">
      <h1>Elige un color</h1>

      <form
        style={{
          backgroundColor: "gray",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input />
      </form>
    </div>
  );
}

export default App;
