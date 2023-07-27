import React, { useState } from "react";

const AuthContext = React.createContext({
   token: '',
   isLoggedIn:false,
   login: (token) => {} ,
   logout : () => {}
});

export const AuthContextProvider = (props) => {
    const IntitialToken = localStorage.getItem('token'); 
    const [token,setToken] = useState(IntitialToken);

    const userIsLoggedIn = !!token; 

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHandler = () => {
        setToken(null); //clear the token here
        localStorage.removeItem('token');
    };

    const contextValue = {
        token : token,
        isLoggedIn :userIsLoggedIn,
        login :loginHandler,
        logout :logoutHandler
    };
    
    return (
        <AuthContext.Provider value={contextValue}>
          {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;