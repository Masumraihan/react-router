import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {

    

    return (
        <div>
            <Navbar />
            <div className="p-32 border-4 border-purple-600">
                <Outlet />
            </div>

            <div className="text-center">
                footer
            </div>
        </div>
    );
};

export default Root;