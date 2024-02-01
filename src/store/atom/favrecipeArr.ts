import { atom } from "recoil"


type typeRecipe = {
    [key:string]:string
}




export const favouritesRecipeArray = atom<typeRecipe[]>({
    key: "favouritesRecipeArray",
    default:[]
})