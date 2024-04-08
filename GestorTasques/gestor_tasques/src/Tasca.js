import React from 'react';
import './Tasca.css'; // Importa los estilos CSS

function Tasca({ id, tasca, eliminarTasca, completarTasca }) {
  return (
    <li className="tasca">
      {/* Mostrar el texto de la tarea */}
      <div
        className="text"
        style={{ textDecoration: tasca.completada ? 'line-through' : 'none' }}
        onClick={() => completarTasca(id)} // Marcar como completada al hacer clic
      >
        {tasca.text}
      </div>
      {/* Botón para eliminar la tarea */}
      <button className="btn-eliminar" onClick={() => eliminarTasca(id)}>Eliminar</button>
    </li>
  );
}

export default Tasca;
