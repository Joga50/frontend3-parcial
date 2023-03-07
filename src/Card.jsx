//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ nombre, pelicula }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        width: "300px",
        padding: "30px",
        margin: "10px",
        borderRadius: "1rem",
      }}
    >
      <h2>Datos recibidos:</h2>
      <p>Nombre: {nombre}</p>
      <p>Pelicula: {pelicula}</p>
    </div>
  );
}

export default Card;
