import React from 'react'
import axios from 'axios'
import ProdCard from '../component/ProdCard'
import {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'

function ProdAll() {
  const [productlist, setProductlist] = useState([])
  const [query] = useSearchParams();

  // const data = async()=>{
  //   const response = await axios.get("http://localhost:5000/products")
  //   setProductlist(response.data)
  // }

  const data = async()=>{
    const searchQuery = query.get('q') || ""; // url 검색어 가져오기
    console.log(searchQuery)
    try{
      const response = await axios.get(`https://my-json-server.typicode.com/yuna3741/bape/products?q=${searchQuery}`)
      const filterData = response.data.filter(item=> item.title.includes(searchQuery))
      // title 필드에 검색어 포함여부 확인
      setProductlist(filterData)
    }catch(error){
      console.log("에러")
    }

  }



  useEffect(()=>{
    data();
  },[query])

  console.log(productlist)
  return (
    <div className="contents_1">
      {
        productlist.map(menu=>(
          <ProdCard key={menu.id} item={menu}/>
        ))
      }
      
    </div>
  )
}

export default ProdAll
