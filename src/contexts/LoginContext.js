import React, {useState,createContext} from 'react'

export const LoginContextWrapper = createContext({
})

export default function LoginContext(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState(null);
  return (
    <LoginContextWrapper.Provider value={{isLogin,setIsLogin,username,setUsername}}>
      {props.children}
    </LoginContextWrapper.Provider>
  )
}