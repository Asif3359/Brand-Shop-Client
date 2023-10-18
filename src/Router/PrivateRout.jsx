import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProvider';

const PrivateRout = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return(
            <div className=' flex justify-center items-center h-[80vh]'><span className="loading loading-spinner loading-lg"></span></div>
        )
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivateRout;