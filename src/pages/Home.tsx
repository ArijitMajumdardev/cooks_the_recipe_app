import {  useEffect, useRef } from 'react'
import food1 from '../images/food1.jpg'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import axios from 'axios'
import Recipies from '@/components/Recipies'
import { recipesArr } from '@/store/atom/recipes'
import { useRecoilState } from 'recoil'
import RecipeDetail from '@/components/RecipeDetails'
import { isDetail } from '@/store/atom/detailRecipe'
import { islogged, user } from "../store/atom/user"
import authService from "../appwrite/auth"
import { Toaster } from 'react-hot-toast'
// import { favservice } from '@/appwrite/favDB'
// import { favouritesRecipe } from '@/store/atom/favrourites'




let searchfield: string = ""


export default function Home() {
  
  const [recipes , setRecipes] = useRecoilState(recipesArr)
  const ref = useRef<HTMLInputElement>(null)
  const recipeDiv = useRef<HTMLInputElement>(null)
  const [isdetail] = useRecoilState(isDetail)
  // const [favourites,setFavourites] = useRecoilState(favouritesRecipe)
 
  const [User] = useRecoilState(user)
  const [, setUser] = useRecoilState(user)
  const [, setIslogged] = useRecoilState(islogged)

  let userEmail = User?.email as string;
    
    userEmail = userEmail?.split("@")[0]

  async function func () {
    const userData = await authService.getCurrentUser()
    if (userData) {
      setUser(userData)
    setIslogged(true)
    
    }
    // let srr = await favservice.getPost(userEmail) as unknown  as string[]
    // setFavourites(srr)
  }



  useEffect(() => {
    func()
  }, [])
  


  

  // useEffect(() => {
  //   favPost()
  // }, [])
  

  // useEffect(() => {
  //   if (favourites.length === 0) {
  //     favPost()
  //   }
  //   updatefavPost()
  // }, [favourites])
  



  // async function favPost() {
   

  //   await favservice.createPost({favourites: favourites , email: userEmail, userID: userEmail})
  // }


  // async function updatefavPost() {
  //   let userEmail = User?.email as string;
    
  //   userEmail = userEmail.split("@")[0]

  //   await favservice.updatePost({favourites: favourites , email: userEmail, userID: userEmail})
  

  // }
  





  async function handleSearch() {
   
    searchfield= ref.current?ref.current.value:""
      
    
   try {
     const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+searchfield)    
     console.log(response.data.meals)
     setRecipes(response.data.meals)
    
   } catch (err) {
    console.error("Error fetching data:", err);
    
    }
  }
  

  useEffect(() => {
    ref.current?.focus()

    if (recipeDiv.current) {
      recipeDiv.current.scrollIntoView({behavior:'smooth'})
    }

    window.addEventListener("keydown", (e) => {e.key==="Enter"?handleSearch():""})
    
    return () => {
      window.removeEventListener("keydown", (e) => { e.key === "Enter" ? handleSearch() : "" });
    };

    
  },[recipes])





  return (

    <div className='min-h-screen '>
      <div className="min-h-screen ">
          <div className='   relative h-screen' >
        <img  src={food1} alt="img" className="w-full h-full object-cover opacity-50 " />
        
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">



          <div className='pb-32 h-3/4 w-3/4 flex flex-col justify-around  items-center text-center '>
            <h1 className='text-5xl font-serif'> 
              Simple And Tasty Recipes
            </h1>
            <span className='opacity-65'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo repellendus vel reprehenderit iusto fugit, excepturi ad ducimus facilis velit blanditiis .</span>
          </div>



            
            <div className="flex w-full max-w-sm items-center space-x-2 p-2 mb-28">
            <Input ref={ref} type="search" placeholder="Search" required className='bg-slate-50 text-black border-none  '/>
              <Button type="submit" onClick={handleSearch}><Search className='text-yellow-700' /></Button>
            </div>
           


        </div>
              
      </div>
      



          
      </div>


      
      
      
            
              
            {
              recipes?.length === 0 ? "" : <div ref={recipeDiv}><Recipies searchfield={searchfield} /> </div>
      }
      

      {/* for recipe details */}

      {
        !isdetail ? <div className='h-screen fixed z-50 w-full  left-0 top-0 flex justify-center items-center pointer-events-none'>
          
        </div> :<div className='h-screen fixed z-50 w-full  left-0 top-0 flex justify-center items-center ' >
      {
      

      isdetail &&<RecipeDetail />


      }
        </div >
            
          
      }
      <Toaster />
      

      </div>
  )
}



