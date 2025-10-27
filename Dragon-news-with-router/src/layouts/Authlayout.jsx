import Navbar from "../components/Navbar";
import Outlet from "react-router-dom"

const Authlayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Authlayout;