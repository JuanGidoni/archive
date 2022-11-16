import React from "react";
import { AuthContext } from "../../App";
// const axios = require('axios');

export const Login = ({errorMsj}) => {
  
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage:  errorMsj.errorMessage || null
  };
const [data, setData] = React.useState(initialState);
const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
const handleFormSubmit = async (event) => {

    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage:  errorMsj.errorMessage || null
    });
    
    try {
      await fetch(`http://${process.env.REACT_APP_LOGINPOINT}`, {
      method: 'POST',
      headers: {
        'email' : localStorage.getItem('email') || data.email,
        'key' : localStorage.getItem('key') || data.password
      },
      redirect: 'follow'
    })
      .then(res => {
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
      })
      .catch(error => {
          setData({
            ...data,
            isSubmitting: false,
            isAuthenticated: false,
            errorMessage: error.message || error.statusText || 'Algo salio mal :( o tu usuario no existe...'
          });
      });

    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        isAuthenticated: false,
        errorMessage: error.message || error.statusText || 'Error 404'
      });
    }
  };
return (
    <div className="d-flex align-items-center justify-content-center rounded w-100 mx-auto">
      <div className="card h-100 col-12 col-md-12 col-lg-12 p-0 r-t r-b">
      <div className="text-center p-2 bg-main text-white text-uppercase w-100 r-t">
        <h1 className="p-0 m-0">¡Jugar!</h1>
      </div>
   <form onSubmit={handleFormSubmit} className="d-flex flex-column align-items-center justify-content-center h-100 p-5">

    <div className="form-group col-12 col-md-6 p-0">
              <input
                type="text"
                value={data.email}
                placeholder="Correo electronico"
                onChange={handleInputChange}
                autoComplete="email"
                name="email"
                id="email"
                className="form-control"
              />
    </div>
    <div className="form-group col-12 col-md-6 p-0">
              <input
                type="password"
                value={data.password}
                placeholder="Contraseña"
                onChange={handleInputChange}
                name="password"
                autoComplete="current-password"
                id="password"
                className="form-control"
              />
    </div>

			{data.errorMessage && (
              <span className="form-error mt-1 mb-2">{data.errorMessage}</span>
            )}

           <button disabled={data.isSubmitting} className="btn bg-main text-white col-12 col-md-6">
              {data.isSubmitting ? (
                "Cargando..."
              ) : (
                "INGRESAR"
              )}
            </button>
            <p className="small pt-3 p-0 m-0 text-center">Si necesitás registrarte o recuperar la contraseña de Eurocampus, accedé al siguiente <a rel="noreferrer" href="https://www.eurocampus-online.com/login.php" target="_BLANK">link</a>.</p>
            </form>
      </div>
    </div>
  );
};
export default Login;