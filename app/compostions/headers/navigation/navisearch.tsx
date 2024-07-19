'use client'
import Navicss from './navi.module.scss';
import React from 'react'

const Searching : React.FC =()=>{
    return (
        <input type="text" placeholder='물품이나 동네를 검색해보세요' className={Navicss.input}/>
    )
}

export default Searching