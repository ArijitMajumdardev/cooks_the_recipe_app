import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Fav from "./pages/Fav"
import { RecoilRoot } from "recoil"
import Footer from "./components/Footer"


function App() {
;
  return (
    <RecoilRoot>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Fav />} />
        
          </Routes>
          <Footer/>
      </Router>
      </ThemeProvider>
      </RecoilRoot>
  )
}

export default App
  