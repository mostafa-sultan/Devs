import React from 'react';
import { 
    Navigate
  } from "react-router-dom";
const Redirect = () => {
    console.log("from redirect");
    return (
        <div>
           { <Navigate  to="/javascript" />}
        </div>
    );
}

export default Redirect;
