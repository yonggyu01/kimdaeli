import React,{ FC }  from "react"
import notice from './notice.module.scss'
 const Notice :FC = ()=>{
    return (
        <div className={notice.notice}>
            <div className={notice.text}>
            <h1>다양한 동네업체를 볼 수 있어요</h1>
            <button>우리 동네 사람들이
            이용하는 업체를 찾아보세요.</button>

            </div>
        </div>
    )
}

export default Notice