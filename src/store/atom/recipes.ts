import { atom } from "recoil";

type typeRecipe = {
    [key:string]:string
}

export const recipesArr = atom<typeRecipe[]>({
    key: 'recipesArr', 
    default: [], 
  });