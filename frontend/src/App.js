import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/AuthReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse(localStorage.getItem('userLogged')) || { logged: false };
}

export const App = () => {

  const [userLogged, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('userLogged', JSON.stringify(userLogged));
    localStorage.setItem('rol', JSON.stringify('GUEST'));
  }, [userLogged])

  return (
    <AuthContext.Provider value={{ userLogged, dispatch }}>
      <AppRouter/>
    </AuthContext.Provider>
  )
}

export default App