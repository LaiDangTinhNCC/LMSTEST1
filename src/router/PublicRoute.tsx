import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute: React.FC = () => {
    const userid = localStorage.getItem('userToken');
   
    return !userid ? <Outlet /> : <Navigate to="/dashboard" />;
   
}

export default PublicRoute