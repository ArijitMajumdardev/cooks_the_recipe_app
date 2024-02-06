
import { useRecoilState } from "recoil"
import RecipeCard from "./RecipeCard"
import { favouritesRecipeArray } from "@/store/atom/favrecipeArr"







interface FavouriteComponentProps {
  handleRecipeClick: Function;
  windowWidth:number
}


export default function FavouriteComponent({ handleRecipeClick,windowWidth }:FavouriteComponentProps ) {

  const [favArr] = useRecoilState(favouritesRecipeArray)
  



    return (
      <div className='min-h-screen  '>
    
  
  
        {
          windowWidth < 550 ?  <div className=' min-h-screen  grid grid-cols-1 gap-20 place-items-center '>
          {favArr?.map((e) => (
              <div key={e.idMeal} onClick={()=>{handleRecipeClick(e)}}>
              <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal} recipeKey={e.idMeal}  />
            </div>
              ))}
              
          </div>
            :
            <div className=' min-h-screen  grid grid-cols-3 gap-20 place-items-center '>
            {favArr?.map((e) => (
                <div key={e.idMeal} onClick={()=>{handleRecipeClick(e)}}>
                <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal} recipeKey={e.idMeal}  />
              </div>
                ))}
                
            </div>
  
        }
            
  
        
        </div>
    )
    
  }

