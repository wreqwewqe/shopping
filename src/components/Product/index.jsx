import React from 'react'
import {Card} from 'antd'

export default function index({product}) {
  return (
   
      
            <Card  cover={<img alt="example" src={product.image} />}> 
                <h3>{product.name}</h3>
                <p>评分:{product.rate}</p>
                <p>总共有{product.numReviews}条评价</p>
                <h2>¥{product.price}</h2>
            </Card>
    

  )
}
