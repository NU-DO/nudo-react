import React, { useState, createContext, useCallback, useContext, useEffect, useMemo } from 'react'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const login = useCallback(user => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }, [])

  const logout = useCallback(() => {
    localStorage.setItem('user', null)
    setUser(null)
  }, [])

  const value = { user, login, logout }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}