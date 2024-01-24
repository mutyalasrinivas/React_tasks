import React,{useState} from "react";

const AuthContext=React.createContext({
  isLoggedIn:false,
  onLogout:()=>{},
  onLogin:(email,password)=>{}
});
export const AuthContextProvider=(props)=>{
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  useEffect(()=>{
    const logData=localStorage.getItem("isLoggedIn");
    if(logData==="1"){
      setIsLoggedIn(true)
    }
  },[])
  const logoutHandler=()=>{
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  };
  const loginHandler=()=>{
    localStorage.setItem("isLoggedIn","1")
    setIsLoggedIn(true);

  };
  return <AuthContext.provider value={{isLoggedIn:isLoggedIn,onLogout:logoutHandler,onLogin:loginHandler}}>{props.children}</AuthContext.provider>
}
export default AuthContext;