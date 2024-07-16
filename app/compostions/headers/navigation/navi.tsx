'use client'
import React,{ FC }  from "react"
import {Navilist} from "./navilist";
import Navicss from './navi.module.scss'
export const Navi:FC =() =>{
    const navilist = [
        {
            title : '구인',
            src : 'jobs'
        },
        {
            title : '동네커뮤니티',
            src : 'notice'
        },
        
    ]



    return (
        <div className={Navicss.flexbox}>
            <a href="/">
                <img src="/kimlogo(1).png" alt="logo" className={Navicss.logo} />
            </a>
            <Navilist navilist={navilist}></Navilist>
        </div>
    )
}