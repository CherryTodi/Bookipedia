import React ,{createContext,useContext,useState} from "react";
export const AuthContext=createContext() 
export default function AuthProvider({children}) { //in children we have like app.jsx,navbar.jsx that is other components//we are passing them to children so they can be used in AuthProvider
    const initialAuthUser=localStorage.getItem("Users"); //local storage ke users ko nyaha leke ayenge
    const [authUser, setAuthUser] = useState( () => {
       try {
          return initialAuthUser
         ? JSON.parse(initialAuthUser)
          :null;
        } catch {
           return null;
  }
});  //variable,function
     //if the user i sauthorized parse it otherwise undefined

  return (
    <AuthContext.Provider value={[ authUser, setAuthUser ]}> 
      {children}
    </AuthContext.Provider>
  );
}
//return in form of arrray
export const useAuth = () => useContext(AuthContext);  //context api //so that we can access user globally everywhre


//yaha jo context create kiya hai isko apni main application mai wrap krna hoga
//in main.jsx
//app.jsx mai hum course ko, authprovider use karke protect karwayege