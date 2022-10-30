import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //loading
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  //check user login or not
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoutes;

/*
private routes
i.create a privateRoutes.js {children} 

only allow authenticate user to visit this routes

solve 1st problem
1.
. get user by useContext
. condition set to user exist or not if not avaible then
navigate to login page.if login then children will bew send
.goto routes and set private routes and set as children news
.redirect use to the route they wanted to go before login
   -- set location (const location=useLocation)
   -- goto navigate set state and daynamic location and repalce
     --<Navigate to="/login" state={{from:location}} replace></Navigate>;   

    -- then goto login page
        -- get location by use location ()
            const location=useLocation();
            const from=location.state?.from?.pathname || '/'
        Goto handleSubmit
          --navigate to write it from
            navigate(from,{replace:true})

2nd problem is reloading problem and goto login page problem solve

--goto authProvider
        --create a state with loading 
         --set loading into login,register,create user provider
         -useEffect setLoading(false) other loading will not stop 
         --last set loading into authInfo 
        --goto private routes
          --get loading by useContext
          --call loading 
          --if (loading) {
    return <Spinner animation="border" variant="primary" />;
  } 
     */
