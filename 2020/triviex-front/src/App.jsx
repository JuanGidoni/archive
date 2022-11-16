import React from "react";
import "./App.css";
import UserLoged from './components/UserLoged'
import UserNotLoged from './components/UserNotLoged'
import PublicHeader from './components/PublicHeader'


export const AuthContext = React.createContext();
let initialState = {};
const reducer = (state, action) => {

  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("key", JSON.stringify(action.payload.key));
      localStorage.setItem("email", JSON.stringify(action.payload.email));
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload.email,
        user_name: action.payload.user_name,
        name: action.payload.name,
        last_name: action.payload.last_name,
        key: action.payload.key,
        points: action.payload.points
      };
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user_name: null,
        email: null,
        name: null,
        last_name: null,
        key: null,
        points: null
      };
      case "REFRESH":
        return window.location.reload();
        default:
          return state;
        }
      };

function App() {

      const [state, dispatch] = React.useReducer(reducer, initialState);
      const [ranking, setRanking] = React.useState({});  
      const [errorMsj, seterrorMsj] = React.useState({});
      const [loading, setLoading] = React.useState(false)
  
  React.useEffect(() => {

    const email = JSON.parse(localStorage.getItem('email') || null)
    const key = JSON.parse(localStorage.getItem('key') || null)

    const getLoginData = async() => {
      try {
        setLoading(true)
        await fetch(`http://${process.env.REACT_APP_LOGINPOINT}`, {
      method: 'POST',
      headers: {
        'email' : email,
        'key' : key
      },
      redirect: 'follow'
    })
      .then(res => {
        setLoading(false)
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(resJson => {
        dispatch({
            type: "LOGIN",
            payload: resJson
        })
      }).catch(error => {
        dispatch({
          type: "LOGOUT"
        })
        seterrorMsj({
          ...error,
          isSubmitting: false,
          isAuthenticated: false,
          errorMessage: error.message || error.statusText || 'Error 404'
        });
      })
      } catch (error) {
        setLoading(false)
        dispatch({
        type: "LOGOUT"
         })
         seterrorMsj({
          ...error,
          isSubmitting: false,
          isAuthenticated: false,
          errorMessage: error.message || error.statusText || 'Error 404'
        });
      }
    }

    if(email && key){
      getLoginData()
    }else{
      dispatch({
        type: 'LOGOUT'
      })
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <div className="container-fluid m-0 p-0 bg-body">
        <div className="row m-0 p-0">
        <div className="col-12 m-0 bg-body p-0">
             <PublicHeader />
          </div> 
        </div>{loading ? (
      <div className="d-flex justify-content-center align-items-center h-100 w-100 bg-body mt-5">
      <div className="spinner-border text-danger" role="status">
      <span className="sr-only">Loading...</span>
      </div>
      </div>
    ) : (
      <div className="App m-0 mb-5 mb-md-0 pt-0 pt-md-5">
        <div className="container-fluid m-0"> 
        {!state.isAuthenticated ? (    
          <div className="row mt-1 mt-md-0 m-0">
            <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center mt-2 mt-md-0 m-0">
              <UserNotLoged
                  ranking={ranking}
                  setRanking={setRanking}
                  errorMsj={errorMsj}
                  />
              </div>
            </div>
        ) : (
          <div className="row m-0">
              <UserLoged  value={{
                    state,
                    dispatch
                  }}
                  ranking={ranking}
                  setRanking={setRanking}
                  loading={loading} />
            </div>
          )}
          </div>
        </div>
      )}
      </div>
    </AuthContext.Provider>
  );
}
export default App;