import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "./Footer";

const PrivateRoute = () => {
    // const { isOlder } = useSelector((state) => state.isOlder)
    // console.log(isOlder)
    return <>
        <Outlet />
        <Footer />
    </>
}

export default PrivateRoute