import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { is_auth } from '../../home/services/components/auths/authAction';
const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
    //const isAuth = is_auth !== null ? is_auth : Boolean(localStorage.getItem("isAuthenticated"));
    /**
    useEffect(() => {
        if (!isAuth) {
            window.location.href = "/login";
        } 
        return () => { }
    }, [])
     */

    const isAuth = is_auth

     if (!isAuth) {
         window.location.href = "/login";
         return null
     }
   
    return (
        <Route
            {...rest}
            render={props =>
                isAuth ?
                    <Layout>
                        <Component {...props} />
                    </Layout>
                    :
                    <Redirect to="/login" />
            }
        />
    )
}

export default PrivateRoute
