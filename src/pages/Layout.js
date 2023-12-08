import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () =>{
    return <div>
        <NavBar />
        <hr />
        <Outlet />
    </div>
}

export default Layout;