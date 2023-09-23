import React from 'react'
import { useFirebase } from './context/firebase'
import { Outlet, Navigate } from 'react-router-dom'

function PriveteRoute() {
  const firebase = useFirebase()

  return (
    firebase.isLogged ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PriveteRoute