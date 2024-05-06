import React, { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { MyContext } from './AuthProvide';

const Private = ({ children }) => {

    const { login_user } = useContext(MyContext)
    const location = useLocation();

    if (login_user?.email) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default Private