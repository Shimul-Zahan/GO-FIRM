import React, { useContext, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { MyContext } from './AuthProvide';

const DasPrivate = ({ children }) => {

    const { login_user } = useContext(MyContext)
    const location = useLocation();

    if (login_user?.role === 'admin') {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default DasPrivate