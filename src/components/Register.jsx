import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Register = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error,setError]=useState("")
    const handleUsername = ({ currentTarget: input }) => {
        setusername(input.value)
    }
    const handleEmail = ({ currentTarget: input }) => {
        setemail(input.value)
    }
    const handlePassword = ({ currentTarget: input }) => {
        setpassword(input.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://slinkbackend.herokuapp.com//user/register", { username, email, password })
            window.location = "/LogInPage"
        } catch (error) {
            setError("something wrong check your info:pw must contains Uper,symbol,number")
        }


    }
    return (
        <div className='fixed bg-white/70 top-1/3 left-1/3 w-1/3 h-auto py-4'>
            <div className='p-4 flex justify-center text-white text-2xl'>
                <h2>Sign Up</h2>
            </div>
            <div className='text-black text-xl py-4'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" placeholder='username' className='block my-2 m-auto p-2' onChange={handleUsername} />
                    <input type="email" name="email" id="email" placeholder='email' className='block my-2 m-auto p-2' onChange={handleEmail} />
                    <input type="password" name="password" id="password" placeholder='password' className='block my-2 m-auto p-2' onChange={handlePassword} />
                    <div className='text-black text-lg flex justify-evenly'>
                        <Link to={"/LogInPage"} className='py-2'>LogIn?</Link>
                        <button type="submit" className='bg-white text-black font-[Poppins] py-2 px-4 rounded md:ml-8 hover:bg-white/70 
    duration-500'>SignUp</button>
                    </div>
                </form>
            </div>
        <div>
        {error}
        </div>
        </div>
    )
}

export default Register