import React, {useState,createContext} from 'react'

export const LoginContextWrapper = createContext({
})

export default function LoginContext(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  return (
    <LoginContextWrapper.Provider value={{isLogin,setIsLogin,username,setUsername,loginUser, setLoginUser,id, setId}}>
      {props.children}
    </LoginContextWrapper.Provider>
  )
}