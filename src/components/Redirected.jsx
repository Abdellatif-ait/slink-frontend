import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Redirected = () => {
    const [url,seturl]=useState("")
    const {id}=useParams()
    useEffect(async ()=>{
        const res=await axios.get("https://slinkbackend.herokuapp.com/link/l/"+id)
        seturl(res.data)
    },[])
  return (
    <>
    <div className='absolute p-4 top-1/2 left-1/2 align-middle  text-white text-2xl bg-black/40 '> 
        {url && <div ><a target="_blank" href={"http://"+url}>GO!</a></div>}
        {!url && <div>Loading...{id}</div>}
    </div>
    </>
    
  )
}

export default Redirected