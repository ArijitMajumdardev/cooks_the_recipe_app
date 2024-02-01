
import { useRecoilState } from "recoil"
import RecipeCard from "./RecipeCard"
import { favouritesRecipeArray } from "@/store/atom/favrecipeArr"

export default function FavouriteComponent() {

    const [favArr] = useRecoilState(favouritesRecipeArray)

  
    let windowWidth = window.innerWidth
    return (
      <div className='min-h-screen  '>
    
  
  
        {
          windowWidth <550 ?  <div className='min-h-screen  grid grid-cols-1 gap-20 place-items-center '>
          {favArr.map((e) => (
            <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal} recipeKey={e.idMeal} />
              ))}
              
          </div>
            :
            <div className='min-h-screen  grid grid-cols-3 gap-20 place-items-center '>
            {favArr.map((e) => (
              <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal}  recipeKey={e.idMeal} />
                ))}
                
            </div>
  
        }
            
  
        
        </div>
    )
    
  }

