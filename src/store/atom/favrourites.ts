import { atom } from "recoil";

type Tfavourite = string



export const favouritesRecipe = atom<Tfavourite[]>({
    key: "favouriteRecipe",
    default:[]
})



