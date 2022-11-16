import { useEffect, useState } from 'react'
import CommentBox from "components/CommentBox"
import CommentList from "components/CommentList"
import 'components/App.css'
const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('list')){
      let list = JSON.parse(localStorage.getItem('list'))
      setList(list)
    }
  }, [])
  return (
    <div className="App">
      <h1>Testing React & Redux</h1>
      <div className="Box">
      <CommentBox setList={setList} list={list} />
      <CommentList list={list} />
      </div>
    </div>
  );
}

export default App;
