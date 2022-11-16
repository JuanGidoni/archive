
import { AppProvider } from "./Context/AppContext";
import PageHandler from "./PageHandler";
import './Styles/App.css'
const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <h1>Tic Tac Toe + React</h1>
        <PageHandler />
      </AppProvider>
    </div>
  );
}
export default App
