import React from 'react'
import LoadingSpiner from './LoadingSpiner'
import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../Context/AuthContext'
const PrivateRoute = ({children}) => {
   const location = useLocation
    // console.log(location)
    const {user,loading} = useAuth()
    console.log(user,loading)
    if(loading){
        return <div><LoadingSpiner/></div>
        }
        if(user ){
            return children
            }
  return (
    <Navigate to='/login' state={location?.pathname}></Navigate>
  )
}

export default PrivateRoute