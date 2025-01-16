import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProdAll from './page/ProdAll'
import ProdDetail from './page/ProdDetail'
import Login3 from './page/Login3'
import HeaderS from './component/HeaderS'
import "./Apps.css"
import {useState, useEffect} from 'react'
import PrivateRoute from './rout/PrivateRoute'


function APPs() {
  const [loginok, setLoginok] = useState(false)


  useEffect(()=>{
  console.log(loginok)
  },[loginok])


  return (
    <div>
    <HeaderS loginok={loginok}/>
      <Routes>
        <Route path='/' element={<ProdAll/>}></Route>
        <Route path='/login' element={<Login3 setLoginok={setLoginok}/>}></Route>
        <Route path='/products/:id' element={<PrivateRoute loginok={loginok}/>}></Route>
      </Routes>
    </div>
  )
}

export default APPs
