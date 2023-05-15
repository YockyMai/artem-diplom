import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import MainLayout from "./layouts/main-layout";
import SignupPage from "./pages/signup";
import AboutUsPage from "./pages/about-us";
import CartPage from "./pages/cart";
import SigninPage from "./pages/signin";
import AdminPanelMain from "./pages/admin-panel/main";
import AddProduct from "./pages/admin-panel/add-product";
import RemoveProduct from "./pages/admin-panel/remove-product";
import EditProduct from "./pages/admin-panel/edit-product";
import {useAppSelector} from "./redux/hook/hook";

function App() {
  const isAuth = useAppSelector(state => state.isAuth.isAuth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout/>} >
            <Route index element={<Main />}/>
            <Route path={"aboutUs"} element={<AboutUsPage />}/>
            {!isAuth && <Route path={"signup"} element={<SignupPage />}/>}
            {!isAuth && <Route path={"signin"} element={<SigninPage />}/>}
            <Route path={"cart"} element={<CartPage />}/>
            <Route path={'admin-panel'} element={<AdminPanelMain/>}/>
            <Route path={'admin-panel/add-product'} element={<AddProduct/>}/>
            <Route path={'admin-panel/remove-product'} element={<RemoveProduct/>}/>
            <Route path={'admin-panel/edit-product'} element={<EditProduct/>}/>
            <Route path={'*'} element={<Main/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
