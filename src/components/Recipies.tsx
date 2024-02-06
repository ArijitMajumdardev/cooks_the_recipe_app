
import { isDetail } from '@/store/atom/detailRecipe'
import RecipeCard from './RecipeCard'
import { recipesArr, typeRecipe } from '@/store/atom/recipes'
import { useRecoilState } from 'recoil'


interface recipeCompPrope  {
  searchfield? : string
}


export default function Recipies({searchfield}: recipeCompPrope) {
  const [recipes] = useRecoilState(recipesArr)

  







  let windowWidth = window.innerWidth
  return (
    <div className='min-h-screen  '>
    
      {
        searchfield? <div className='p-10 text-center'>
        <h1 className='text-xl'> Showing Results For "{searchfield}" :</h1>
      </div>:""
     }


      {
        windowWidth <550 ?  <div className='min-h-screen  grid grid-cols-1 gap-20 place-items-center '>
          {recipes.map((e) => (
          
              <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal} recipeKey={e.idMeal} recipe={e} />
              
            ))}
            
        </div>
          :
          <div className='min-h-screen  grid grid-cols-3 gap-20 place-items-center '>
          {recipes.map((e) => (
                     
                      <RecipeCard image={e.strMealThumb} key={e.idMeal} title={e.strMeal} recipeKey={e.idMeal} recipe={e} />
                     
              ))}
              
          </div>

      }
          

      
      
      </div>
  )
}
