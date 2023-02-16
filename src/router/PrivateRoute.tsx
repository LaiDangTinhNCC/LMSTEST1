import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    const userid = localStorage.getItem('userToken');
    // console.log(accessToken)
    return (
        userid ?  <Outlet /> : <Navigate to="/login"/>
    )
}

export default PrivateRoute