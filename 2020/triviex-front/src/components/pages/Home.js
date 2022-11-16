import React from "react";
import Pregunta from "./Pregunta";

export const Home = ({
  value,
  pages,
  setPages,
  changePage,
  flag,
  setFlag,
  points,
  setPoints,
  state,
  preguntas,
  respuestas,
  elv,
  setElv,
  dispatch,
  getData,
  setMyrank,
  myRank }) => {

  return (
    <React.Fragment>
    <div className="container-fluid d-flex justify-content-center align-items-center m-0 p-0">
      <div className="row m-0 p-0">
        <div className="col-12">
          {state.isFetching ? (
            <div className="col-12 mt-3">
              <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                    </div>
            </div>
          ) : state.hasError ? (
            <div className="col-12">
              <span className="error">Hubo un error en la carga de preguntas, intentalo de nuevo más tarde.</span>
            </div>
            ) : ( 
            <div className="container m-0 p-0">
              <Pregunta 
                changePage={changePage} 
                setPoints={setPoints} 
                points={points} 
                preguntas={preguntas} 
                respuestas={respuestas} 
                elv={elv} 
                setElv={setElv} 
                dispatch={dispatch} 
                value={value} 
                getData={getData}
                setMyrank={setMyrank}
                myRank={myRank} />
              </div>
            )
          }
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Home;
