
import React from "react";
import Card from '../pages/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function Pregunta ({changePage, setMyrank, myRank, preguntas, respuestas, elv, setElv, state, dispatch, value, getData, points, setPoints}) {

  const [allowed, setAllowed] = React.useState(false);
  const [rStatus, setRstatus] = React.useState('');
  
  
  const [rValid, setRvalid] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState({
    selected: null
  });
  const [correctA, setCorrecta] = React.useState('');
  
  return(
    <div className="row h-100 mt-5 mt-md-0 p-0">
        <div className={`col-12 m-0 p-0 d-flex flex-md-fill justify-content-between align-items-center pb-1 pb-md-3 pregunta-bar`}>
        <div className="volver">
              <button className={`btn bg-secondary text-white `} onClick={changePage} value="home">Volver</button>
          </div>
          <div className="d-flex justify-content-center align-items-center h-100 pregunta-u-stats">
              <button className="btn btn-main d-flex justify-content-center align-items-center mr-2"><FontAwesomeIcon icon={faChartLine}/><span className="d-none d-md-flex ml-1 mr-1 text-white">Posición: </span> <span className="text-bold text-white ml-1 ml-md-0">{myRank}</span></button>
              <button className="btn btn-main d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faStar}/><span className="d-none d-md-flex ml-1 mr-1 text-white">Puntos: </span> <span className="text-bold text-white ml-1 ml-md-0">{points}</span></button>
              <button className={`btn d-flex justify-content-center align-items-center text-white ml-2 ${rStatus === 'c' ? 'bg-success' : rStatus === 'i' ? 'd-none' : ''}`}>{rStatus === 'c' ? '+10' : ''}</button>
              
          </div>
          <div className="d-flex justify-content-center align-items-center h-100 next">
              <button className={`btn bg-main text-white ${allowed ? 'bg-success' : 'd-none'}`} onClick={getData} value="home">Siguiente</button>
          </div>
        </div>

          <div className="col-12 text-center text-white rounded mt-3 mt-md-0 bg-white p-3 shadow preguntas">
              <div className="text-main p-1 mt-3 mt-md-0">
              <h2 className="pregunta-h2">{preguntas.question}</h2>
              </div>
          </div>
          {respuestas && respuestas.length > 0 ? respuestas.map((res) => (
            <Card 
            key={res.id}
            respuesta={res.response}
            preguntas={preguntas}
            id={res.id}
            setElv={setElv}
            elv={elv}
            setPoints={setPoints}
            value={value}
            allowed={allowed}
            setAllowed={setAllowed}
            rStatus={rStatus}
            points={points}
            setRstatus={setRstatus}
            rValid={rValid}
            setRvalid={setRvalid}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            correctA={correctA}
            setCorrecta={setCorrecta}
            setMyrank={setMyrank}
            />
          )) : <span>No hay respuestas en esta pregunta para responder...</span>}
            
        </div>
)
}