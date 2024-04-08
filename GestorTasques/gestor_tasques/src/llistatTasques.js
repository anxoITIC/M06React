import React, { useState } from 'react';
import './llistatTasques.css';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca'; // Importamos el componente Tasca

function LlistatTasques() {
  // Estado para almacenar el listado de tareas
  const [tasques, setTasques] = useState([]);

  // Función para agregar una nueva tarea
  const afegirTasca = tasca => {
    setTasques([...tasques, tasca]);
  };

  // Función para eliminar una tarea según su id (index)
  const eliminarTasca = id => {
    const tasquesRestants = tasques.filter((_, index) => index !== id);
    setTasques(tasquesRestants);
  };

  // Función para completar una tarea según su id (index)
  const completarTasca = id => {
    const tasquesActuals = [...tasques];
    tasquesActuals[id].completada = !tasquesActuals[id].completada;
    setTasques(tasquesActuals);
  };

  return (
    <div className="container">
      <h1 className="title">Gestor de tasques</h1>
      <h2 className="author">Fet per Anxo Aragundi</h2>
      {/* Componente FormulariTasques para agregar nuevas tareas */}
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      {/* Mostrar todas las tareas */}
      <ul>
        {tasques.map((tasca, index) => (
          <Tasca
            key={index}
            id={index}
            tasca={tasca}
            eliminarTasca={eliminarTasca}
            completarTasca={completarTasca}
          />
        ))}
      </ul>
    </div>
  );
}

export default LlistatTasques;
