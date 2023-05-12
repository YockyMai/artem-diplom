import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import MainLayout from "./layouts/main-layout";
import SignupPage from "./pages/signup";
import AboutUsPage from "./pages/about-us";
import CartPage from "./pages/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout/>} >
            <Route index element={<Main />}/>
            <Route path={"aboutUs"} element={<AboutUsPage />}/>
            <Route path={"signup"} element={<SignupPage />}/>
            <Route path={"cart"} element={<CartPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
