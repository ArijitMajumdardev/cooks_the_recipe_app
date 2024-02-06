import { atom } from "recoil";

export type typeRecipe = {
    [key:string]:string
}

export const recipesArr = atom<typeRecipe[]>({
    key: 'recipesArr', 
    default: [], 
  });