import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Cookies from "universal-cookie";
import AuthComponent from "./AuthComponent";

const cookies = new Cookies();

//receives a component and propertys represented as ...rest

export default function ProtectedRoutes ({component: Component, ...rest }) {
  const token = cookies.get('TOKEN');
  
 if(token){
    return <AuthComponent {...rest} />;
  } else {
    //get back to landing
    return (
      <Navigate
        to={{
          pathname: '/',  
        }}
        />
    );}
}