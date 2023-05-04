import Header from "../../components/header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/footer";


const MainLayout = () => {
  return (
    <div>
      <Header/>
      <div style={{minHeight: "80vh", paddingTop: 105}}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
