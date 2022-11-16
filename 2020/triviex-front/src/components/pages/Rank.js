import React from 'react'

export default function Rank({ranking, setRanking}) { 

    const [rankLoad, setrankLoad] = React.useState(false)

    const getRanking = async () => {
      try {    
        setrankLoad(true)
        await fetch(`http://${process.env.REACT_APP_RANKINGPOINT}`)
            .then(res => {
              if (res.ok) {
                return res.json();
                } else {
                throw res;
                }
            })
          .then(result => {
            setrankLoad(false)
            setRanking(result)
          }).catch(error => {
            setrankLoad(false)
          });
      } catch (error) {
        setrankLoad(false)
      }
    }
    React.useEffect(() => {
      getRanking()
      return function clenaup() {
        setrankLoad(false)
      }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
      <div className="d-flex align-items-center justify-content-center rounded w-100 mx-auto">
      <div className="card h-100 col-12 col-md-12 col-lg-12 p-0 r-t r-b">
      <div className="text-center p-2 bg-main text-white w-100 r-t">
        <h1 className="p-0 m-0 tabla-puntos">Tabla de Puntos</h1>
      </div>
      <div className="p-3">
        {ranking && ranking.length > 0 ? ranking.map((res, i) => (
               (i < 5 ? (
                <div className="col-12 d-flex flex-fill justify-content-center align-items-center user-rank" key={Math.random()} >
                <div className="user w-100">
                    {i+1}. {res.name}
                </div>
                <div className="user-points">
                    {res.puntos}
                </div>
                </div>) : (''))
             )) : rankLoad ? (
              <div className="d-flex justify-content-center align-items-center h-100 w-100">
              <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Loading...</span>
              </div>
              </div>)             
             : <p className="col-12 d-flex flex-fill justify-content-center align-items-center user-rank">El ranking esta vació</p>
          }
            </div>
            </div>
        </div>
    )
}
