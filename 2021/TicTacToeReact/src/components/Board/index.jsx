import Cell from "../Cell"

const Board = ({className}) => {
 return (
  <div className={className} id="board">
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
   <Cell className='cell' />
  </div>
 )
}

export default Board
