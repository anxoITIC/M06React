import React, { useState } from 'react';
import './llistatTasques.css';
import FormulariTasques from './FormulariTasques';
import Tasca from './Tasca';

function LlistatTasques() {
  //aquí es guarden les tasques
  const [tasques, setTasques] = useState([]);

  //afegir una tasca
  const afegirTasca = tasca => {
    setTasques([...tasques, tasca]);
  };

  //funció per eliminar una tasca
  const eliminarTasca = id => {
    const tasquesRestants = tasques.filter((_, index) => index !== id);
    setTasques(tasquesRestants);
  };

  //funció per donar una tasca per completada
  const completarTasca = id => {
    const tasquesActuals = [...tasques];
    tasquesActuals[id].completada = !tasquesActuals[id].completada;
    setTasques(tasquesActuals);
  };

  //component
  return (
    <div className="container">
      <h1 className="title">Gestor de tasques</h1>
      <h2 className="author">Fet per Anxo Aragundi</h2>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
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
