import React, { useContext } from 'react';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <PropagateLoader></PropagateLoader>
    } else {
        return (
            <div>

            </div>
        );
    }
};

export default PrivateRoute;