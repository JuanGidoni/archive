import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import Form from './components/Form';
import StreamList from './components/StreamList'
import Header from './components/Header'
import Footer from './components/Footer'

function App({logged, token}) {
  
  // State consts 
  const [input, setInput] = useState('');
  const [streams, setStreams] = useState([]);
  const [streamsInfo, setStreamsInfo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterStreams, setFilterStreams] = useState([]);
  const [active, setActive] = useState(true);
  const [newLogged, setnewLogged] = useState(logged);
  const [newToken, setNewToken] = useState(token);
  const [userName, setUserName] = useState('');
  const [id, setId] = useState('');
  const [totalF, setTotalF] = useState(0)
  const [totalV, setTotalV] = useState(0)

    // RUN ONCE 
    useEffect(() => {
      getStreams();
      if(localStorage.getItem('logindata')){
        let logindata = localStorage.getItem('logindata');
        logindata = JSON.parse(logindata);
        setUserName(logindata.login);
      }
    },[]);

    useEffect( () => {
      filterHandler(); 
      localStreams();
    },[streams,status]);
    
  // Functions

  const filterHandler = () => {
    let alertbox = document.getElementById('alert');
    let alertBtn = document.createElement('p');
    let date = new Date();
    switch(status){

      case 'completed':
        setFilterStreams(streams.filter(stream => stream.completed === true));
        alertBtn.innerText = 'Filter set as completed...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
        break;

        case 'favorite':
          setFilterStreams(streams.filter(stream => stream.favorite === true));
          alertBtn.innerText = 'Filter set as important...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
          break;

        case 'uncompleted':
          setFilterStreams(streams.filter(stream => stream.completed === false));
          alertBtn.innerText = 'Filter set as uncompleted...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
          break;

          default:
            setFilterStreams(streams);
            break;
          }
    }
    const localStreams = () => {
      localStorage.setItem('streams', JSON.stringify(streams));
  }
  const getStreams = () => {
    if(localStorage.getItem('streams') === null){
      localStorage.setItem('streams', JSON.stringify([]));
    }else {
      let streamLocal = JSON.parse(localStorage.getItem('streams', JSON.stringify(streams)));
      setStreams(streamLocal);
      let followersLocal = JSON.parse(localStorage.getItem('totalFollowers', JSON.stringify(totalF)));
      setTotalF(followersLocal)
      
      let viewsLocal = JSON.parse(localStorage.getItem('totalViews', JSON.stringify(totalV)));
      setTotalV(viewsLocal)
    }
  }
        return (
          <div className="container-fluid App">
            <div className="row">
            <Header streams={streams} filterStreams={filterStreams} status={status} newLogged={newLogged} setnewLogged={setnewLogged} newToken={newToken} user={userName} />
            <div className="col-12 col-md-12 col-lg-6 text-center bg-white"> 
            <div className="d-flex flex-column justify-content-center align-items-center">
            <Form 
            input={input}
            streams={streams}
            setStreams={setStreams}
            setInput={setInput}
            setStatus={setStatus}
            active={active}
            setActive={setActive}
            setTotalF={setTotalF}
            setTotalV={setTotalV}
            />
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 streamBox pt-5 pt-md-0 bg-white h-100">
            <h2 className="text-center input-stream text-reacstream">Streamers List</h2>
            <StreamList 
            filterStreams={filterStreams} 
            setStreams={setStreams} 
            streams={streams}
            setStreamsInfo={setStreamsInfo}
            streamsInfo={streamsInfo}
            newToken={newToken} 
            idUser={id}
            setIdUser={setId}
            totalF={totalF}
            setTotalF={setTotalF}
            totalV={totalV}
            setTotalV={setTotalV}
            />
            
            </div>
            </div>
            Total Followers: {totalF} |
            Total Live: {totalV}
            <Footer />
            </div>
            );
          }
          
          export default App;
          