import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import MainLayout from "./layouts/main-layout";
import SignupPage from "./pages/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout/>} >
            <Route index element={<Main />}/>
            <Route path={"/signup"} element={<SignupPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
