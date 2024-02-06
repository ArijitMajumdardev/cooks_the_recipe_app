
import FavouriteComponent from '@/components/FavouriteComponent'
import RecipeDetail from '@/components/RecipeDetails'
import { isDetail, recipeDetail } from '@/store/atom/detailRecipe'
import { favouritesRecipeArray } from '@/store/atom/favrecipeArr'
import { favouritesRecipe} from '@/store/atom/favrourites'
import { typeRecipe } from '@/store/atom/recipes'
import axios from 'axios'
import { useEffect} from 'react'



import { useRecoilState} from 'recoil'





export default function Fav() {
  const [favourites] = useRecoilState(favouritesRecipe)
  const [, setfavArr] = useRecoilState(favouritesRecipeArray)
  const [isdetail, setisdetail] = useRecoilState(isDetail)
  const [,setrecipedetail] = useRecoilState(recipeDetail)

  
  





  function handleRecipeClick(recipe?: typeRecipe) {
    
    setrecipedetail(recipe)
    setisdetail(!isdetail)
    
  }

  

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = favourites.map(async (e) => {
          const fav = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + e);
          return fav.data.meals[0];
        });
  
        const newData = await Promise.all(requests);
        setfavArr(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately, e.g., show a user-friendly message
      }
    };
  
    fetchData();
  
  }, [favourites]);
  
  
 

    
  let windowWidth = window.innerWidth
  
  // console.log(windowWidth)
  


  

  return (
    <div className='min-h-screen relative flex justify-center items-center'>

{/* {
        favourites?.length === 0 ? "" : <FavouriteComponent handleRecipeClick={handleRecipeClick} windowWidth={windowWidth} />
      } */}
      
      <FavouriteComponent handleRecipeClick={handleRecipeClick} windowWidth={windowWidth} />

     <RecipeDetail/>


    </div>
  )
}

