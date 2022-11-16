import React from 'react'
import Rank from './pages/Rank'
import Login from './pages/Login'

export default function UserNotLoged({
    ranking,
    setRanking,
    errorMsj,
    setLoading,
    loading
}) {
    return (
        <div className="row w-100">
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center order-2 order-md-1 mt-5 mt-md-0 r-t r-b">
            <Rank ranking={ranking} setRanking={setRanking} setLoading={setLoading} loading={loading} />
            </div>   
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center order-1 order-md-2 mt-4 mt-md-0 r-t r-b">
              <Login errorMsj={errorMsj} />
            </div>
        </div>
    )
}
