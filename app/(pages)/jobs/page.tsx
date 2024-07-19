import React,{ FC }  from "react"
import job from './jobs.module.scss';
import Listjob from './joblist'
 const Jobs :FC = ()=>{
    return (
        <>
        <div className={job.job}> 
        <div className={job.text}>

            <h1>우리동네에서 찾는 알바</h1>
            <button>구인하기</button>
            
        </div>
        </div>
        <Listjob></Listjob>
        </>
    )
}

export default Jobs