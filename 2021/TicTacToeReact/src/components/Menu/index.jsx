import { useAppContext } from "../Context/AppContext"

const Menu = () => {
 const { player, setPage } = useAppContext()
 return (
  <button onClick={() => setPage('play')}>
   Start Game vs {player}
  </button>
 )
}

export default Menu
