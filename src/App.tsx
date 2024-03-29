import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Fav from "./pages/Fav"
import { RecoilRoot} from "recoil"
import Footer from "./components/Footer"
import { Suspense} from "react"
import Signup from "./pages/Signup"
import Login from "./pages/Login"


function App() {

 




  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}> 
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Fav />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
        
          </Routes>
          <Footer/>
      </Router>
        </ThemeProvider>
        </Suspense>
      </RecoilRoot>
  )
}

export default App
  