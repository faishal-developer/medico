import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import {AuthContext} from './AuthContext'

const PrivateRoute = ({children,...rest}) => {
    const {firebaseData,isLoading} = useContext(AuthContext)
    
    if(isLoading){
        return <h1>loading...</h1>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                firebaseData?.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;