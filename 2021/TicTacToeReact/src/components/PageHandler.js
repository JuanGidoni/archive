import { useAppContext } from "./Context/AppContext"
import Menu from "./Menu";
import PreviousResults from "./PreviousResults";
import ScreenPlay from "./ScreenPlay";

const PageHandler = () => {
 const { page } = useAppContext();

 if(page === 'home')
 return (
  <>
  <Menu />
  <PreviousResults />
  </>
 )
 return (
  <div>
   <ScreenPlay />
  </div>
 )
}

export default PageHandler
