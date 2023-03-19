import React from "react";

export default props => {

    // Forma n1 de fazer a comunicação de filho para pai
    function acao() {
        props.aoClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )

    // Forma n2 de fazer a comunicação de filho para pai
    /* return (
        <div>
            <button onClick={() => {
                props.aoClicar(Math.random())
            }}>Alterar</button>
        </div>
    ); */
};
