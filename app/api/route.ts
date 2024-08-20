import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
import { collection, getDocs,addDoc ,query,orderBy,updateDoc,deleteDoc,doc,setDoc, Timestamp } from "firebase/firestore";
import {db} from '../firebase'

const mydb = collection(db, "kimdeali")

export async function GET (req : NextRequest)  {

  const response = await Getitem();

  
      return NextResponse.json(response,{ status : 200 })
    }

    async function Getitem (){
      const querySnapshot = await getDocs( query(mydb,orderBy("create")));
      if(querySnapshot.empty){
        return [];
      }
      const result = [] as any
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data(),'가져온거 값')
        const board = {
          userid : doc.data()["userid"],
          content : doc.data()["content"],
          create : doc.data()["create"],
          
        } 
        result.push(board)
    })
    return result
    }

    async function Additem(content:string,create:string,userid:string){
    const newboardRef =await addDoc(mydb,{content,create,userid});
    const data ={
      content,
      id:newboardRef.id,
      create,
      userid 
    }
return data
    }
    export async function POST (req : NextRequest)  {
      console.log(req , 'axios 로 받을거임')
      const {content,create,userid} =await req.json()
      const calldata = await Additem(content,create,userid) 
      const response = {
        msg : "데이터추가성공",
        data : calldata
    }  
      return NextResponse.json(response,{ status : 201 })
    }