'use client'

import React from 'react'
interface ownprops {
    title : string
    src : string
}
interface navilistprops {
navilist : ownprops[]
} 
export const Navilist:React.FC<navilistprops> = ({navilist})=>{
    console.log(navilist)
    return (
        <ul>
           {navilist.map((item,idx)=> <li key={item.title+idx}>
           <a href={item.src}>
            {item.title}
            </a> 
           </li>)}
        </ul>
    )
}