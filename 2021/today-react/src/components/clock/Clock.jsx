import { useEffect, useState } from 'react'
import formatedDate from '../utils/getTimeToday'
 
const Clock = ({ className }) => {

 const [flag, setFlag] = useState(true)
 const [theTime, setTheTime] = useState({
  status: true,
  time: null
 })

 useEffect(() => {
  const startClock = () => {
   setTimeout(() => {
    if(theTime.status){
     setInterval(() => {
      setTheTime({
       status: false,
       time: formatedDate()
      })
      document.title = formatedDate()
     }, 1000);
     setFlag(false)
    }
   }, 3000);
  }

  startClock()

 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 return (
  flag ? <div className="loader">Loading...</div> :
   <div className={className}>
    <p>{theTime.time}</p>
   </div>
 )
}

export default Clock
