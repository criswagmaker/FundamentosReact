import React, { useState } from "react";

export default (props) => {
    const [nome, setNome] = useState('Cristian')
    return (
        <div>
            {
            // Caso o atributo esteja Null, o componente poderá ser manipulado, caso contrário não
            // Isso se chama controlled component
                }
            <h3>{nome}</h3>
            <input type="text"value={nome}
            onChange={event => setNome(event.target.value)} />
        </div>
    );
};