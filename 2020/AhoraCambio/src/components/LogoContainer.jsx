import React from 'react'
import ExChange from '../images/exchange.png'

class LogoContainer extends React.Component {
render(){
    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="bottom-arrow">
                    </div>
                    <img src={ExChange} alt="Logo" className="img-fluid img"/>
                    <h1 className="text-white mb-5 ahoracambio">AHORACAMBIO</h1>
                </div>
            </div>
        </div>

    )
}
}

export default LogoContainer