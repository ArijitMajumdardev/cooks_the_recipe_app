import { isDetail, recipeDetail } from "@/store/atom/detailRecipe"
import { ArrowUpRightFromSquare, X } from "lucide-react"
import { useRecoilState } from "recoil"


function RecipeDetail() {
    const [isdetail, setisdetail] = useRecoilState(isDetail)
  const [recipe] = useRecoilState(recipeDetail)
 
  
  let youtubeId = recipe?.strYoutube?.split("=")[1]
  let recipekeys:string[]  = Object.keys(recipe?recipe:{})
  let recipevalues = Object.values(recipe?recipe:{})
  




    function handleCloseBtn() {
    
        setisdetail(!isdetail)
        
      }



  return (
      <>
      {
        isdetail && (
          <div className="  h-[550px] w-[70%] absolute z-50  max-sm:h-screen max-sm:w-full  " >
          
            <button className=' w-9 h-9 absolute right-0 m-1 hover:scale-150 ease-in-out transition' onClick={handleCloseBtn}>
            <X size={32} color="#ff7070" strokeWidth={3} />
            </button>
            
                      

        <div className="bg-orange-200 h-full w-full flex flex-col items-center  overflow-auto overflow-x-hidden" style={{scrollbarWidth:"thin",scrollbarColor:"transparent transparent"}}>
                          

              <iframe
              className="mt-6"
              width="420"
              height="230"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
              
              <div className=" text-black h-3/5 w-full m-2 flex flex-col">

                <span className="text-xl  text-center ">{ recipe?.strMeal}</span>
                
                <div className="text-xl  ml-4">
                  <span className="text-xl border-b-2 text-center mb-6-">Ingredients</span>
                      <ul className="mt-10">
                    {
                      recipekeys.map((e,index) => {

                        if (e.startsWith('strIngredient')) {
                          
                          if (e.startsWith('strIngredient') && !recipevalues[index]) {
                            return null
                          }
                          return <li>
                            {e} - {recipevalues[index]}
                          </li>
                         
                        }
                       
                      })
                     
                      }
                      
                        </ul>

                </div>

                <div className="text-xl p-10  w-full m-2 flex flex-col">
                <span className="text-xl border-b-2 text-center">Instructions</span>

                  
                    <p>{recipe?.strInstructions}</p>

                  


                  

                </div>
                

              </div>


              <div className="bg-slate-300 w-50">
                
                  <a  href={recipe?.strSource} target="blank"   className=" underline  p-10 text-lg"><ArrowUpRightFromSquare size={20} />
                  </a>
                  
                </div>
              

            </div>

                      
            
    </div>
           )
        
      }

    </>
  )
}

export default RecipeDetail