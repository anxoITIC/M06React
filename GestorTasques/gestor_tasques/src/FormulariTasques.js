import React, { useState } from 'react';
import './FormulariTasques.css'; 

function FormulariTasques(props) {

  const [textTasca, setTextTasca] = useState('');

  const canviTextTasca = e => {
    setTextTasca(e.target.value);
    console.log('value is:', e.target.value);
  };

  //agregar una nova tasca
  const enviarForm = e => {
    e.preventDefault();
    const tascaNova = {
      text: textTasca,
      completada: false
    };
    props.funcAfegirTasca(tascaNova);
    setTextTasca('');
  };

  //component
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
