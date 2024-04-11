import React from 'react';
import './Tasca.css'; 

function Tasca({ id, tasca, eliminarTasca, completarTasca }) {
  return (
    <li className="tasca">
      <div
        className="text"
        style={{ textDecoration: tasca.completada ? 'line-through' : 'none' }}
        onClick={() => completarTasca(id)} 
      >
        {tasca.text}
      </div>
      <button className="btn-eliminar" onClick={() => eliminarTasca(id)}>Eliminar</button>
    </li>
  );
}

export default Tasca;
