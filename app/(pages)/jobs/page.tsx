import React,{ FC }  from "react"
import job from './jobs.module.scss'
 const Jobs :FC = ()=>{
    return (
        <div className={job.job}> 
        <div className={job.text}>

            <h1>우리동네에서 찾는 알바</h1>
            <button>구인하기</button>
        </div>
        </div>
    )
}

export default Jobs