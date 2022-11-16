import React from "react";
import { AuthContext } from "../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faStar, faChartLine } from '@fortawesome/free-solid-svg-icons'

export const Header = ({value, points, setPoints, myRank, myRLoad}) => {
  const { state, dispatch } = React.useContext(AuthContext);
  return (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-main lighten-1 rounded-pill row">
      <div className="col-12 col-md-6 text-md-left text-center">
      <p className="nav-link navbar-brand m-0 ml-2 p-0 text-center" alt={`Email: ${state.email}`} title={`Email: ${state.email}`}>{state.name}</p>
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
        <ul className="navbar-nav mr-0 ml-0 text-center ml-md-auto nav-flex-icons flex-row header-bar">
          <li className="nav-item mr-1">
              {myRLoad ? (
                <button className="nav-link btn d-flex justify-content-center align-items-center text-white no-cursor">
                <div className="spinner-grow spinner-grow-sm text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              </button>
              ) : (
                <button className="nav-link btn d-flex justify-content-center align-items-center text-white text-center no-cursor">
              <FontAwesomeIcon icon={faChartLine} className="mr-1 mr-md-2" /> <span className="d-none d-md-flex mr-md-1" >Posición:</span> <span className="text-bold mr-1 mr-md-0">{myRank}</span>
              </button>
              )}
            </li>
          <li className="nav-item mr-2">
              {myRLoad ? (
                <button className="nav-link btn d-flex justify-content-center align-items-center text-white no-cursor">
                  <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <div className="spinner-grow spinner-grow-sm text-white" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                  </div>
              </button>
              ) : (
                <button className="nav-link btn d-flex justify-content-center align-items-center text-white no-cursor"><FontAwesomeIcon icon={faStar} className="mr-1 mr-md-2" /> <span className="d-none d-md-flex mr-1" >Puntos:</span> <span className="text-bold">{points}</span></button>
              )}
           </li>
            
          <li className="nav-item mr-0 mr-md-2">
              {myRLoad ? (
                <button className="nav-link btn d-flex justify-content-center align-items-center text-white text-center no-cursor">
                <div className="spinner-grow spinner-grow-sm text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              </button>
              ) : (
                <button className="nav-link btn d-flex justify-content-center align-items-center text-white text-center" onClick={() =>
                  dispatch({
                    type: "LOGOUT"
                  })
                }>
               <span className="text-bold mr-md-0 d-flex justify-content-center align-items-center text-white text-center"><FontAwesomeIcon icon={faSignOutAlt} className="mt-1" /> <span className="d-none d-md-flex">Salir</span></span>
              </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Header;