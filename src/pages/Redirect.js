import React from 'react';
import { Navigate } from "react-router-dom";

const Redirect = () => {
    return <Navigate to="/javascript" replace />;
}

export default Redirect;
