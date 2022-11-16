import Board from "../Board"
import '../Styles/Board.css'
const ScreenPlay = () => {

 return (
  <div>
   <Board className="board" />
  <div className="winning-message" id="winningMessage">
    <div data-winning-message-text></div>
    <button id="restartButton">Restart</button>
  </div>
  </div>
 )
}

export default ScreenPlay
