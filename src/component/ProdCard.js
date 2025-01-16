import React from 'react'
import { useNavigate } from 'react-router-dom'


function ProdCard({item}) {
  const navigate = useNavigate();
  const showD = () =>{
    navigate(`/products/${item.id}`)
  }
  return (
    <div className="box" onClick={showD}>
      <img src={item.img}/>
      <h3>{item.title}</h3>
      <h4>{item.price}</h4>
      <p>{item?.new == true ? "신제품":""}</p>
      <p>사이즈</p>
      <ul>
        {
          item.size.map((size,idx)=>(
            <li key={idx}>{size}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProdCard
