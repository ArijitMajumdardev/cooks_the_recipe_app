import { atom } from "recoil";


export type userType = {
    
    [key:string]:string|boolean|{}
}|null

export const user = atom<userType>({
    key: "user",
    default:{}
})



export const islogged= atom<boolean>({
    key: "islogged",
    default:false
})