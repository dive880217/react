import React, { useState, useContext, createContext } from 'react'

// 建立新的認証用的context
const AuthContext = createContext(null)

// 建立一個新的Provider元件，內容是提供auth狀態
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// 建立一個勾子協助使用context
export const useAuth = () => useContext(AuthContext)
