import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const handleEmail=({ currentTarget: input })=>{
        setemail(input.value)
    }
    const handlePassword=({ currentTarget: input })=>{
        setpassword(input.value)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {data:res}=await axios.post("https://slinkbackend.herokuapp.com/user/login",{email,password})
        localStorage.setItem("token",res.data)
            window.location="/"
    }
    return (
        <div className='fixed bg-white/70 top-1/3 left-1/3 w-1/3 h-auto py-4'>
            <div className='p-4 flex justify-center text-white text-2xl'>
                <h2>LogIn</h2>
            </div>
            <div className='text-black text-xl py-4'>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" className='block my-2 m-auto p-2' placeholder='email' onChange={handleEmail}/>
                    <input type="password" name="password" id="password" className='block my-2 m-auto p-2' placeholder='password' onChange={handlePassword}/>
                    <div className='text-black text-lg flex justify-evenly'>
                        <Link to={"/RegisterPage"} className='py-2'>Register?</Link>
                        <button type="submit" className='bg-white text-black font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-white/70 
    duration-500'>LogIn</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Login