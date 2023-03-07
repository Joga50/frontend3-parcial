//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ nombre, pelicula }) {
  return (
    <div>
      <h2>Datos recibidos:</h2>
      <p>Nombre: {nombre}</p>
      <p>Pelicula: {pelicula}</p>
    </div>
  );
}

export default Card;
