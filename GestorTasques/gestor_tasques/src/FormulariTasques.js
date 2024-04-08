import React, { useState } from 'react';
import './FormulariTasques.css'; // Importa los estilos CSS

function FormulariTasques(props) {
  // Estado para almacenar el texto de la nueva tarea
  const [textTasca, setTextTasca] = useState('');

  // Función para manejar el cambio en el input de texto
  const canviTextTasca = e => {
    setTextTasca(e.target.value);
    console.log('value is:', e.target.value);
  };

  // Función para enviar el formulario y agregar una nueva tarea
  const enviarForm = e => {
    e.preventDefault();
    const tascaNova = {
      text: textTasca,
      completada: false
    };
    props.funcAfegirTasca(tascaNova);
    setTextTasca(''); // Limpiar el estado después de agregar la tarea
  };

  return (
    <form className="formulario" onSubmit={enviarForm}>
      <input
        type="text"
        value={textTasca}
        onChange={canviTextTasca}
        className="input-tasca"
      />
      <button type="submit" className="btn-afegir">
        Afegir Tasca
      </button>
    </form>
  );
}

export default FormulariTasques;
