import React from 'react'
import {
    Card
  } from 'reactstrap';
import axios from 'axios'
import LogoContainer from '../components/LogoContainer'
import {CopyToClipboard} from 'react-copy-to-clipboard';


class Cards extends React.Component {
    constructor(props) {
      super(props);
  
      this.onChange = {
        name1: this.handleChange.bind(this, 'name1'),
        name2: this.handleChange.bind(this, 'name2'),
      }
  
      this.state = {
        valor1: '',
        valor2: '',
        total: ''
      };
      this.getMoney = this.getMoney.bind(this)
    };
    handleChange(name, event) {
      this.getMoney(name, event.target.value);
      this.setState({copied: ''})
    };

    onClick = ({target: {innerHTML}}) => {
      console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
    };
  
    onCopy = () => {
      this.setState({copied: 'Copiado!'});
    };

    getMoney(name,e) {
      let self = this;
      function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
      }
        axios.get('https://free.currconv.com/api/v7/convert?apiKey=b4e8126aaeefdc638d79&q=EUR_ARS,USD_ARS')
          .then(function (response) {
            if(name==='name1'){
              let EURtoARS = response.data.results.EUR_ARS.val
              let totalEUR = EURtoARS*e
              console.log(totalEUR)
              self.setState({
                total: '$ '+round(totalEUR,2)
              })
              
            }else{
            let USDtoARS = response.data.results.USD_ARS.val
            let totalUSD = USDtoARS*e
            console.log(totalUSD)
            self.setState({
              total: '$ '+round(totalUSD,2)
            })
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
    }  


render(){

    return (
        <div>
          <LogoContainer className="fixed-top" />
          <Card className="col-12 mt-5 border-0 bg-dark fixed-bottom">
              <div className="row mx-auto">
                  <div className="col-12 pt-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-usd" aria-hidden="true"></i>
                        </span> 
                    </div>
                   <input type="text" className="form-control" onChange={ this.onChange.name2 }  placeholder="DOLAR"/>
                </div>
                 </div>
                  <div className="col-12 pt-3">
                  <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-euro" aria-hidden="true"></i>
                        </span> 
                    </div>
                   <input type="text" className="form-control" onChange={ this.onChange.name1 }  placeholder="EURO"/>
                </div>                  
                  </div>
                  
                  <div className="col-8 mx-auto mt-5 mb-5">
                  <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-check" aria-hidden="true"></i>
                        </span> 
                    </div>
                   <input type="text" className="form-control bg-dark border-ahora text-white" value={this.state.total} disabled id="copyresult"/> 
                    <CopyToClipboard
            onCopy={this.onCopy}
            options={{message: 'Whoa!'}}
            text={this.state.total}>
            <button onClick={this.onClick} className="ml-1">
                <i className="fa fa-clipboard" aria-hidden="true"></i>
              </button>
          </CopyToClipboard>
                </div>     
                <p className="text-center text-white" id="copiado"> {this.state.copied} </p>             
                  </div>
            </div>
          </Card>
        </div>
        )
}
}
export default Cards