'use client'
import React,{ FC }  from "react"
import job from './jobs.module.scss';
import { Sample } from "@/app/models/model";
import {db} from '@/app/firebase'
import axios, { AxiosResponse } from "axios";

 const Listjob :FC = ()=>{
    console.log(db,'db')    

    const sample:Sample[] =[ 
        {
            title: '급구 사람한명',
            pay : '시급 10000원',
            location : '송파구',
            etc : '간단한 물건옮기기',
            src : '/kimlogo.jpg'
        },
        {
            title: '영화관 함께하실분 모집',
            pay : '시급 10000원',
            location : '천호동',
            etc : '극장 혼자가기 좀 그래서 같이가실분 모집',
             src : '/kimlogo.jpg'
        },
        {
            title: '뷔페 함께가실분',
            pay : '시급 10000원',
            location : '송파구',
            etc : '뷔페 혼자가기 좀 그래서 같이가실 파티원 모집중',
             src : '/kimlogo.jpg'
        },
        {
            title: '영화관 함께하실분 모집',
            pay : '시급 10000원',
            location : '천호동',
            etc : '극장 혼자가기 좀 그래서 같이가실분 모집',
             src : '/kimlogo.jpg'
        },
    ]
    async function Testcode (){
        // 리엑트 쿼리로 처리해야함   테스트 코드 실행해보자
       let postdata:AxiosResponse = await axios.post('/api',{
          content : 'hi',
          create : 2024,
          userid : 'kim'})
          const result = postdata.data
          return result
          
       }
    return (
        <div className={job.line}>

            <h1>인기 구인글</h1>

            <ul>
                {sample.map((item, idx)=> <li key={item?.title}>
                    <div className={job.wrapbox}>
                        <img src={item.src}/>
                        <h2>{item.title}</h2>
                        <p>{item.pay}</p>
                        <p>{item.location}</p>
                    </div>
                </li>)}
            </ul>
            <div className={job.btn}>
            <button onClick={()=>{
                Testcode()
            }}>테스트 글올리기</button>
            <button>구인글 더보기</button>
            </div>
        </div>
    )
}

export default Listjob