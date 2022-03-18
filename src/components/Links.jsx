import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Links = () => {
    const [url,seturl]=useState([{fullLink:"",shortLink:""}])
    const user=localStorage.getItem('token')
    
    useEffect(async ()=>{
        if(user){
            const res=await axios.get("https://slinkbackend.herokuapp.com/link/"+user)
            seturl(res.data)
        }else{
            window.location="/LogInPage"
        }
    },[])
  return (
    <div className='grid grid-cols-2 gap-4 bg-white m-8'>
        <div className='p-4 bg-white opacity-100 border-r-2'>
            <h2 className='text-4xl text-black p-4'>fullLink</h2>
            {
               url.map((item)=>(
                   <p className='border-b-4 text-xl' key={item.fullLink}>{item.fullLink}</p>
               )) 
            }
        </div>
        <div className='p-4 '>
            <h2 className='text-4xl text-black p-4'>Short fullLink</h2>
            {
               url.map((item)=>(
                   <Link to={"/l/"+item.shortLink} className='block border-b-4 text-xl' key={item.shortLink}>{item.shortLink}</Link>
               )) 
            }
        </div>
    </div>
  )
}

export default Links