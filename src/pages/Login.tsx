import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { Link,  useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { user,islogged } from "@/store/atom/user"
import authService from "@/appwrite/auth"
import toast from "react-hot-toast"


interface formType{
    name : string,
    email : string,
    password : string,
}






function Login() {
    const { register, handleSubmit } = useForm<formType>()
    const [, setUser] = useRecoilState(user)
    const [, setIslogged] = useRecoilState(islogged)
    const navigate = useNavigate()
    


    async function formHandle(data:formType) {

        try {
            const user = await authService.login(data)
        
            if (user) {
                const userData = await authService.getCurrentUser()
              
                setUser(userData)
                setIslogged(true)
                toast.success("Logged in successfully")
                navigate("/")
                window.location.reload();
            }
        } catch (error) {
            throw error
        }
        
        
    }
    







  return (
      <div className="h-screen w-full flex justify-center items-center ">
          
          <div className="  h-3/4 w-2/4 rounded-lg  flex flex-col items-center justify-center ">
              
                <form className=" h-4/5 w-full rounded-lg  flex flex-col items-center justify-center relative " onSubmit={handleSubmit(formHandle)}> 
                    
            
            <div className="grid  w-full max-w-sm items-center gap-1.5 m-4">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" {...register("email",{required:true})}/>
            </div>
            <div className="grid  w-full max-w-sm items-center gap-1.5 m-4">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="password" {...register("password",{required:true})} />
            </div>
                    
              <Button className="absolute bottom-0 right-28 hover:bg-blue-200" >Login</Button>
                </form>
              

              <div>
                  <Link to={'/signup'} className="hover:text-blue-400 hover:underline">Don't have an account?</Link>
           </div>
                    

          </div>
          


    </div>
  )
}

export default Login