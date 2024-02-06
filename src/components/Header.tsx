
import { useRecoilState } from "recoil";
import { ModeToggle } from "../components/mode-toggle"
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { user,islogged } from "@/store/atom/user"
import authService from "@/appwrite/auth";



function Header() {
  const [, setUser] = useRecoilState(user)
  const [isLogged, setIslogged] = useRecoilState(islogged)
  
  let windowWidth = window.innerWidth


  function handleLogout() {
    
    authService.logout()
    setIslogged(false)
      setUser({})

  }
  

    return (
      

        
      <div className='bg-orange-400 h-16 flex justify-center items-center rounded-b-2xl'>
        
            

        {windowWidth < 500 ? <span className='text-3xl p-5 text-black font-bold font-serif'><Link to={"/"}>Cooks</Link>
        
        <Link to={"/favourites"}><Button className='' variant={"ghost"}>Favourites</Button></Link>
        </span> :
                              
                <div className='h-16 w-full flex justify-between items-center'>
                <span className='text-3xl p-5 text-black font-bold font-serif '><Link to={"/"}>Cooks</Link></span>
                 <div className='w-2/4 flex justify-around '>
                     <Link to={"/favourites"}><Button className='' variant={"ghost"}>Favourites</Button></Link>
                     <Link to={"/signup"}><Button className='' variant={"ghost"}>signup</Button></Link>
              {
                isLogged?
                <Button variant={"ghost"} onClick={()=>{handleLogout()}}>logout</Button>
                :
                <Link to={"/login"}><Button variant={"ghost"}>login</Button></Link>
              }

            <ModeToggle />
                 </div>
            </div>}


    </div>
  )
}

export default Header