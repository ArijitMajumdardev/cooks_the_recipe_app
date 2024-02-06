import { atom } from 'recoil'


export const isDetail = atom<boolean>({
    key: "isDetail",
    default:false
    

})


type typeRecipe = {
    [key:string]:string
}




export const recipeDetail = atom<typeRecipe | undefined>({
    key: "recipeDetail",
    default:{}
})