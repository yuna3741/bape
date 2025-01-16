import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import {faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

function HeaderS({loginok}) {

  const menus = ["T-shirts","Tops","Shirts","Pants","Sweats","Acc"]

  const navigate = useNavigate()
  const goToLogin = () =>{
    navigate("/login")
  }


  const Search = (event) =>{
    if(event.key === "Enter"){
      let keyword = event.target.value 
      navigate(`/?q=${keyword}`)
    }
  }
  return (
    <header>
      <div className='login'>
        <div>
        <FontAwesomeIcon icon={faCircleUser} className='icon' />
        <p onClick={goToLogin}>{loginok ? "로그아웃" : "로그인"}</p>
        </div>
      
      </div>
      <div className='logo'>
        <h1>
          <Link to='/'>
          <img src="https://aape.jp/client_info/AAPE/view/userweb/images/logo.png" alt="logo" />
          </Link>
         
        </h1>
      </div>

      <div className='nav'>
        <ul>
         {
          menus.map((menu,idx)=>(
            <li key={idx}>{menu}</li>
          ))
         }
        </ul>
        <div className='search'>
        
        <input type="text" onKeyPress={(event)=>Search(event)}/>
        <FontAwesomeIcon icon={faMoon} className='icon'/>
        </div>
      </div>
    </header>
  )
}

export default HeaderS
