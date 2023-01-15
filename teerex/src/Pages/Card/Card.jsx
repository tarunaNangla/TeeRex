import React from 'react'
import "./cardsmodule.css"
const Card = ({ele}) => {
  return (
    
    <div className='cardcss' >
      
      {/* image  */}
      <div>
        <img src={ele.imageURL} alt="product_img" />
      
      {/* name  */}
      <div>
        <h2>{ele.name}</h2>
      </div>
      
      <div className='cardflex'>
              {/* price */}
              <div style={{height:"40px"}}>
                <h4>Rs : {ele.price}</h4>
              </div>
              

                 <button style={{color:"white",background:"black",marginTop:"10px", borderRadius:"10px" ,height:"40px"}}> Add to Cart</button>
             
      </div>

      </div> 
      
    </div>
  
  )
}

export default Card
