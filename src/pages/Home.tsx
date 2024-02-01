import {  useEffect, useRef } from 'react'
import food1 from '../images/food1.jpg'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import axios from 'axios'
import Recipies from '@/components/Recipies'
import { recipesArr } from '@/store/atom/recipes'
import { useRecoilState } from 'recoil'


let searchfield: string = ""


export default function Home() {

  const ref = useRef<HTMLInputElement>(null)
  const recipeDiv = useRef<HTMLInputElement>(null)


  const [recipes , setRecipes] = useRecoilState(recipesArr)
  
  ref.current?.focus()





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

    if (recipeDiv.current) {
      recipeDiv.current.scrollIntoView({behavior:'smooth'})
    }
    
  },[recipes])





  return (

    <div className='min-h-screen'>
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
            
            

      </div>
  )
}



