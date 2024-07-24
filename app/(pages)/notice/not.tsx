'use client'
import React from 'react'
import { usejobStore } from '@/app/store/store'
import  useStore  from '@/app/hooks/useStore'

const Noti:React.FC =()=>{
    const mystore  = useStore(usejobStore, (state) => { return state.job})
    
    const store = usejobStore()
   
    return (
        <div>
            {mystore}
            {'스토어에서 가져옴'}
            <button onClick={()=>{
                let randomtext = Math.random().toString(36).substring(2)
                console.log(randomtext)
                store.addjob(randomtext)
            }}>눌러봐</button>
        </div>
    )
}
export default Noti