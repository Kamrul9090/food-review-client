import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return <PropagateLoader></PropagateLoader>
    }

    if (user) {
        return children;
    }
    else {
        <Navigate to='/login' state={{ from: location }}></Navigate>
    }
};

export default PrivateRoute;