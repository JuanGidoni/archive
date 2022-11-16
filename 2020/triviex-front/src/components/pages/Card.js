import React from "react";
import correct from '../../assets/correct.png';
import incorrect from '../../assets/incorrect.png';

export const Card = ({
  respuesta,
  points,
  preguntas,
  value,
  id,
  setElv,
  elv,
  setPoints,
  allowed,
  setAllowed,
  rStatus,
  setRstatus,
  rValid,
  setRvalid,
  isCheck,
  setIsCheck,
  correctA,
  setCorrecta,
  setMyrank
}) => {
  
  const [loadingRes, setLoadingRes] = React.useState(false)
  
  const storeValue = (e) => {
    setElv(e.target.value);
    setIsCheck({
      selected: e.target.value
    })
    }
  const setActualRanking = async() => {
    try {
      setLoadingRes(true)
      await fetch(`http://${process.env.REACT_APP_USERPOINTRANK}/${value.state.key}`)
      .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw res;
            }
          })
          .then(resJson => {
            setLoadingRes(false)
            setMyrank(resJson)
          })
          .catch(error => {
            setLoadingRes(false)
          });
    } catch (error) {
      setLoadingRes(false)
    }
  }
  const checkResults = async (e) =>{
    e.preventDefault();

    setElv(e.target.value);
    setIsCheck({
      selected: e.target.value
    })
   if(allowed){
     return false;
   }else{
    try {
      setLoadingRes(true)
      await fetch(`http://${process.env.REACT_APP_QUESTPOINT}/${value.state.key}/${preguntas.id}/${e.target.value}`, {   
              method: 'POST',
              redirect: 'follow'
      }).then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw res;
            }
          })
          .then(resJson => {
            setLoadingRes(false)
            setCorrecta(resJson.correct_answer_id);
            if(resJson.result === true){
              setPoints(points+10);
              setRstatus('c');

            }else{
              setPoints(points);
              setRstatus('i');
            }
            setAllowed(true)
            setRvalid(resJson.result);
            setActualRanking();
          })
          .catch(error => {
            setLoadingRes(false)
            setAllowed(true)
          });
  } catch (error) {
    setAllowed(true)
    setLoadingRes(false)
  }
   }
}
  return (
        <div className={`col-12 col-md-6 col-lg-6 cursor-pointer respuesta mx-auto`}>
        <button 
        onClick={checkResults} 
        id={`respuesta-${id}`} 
        disabled={allowed} 
        value={id} 
        onChange={storeValue} 
        name="respuesta" 
       // className={`w-100 p-5 btn cursor-pointer ${isCheck.selected === id ? rStatus === 'c' && correctA === id ? 'correct' : 'incorrect' : correctA === id && isCheck.selected != null ? 'correct' : isCheck.selected != null ? 'incorrect' : ''}`}
       className={`w-100 p-0 p-md-4 btn cursor-pointer ${
         isCheck.selected != null ?
              isCheck.selected === id ?
               correctA === isCheck.selected && rStatus === 'c' ? 'correct selected' : 'incorrect selected'
              : correctA === id ? 'correct'
                : 'incorrect'
          : correctA === id ? 'correct' 
        : ''}
         
         `}
        >
        {`${respuesta} `}{
         isCheck.selected != null ?
              isCheck.selected === id ?
               correctA === isCheck.selected && rStatus === 'c' && !loadingRes ?
               (<img src={correct} alt="marked as correct answer by user" className="img-icon" />)
                : rStatus === 'i' && !loadingRes ?
              (<img src={incorrect} alt="marked as correct answer by user" className="img-icon" />)
              : loadingRes ? (
                    <div className="d-flex justify-content-center align-items-center h-100 w-100">
                    <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                    </div>
              ) : '' : '' 
        : ''}
        </button>
        </div>
        
  );
};

export default Card;