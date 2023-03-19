import React from 'react'

export default (props) => {
    // props é somente para leitura!
    // props.titulo = "Outro Título";
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    );
};
