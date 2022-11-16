import './styles/App.css'
import Clock from './clock/Clock'

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-logo">
          <h1><code>Today <span className="App-link">React</span></code></h1>
        </div>
        <Clock className="clock" />
      </div>
    </div>
  );
}

export default App
