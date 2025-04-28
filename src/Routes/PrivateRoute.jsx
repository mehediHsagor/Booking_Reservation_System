import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <progress></progress>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" replace={true}></Navigate>;
        
    
};

export default PrivateRoute;