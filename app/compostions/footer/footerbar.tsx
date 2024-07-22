'use client'
import React from 'react'
import foo from './footer.module.scss';

const Footermenu :React.FC = ()=>{
    return (
        <div className={foo.center}>

        
        <ul className={foo.wrap}>
            <li className={foo.sbtn}>
            <a href='#none'> 
                <span className="material-symbols-outlined">
                home
                </span>
                {/* <p> home </p> */}
                </a>
            </li>
            <li className={foo.sbtn}>
            <a href='#none'> 
                <span className="material-symbols-outlined">
                person
                </span>
                {/* <p> account </p> */}
                </a>
            </li>
            <li className={foo.sbtn}>
                <a href='#none'> 
                <span className="material-symbols-outlined">
                shopping_cart
               </span>
                {/* <p> cart </p> */}
                </a>
            </li>
            <li className={foo.sbtn}>
            <a href='#none'> 
                <span className="material-symbols-outlined">
                directions_car
                </span>
                {/* <p> driver </p> */}
                </a>
            </li>
            <li className={foo.sbtn}>
            <a href='#none'>  
                <span className="material-symbols-outlined">
                approval_delegation
                </span>
                {/* <p> driver </p> */}
                </a>
            </li>
            <div className={foo.indi}></div>
        </ul>
        </div>
    )
}

export default Footermenu