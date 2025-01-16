import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProdDetail() {

  const [product, setProduct] = useState(null);
  let {id} = useParams();

  const data = async()=>{
    try{
   const response = await axios.get(` https://my-json-server.typicode.com/yuna3741/bape/products/${id}`)
   setProduct(response.data)
    }catch(error){
      console.log("에러")
    }
  }

  useEffect(()=>{
   data();
  },[id])

  console.log(product)
  return (
    <div className='productdetail'>
      <img src={product?.img} alt={product?.title}/>
      <h3>{product?.title}</h3>
      <h4>{product?.size}</h4>
      <p>{product?.new?"신제품":""}</p>
      <p>사이즈</p>
      <ul>
        {product?.size.map((size,idx)=>(
          <li key={idx}>{size}</li>
        ))}
      </ul>

      </div>
  )
}

export default ProdDetail
