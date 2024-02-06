import authService from "@/appwrite/auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { user } from "@/store/atom/user"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"


interface formType{
    name : string,
    email : string,
    password : string,
}


function Signup() {

    const { register, handleSubmit } = useForm<formType>()
    const [, setUser] = useRecoilState(user)
    const navigate = useNavigate()


   async function formHandle(data:formType) {

        try {
            const user = await authService.createAccount(data)
            console.log(user)
            if (user) {
                const userData = await authService.getCurrentUser()
               console.log(userData)
                setUser(userData)
                toast.success("Account creacted successfully")
                
                navigate("/")
                
            }
        } catch (error) {
            throw error
        }
        
        
    }






  return (
      <div className="h-screen w-full flex justify-center items-center ">
          
          <div className="  h-3/4 w-2/4 rounded-lg  flex flex-col items-center justify-center ">
              
                
                    
                  <form className="  h-4/5 w-full rounded-lg  flex flex-col items-center justify-center relative "  onSubmit={handleSubmit(formHandle)}>
                      
                  <div className="grid  w-full max-w-sm items-center gap-1.5 m-4">
                    <Label htmlFor="name">Name</Label>
                      <Input type="name" id="name" placeholder="Name" {...register("name",{required:true})} />
                </div>
                <div className="grid  w-full max-w-sm items-center gap-1.5 m-4">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" {...register("email",{required:true})} />
                </div>
                <div className="grid  w-full max-w-sm items-center gap-1.5 m-4">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="password" {...register("password",{required:true})} />
                </div>
                        
                <Button className="absolute bottom-0 right-28 hover:bg-blue-200" >Signup</Button>


                  </form>
                  

                  <div>
                  <Link to={'/login'} className="hover:text-blue-400 hover:underline">Already have an account?</Link>
                </div>

                </div>
              

                
                    

          </div>
          


  )
}

export default Signup