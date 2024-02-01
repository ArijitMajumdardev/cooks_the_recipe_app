
import FavouriteComponent from '@/components/FavouriteComponent'
import { favouritesRecipeArray } from '@/store/atom/favrecipeArr'
import { favouritesRecipe} from '@/store/atom/favrourites'
import axios from 'axios'
import { useEffect } from 'react'



import { useRecoilState} from 'recoil'





export default function Fav() {
  const [favourites] = useRecoilState(favouritesRecipe)
  const [,setfavArr] = useRecoilState(favouritesRecipeArray)
 
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
  
  
 

  

  return (
    <div className='min-h-screen  '>

{
              favourites?.length === 0 ? "" : <FavouriteComponent/>
          }

     

    </div>
  )
}

