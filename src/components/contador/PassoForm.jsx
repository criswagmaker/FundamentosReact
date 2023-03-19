import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        //Altera o estado do componente
        onChange={(event) => props.onPassoChange(+event.target.value)}
      />
    </div>
  );
};
