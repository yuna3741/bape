import React from 'react'
import ProdDetail from '../page/ProdDetail'
import { Navigate } from 'react-router-dom'

function PrivateRoute({loginok}) {
  return loginok == true ? <ProdDetail/> : <Navigate to={'/login'}/>
}

export default PrivateRoute
