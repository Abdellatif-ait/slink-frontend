import React, { useState } from 'react'
import axios from 'axios'

const Hero = () => {
  const [fullLink, setfullLink] = useState("")
  const handleChange = ({ currentTarget: input }) => {
    setfullLink( input.value)
  }
  const user=localStorage.getItem('token')
  const hundleSubmit =async (e) => {
    e.preventDefault();
    if(user){
      await axios.post("https://slinkbackend.herokuapp.com/link/add",{user,fullLink})
      window.location.reload()
    }else{
      window.location="/LogInPage"
    }
  }
  return (
    <div className='absolute p-4 left-1/5 top-1/3 w-full m-l-4' >
      <form onSubmit={hundleSubmit}>
        <input type="text" name="link" placeholder='fullLink' className='p-2 w-1/3' onChange={handleChange} required/>
        <button type="submit" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full m-4' name='submit'>Short It</button>
      </form>
    </div>
  )
}

export default Hero