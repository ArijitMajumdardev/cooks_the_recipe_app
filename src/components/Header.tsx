import React from 'react'
import { ModeToggle } from "../components/mode-toggle"
import { useEffect, useState } from "react"; 
import { Button } from './ui/button';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';


function Header() {

 

  let windowWidth = window.innerWidth
  

    return (
      

        
      <div className='bg-orange-400 h-16 flex justify-center items-center rounded-b-2xl'>
        
            

    {windowWidth < 500 ? <span className='text-3xl p-5 text-black font-bold font-serif'>Cooks</span> :
                              
                <div className='h-16 w-full flex justify-between items-center'>
                <span className='text-3xl p-5 text-black font-bold font-serif '><Link to={"/"}>Cooks</Link></span>
                 <div className='w-2/4 flex justify-around '>
                     <Link to={"/favourites"}><Button className='' variant={"ghost"}>Favourites</Button></Link>
                     <Link to={"/signup"}><Button className='' variant={"ghost"}>signup</Button></Link>
                     <Link to={"/login"}><Button variant={"ghost"}>login</Button></Link>
            <ModeToggle />
                 </div>
            </div>}


    </div>
  )
}

export default Header