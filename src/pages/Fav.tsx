import RecipeCard from '@/components/RecipeCard'
import Recipies from '@/components/Recipies'
import { favouritesRecipe } from '@/store/atom/favrourites'
import React from 'react'
import { useRecoilState } from 'recoil'


export default function Fav() {
  const [favourites, setFavourites] = useRecoilState(favouritesRecipe)
 

  

  return (
    <div>

{
              favourites?.length === 0 ? "" : <Recipies />
          }


    </div>
  )
}


function favouriteComponent() {

  const [favourites, setFavourites] = useRecoilState(favouritesRecipe)
  
  let windowWidth = window.innerWidth
  return (
    <div className='min-h-screen  '>
  


      {
        windowWidth <550 ?  <div className='min-h-screen  grid grid-cols-1 gap-20 place-items-center '>
        {favourites.map((e) => (
          <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal} recipeKey={e.idMeal} />
            ))}
            
        </div>
          :
          <div className='min-h-screen  grid grid-cols-3 gap-20 place-items-center '>
          {recipes.map((e) => (
            <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal}  recipeKey={e.idMeal} />
              ))}
              
          </div>

      }
          

      
      
      </div>
  )
  
}