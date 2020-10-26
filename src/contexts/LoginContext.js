import React, {useState,createContext} from 'react'

export const LoginContextWrapper = createContext({
})

export default function LoginContext(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  return (
    <LoginContextWrapper.Provider value={{isLogin,setIsLogin,username,setUsername,loginUser, setLoginUser}}>
      {props.children}
    </LoginContextWrapper.Provider>
  )
}