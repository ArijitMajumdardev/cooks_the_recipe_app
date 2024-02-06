import { Heart } from 'lucide-react'
import { useRecoilState } from 'recoil'
import { favouritesRecipe } from '@/store/atom/favrourites'
import { typeRecipe } from '@/store/atom/recipes'
import { isDetail, recipeDetail } from '@/store/atom/detailRecipe'
import { islogged } from '@/store/atom/user'
import toast from 'react-hot-toast';



interface recipeCompPrope  {
  image?: string,
  title?: string,
  recipeKey: string
  recipe?:{}
}

export default function RecipeCard({ image, title, recipeKey ,recipe}: recipeCompPrope) {
  
  const [favourites, setFavourites] = useRecoilState(favouritesRecipe)
  const [isdetail,setisdetail] = useRecoilState(isDetail)
  const [, setrecipedetail] = useRecoilState(recipeDetail)
  const [isLogged] = useRecoilState(islogged)
 

  
  
  


  async function handleFav(recipeKey: string) {

    let arr: string[] = [...favourites]
    
    if (!arr.includes(recipeKey)) {
      arr.push(recipeKey)
    }
    else {
      arr = arr.filter((e) => {
        return e !== recipeKey
      })
    }
   
    setFavourites(arr)


   



  
  }

  function handleDisabledLike() {
    toast.error('Login to add to favourites')
  }




  function handleRecipeClick(recipe?: typeRecipe) {
    
    setrecipedetail(recipe)
    setisdetail(!isdetail)
    
  }






  return (
    <div className=' w-72 h-72 m-2 relative rounded-lg cursor-pointer  opacity-80 hover:opacity-100  hover:scale-110 transition ease-in-out delay-50  '>
      

      <img src={image} alt="" className='w-full h-full object-cover rounded-lg ' onClick={()=>{handleRecipeClick(recipe)}}/>
      



      <div className='h-12 w-full bg-orange-100 absolute bottom-0 left-0 z-40'>
        <div className='w-6 h-6 absolute bottom-0 right-0 z-20 mr-3 mb-3 cursor-pointer '>
          


          {
            isLogged ? <button onClick={() => { handleFav(recipeKey) }} >
            <LikeComponent recipeKey={recipeKey} />
          </button>
          
            : <button onClick={()=>{ handleDisabledLike()}}><LikeComponent recipeKey={recipeKey} /></button>
            
}



          {/* <button onClick={() => { handleFav(recipeKey) }} >
            <LikeComponent recipeKey={recipeKey} />
          </button>
           */}



          </div>
          <h2 className='absolute bottom-0 left-0 z-50 ml-3 text-black'>{title}</h2>
        
      </div>

      
          
    </div>
  )
}




function LikeComponent({recipeKey}:recipeCompPrope) {
  const [favourites] = useRecoilState(favouritesRecipe)


  return (
    
    < >
    {
      favourites.includes(recipeKey)?  <Heart size={30} color="#df437a" strokeWidth={3} className='hover:-translate-y-1 hover:scale-125 transition ease-in-out delay-50 duration-100 ' />:  <Heart size={30} color="grey" strokeWidth={3} className='hover:-translate-y-1 hover:scale-125 transition ease-in-out delay-50 duration-100 ' />
}
      </>
  )
  
}