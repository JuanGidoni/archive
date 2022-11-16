import React, {
 useContext,
 useState,
 useEffect,
 createContext
} from "react"
import Loader from '../Loader'

const AppContext = createContext()

export function useAppContext() {
 return useContext(AppContext)
}

export function AppProvider({
 children,
 ...props
}) {

 const [loading, setLoading] = useState(true)
 const [player, setPlayer] = useState('')
 const [scores, setScores] = useState('')
 const [page, setPage] = useState('home')

 useEffect(() => {
  if (localStorage.getItem('player')) {
   setPlayer(JSON.parse(localStorage.getItem('user')))
   setLoading(false)
  }
  if (localStorage.getItem('scores')) {
   setScores(localStorage.getItem('scores'))
   setLoading(false)
  }
  setLoading(false)

  return () => {
   setLoading(true)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 const value = {
  player,
  scores,
  loading,
  page,
  setPage,
  setLoading,
  setScores,
  setPlayer,
 }

 return (
  <AppContext.Provider value={value} props={props}>
   {loading ? <div className="loader-content"><Loader /></div> : children}
  </AppContext.Provider>
 )
}
