import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { CirclesWithBar } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    outerCircleColor="#4fa94d"
                    innerCircleColor="#4fa94d"
                    barColor="#4fa94d"
                    ariaLabel="circles-with-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate to={"/login"}></Navigate>

};

export default PrivateRoute;