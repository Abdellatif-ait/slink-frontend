import React, { useEffect, useState } from 'react'
import { Link ,Outlet} from 'react-router-dom'
const NavBar = () => {
    let Links = [
        {
            name: "Home",
            Link: "/"
        },
        {
            name: "Links",
            Link: "/LinksPage"
        }
    ]
    const [Log,setLog]=useState("")
    useEffect(()=>{
        localStorage.getItem("token")
    },[])
    const handleLogOut=()=>{
        localStorage.removeItem("token")
        window.location.reload();
    }
    return (
        <>
        <nav className='md:flex items-center justify-between py-4 md:px-10 px-7 bg-bluehead/40'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
                <span className='text-3xl text-red-600 '>S</span>Link
            </div>
            <div>
                <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in }'>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <Link to={link.Link} className="text-white hover:text-gray-400 duration-500">{link.name}</Link>
                            </li>
                        ))
                    }
                    <form >
                    {!localStorage.getItem("token") && <Link to={"/LogInPage"}><button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>LogIn</button></Link>}
                    </form>
                    <form >
                    {(localStorage.getItem("token")) && <button onClick={handleLogOut} className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>LogOut</button>}
                    </form>
                </ul>

            </div>
        </nav>
        <Outlet />
        </>
        
    )
}

export default NavBar