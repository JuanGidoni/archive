import React from 'react'

export default function Start({changePage}) {
    return (
        <div className="mx-auto text-center w-100 p-5">
            <h2 className="start-h2 h1 m-0 p-0">¡Tenés preguntas sin responder!</h2>
            <p className="start-p h3 mb-5 m-0 mt-2 p-0">Suma puntos respondiendo correctamente</p>
            <button onClick={changePage} value="preguntas" className="btn btn-play btn-main r-t r-b">¡JUGAR!</button>
        </div>
    )
}
