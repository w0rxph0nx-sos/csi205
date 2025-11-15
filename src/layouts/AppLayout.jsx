import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

function AppLayout  ({products, carts , setToken })  {
    return (
       
        <div className="app-layout-container">

            <AppHeader />
            <AppNavbar products={products} carts={carts} setToken={setToken}/>
            <Outlet />
            <AppFooter />



        </div>

    )
}

export default AppLayout;