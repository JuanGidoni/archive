import React from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import Rank from './pages/Rank'
import Start from './pages/Start'

import { AuthContext } from "../App";


export const QuestContext = React.createContext();

const initialState = {
  preguntas: [],
  isFetching: true,
  hasError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_QUEST_REQUEST":
      return {
        ...state,
        isFetching: true,
        hasError: false
      };
    case "FETCH_QUEST_SUCCESS":
      return {
        ...state,
        isFetching: false,
        preguntas: action.payload
      };
    case "FETCH_QUEST_FAILURE":
      return {
        ...state,
        hasError: true,
        isFetching: false
      };
    default:
      return state;
  }
};

export default function UserLoged({
    value,
    ranking,
    setRanking,
    setLoading
}) {
    const [flag, setFlag] = React.useState(false);
    const [pages, setPages] = React.useState('home');
    const { state: authState } = React.useContext(AuthContext);
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [elv, setElv] = React.useState(0);
    const [respuestas, setRespuestas] = React.useState({});
    const [preguntas, setPreguntas] = React.useState({});
    const [points, setPoints] = React.useState(value.state.points);
    const [myRank, setMyrank] = React.useState(0);
    const [dataLoad, setdataLoad] = React.useState(false);
    const [myRLoad, setmyRLoad] = React.useState(false);

    const changePage = (event) => {
        setPages(event.target.value);
        getData();
      }

    const getData = async() => {
      try {
        setdataLoad(true)
        dispatch({
          type: "FETCH_QUEST_REQUEST"
        });  
        await fetch(`http://${process.env.REACT_APP_QUESTPOINT}/${value.state.key}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(resJson => {
        setdataLoad(false);
        setPreguntas(resJson);
        setRespuestas(resJson.responses);
        setFlag(true)
        dispatch({
          type: "FETCH_QUEST_SUCCESS",
          payload: resJson
        });
      })
      .catch(error => {
        setdataLoad(false);
          setFlag(false)
        dispatch({
          type: "FETCH_QUEST_FAILURE"
        });
      });
    } catch (error) {
      setdataLoad(false);
        setPages('')
        setFlag(false)
        dispatch({
          type: "FETCH_QUEST_FAILURE"
        });
      }
    }
    const getMyRank = async() => {
      try {
        setmyRLoad(true)
        dispatch({
          type: "FETCH_QUEST_REQUEST"
        });
        await fetch(`http://${process.env.REACT_APP_USERPOINTRANK}/${value.state.key}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(resJson => {
        setmyRLoad(false)
        setMyrank(resJson);
      })
      .catch(error => {
        setmyRLoad(false)
        dispatch({
          type: "FETCH_QUEST_FAILURE"
        });
      });
    } catch (error) {
      setmyRLoad(false)
        dispatch({
          type: "FETCH_QUEST_FAILURE"
        });
      }
    }
  
    React.useEffect(() => {
      getData();
      getMyRank();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authState]);

return (
      <div className="col-12 mt-3 mt-md-0">
      {pages === 'home' && flag === true ? (
          <div className="row m-0">
          <div className="col-12 mx-auto w-100 pb-3 pt-3">
          <Header value={value} points={points} setPoints={setPoints} myRank={myRank} dataLoad={dataLoad} myRLoad={myRLoad} />
          </div>
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center order-2 order-md-1 mt-5 mt-md-0">
          <Rank state={value.state} ranking={ranking} setRanking={setRanking} dataLoad={dataLoad} myRLoad={myRLoad}  />
          </div> 
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center order-1 order-md-2 r-t r-b bg-white shadow m-0">
          <Start state={value.state} ranking={ranking} setRanking={setRanking} setPages={setPages} pages={pages} changePage={changePage} />
          </div> 
          </div>
          ) : pages === 'preguntas' && flag === true ? (
                <div className="row m-0 p-0">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <Home 
                value={value}
                pages={pages}
                setPages={setPages}
                changePage={changePage}
                flag={flag}
                setFlag={setFlag}
                points={points}
                setPoints={setPoints}
                state={state}
                preguntas={preguntas}
                respuestas={respuestas}
                elv={elv}
                setElv={setElv}
                dispatch={dispatch}
                getData={getData}
                setMyrank={setMyrank}
                myRank={myRank} />
                </div>
                </div>
          ) : flag === false && dataLoad === true ? (
                  <div className="row m-0 p-3 h-100 mt-2 mt-md-0">
                  <div className="w-100 mt-2 mt-md-0 mb-3">
                  <Header value={value} points={points} setPoints={setPoints} myRank={myRank} />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center order-2 order-md-1 mt-5 mt-md-0">
                  <Rank state={value.state} ranking={ranking} setRanking={setRanking} setLoading={setLoading} />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center p-5 order-1 bg-white shadow r-t r-b mt-3">
                    <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                    </div>
                  </div> 
                  </div>
            ) : flag === false ? (
              <div className="row m-0 p-3 h-100 mt-2 mt-md-0">
              <div className="w-100 mt-2 mt-md-0 mb-3">
              <Header value={value} points={points} setPoints={setPoints} myRank={myRank} />
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center order-2 order-md-1 mt-5 mt-md-0">
              <Rank state={value.state} ranking={ranking} setRanking={setRanking} setLoading={setLoading} />
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center p-5 order-1 bg-white shadow r-t r-b">
              <h2 className="m-0 pb-3 text-main">No hay más preguntas por el momento.</h2>
              <p className="h5 m-0 p-0 text-main">Vuelve mañana...</p>
              </div> 
              </div>
            ) : (
              <div className="col-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center align-items-center p-5 order-1 bg-white shadow r-t r-b mt-3">
              <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
              </div>
              </div>
            </div> 
            )}
    </div>
                        
    )
  }
                        