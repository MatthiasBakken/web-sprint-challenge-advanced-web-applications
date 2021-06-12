import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import BubblePage from "./BubblePage";

const PrivateRoute = ( props ) => {
  
  const condition = localStorage.getItem( "token" );

  return condition ?
    ( <Route path="/bubbles" component={BubblePage} /> ) :
        (<Redirect  to="/"  />);
};

export  default  PrivateRoute;