import React, { useContext, useState } from "react";
import { TotalContext } from "../../Context";
const InputForm=()=>{
    
    const [id,setId]=useState()
    const [price,setPrice]=useState()
    const [name,setName]=useState()
    
const { products, totalPrice, setProducts, setTotalPrice }=useContext(TotalContext)
  
const idHandler=(e)=>{
    setId(e.target.value)
     
}
const priceHandler=(e)=>{
    setPrice(e.target.value)
}
const nameHandler=(e)=>{
    setName(e.target.value)
}
const submitHandler=(e )=>{
   e.preventDefault()
   const newProduct={
    id,price,name
   }
   setProducts([...products,newProduct])
    localStorage.setItem('products', JSON.stringify([...products,newProduct]));
   setId('')
   setPrice('')
   setName('')
  const newTotal=totalPrice+parseFloat(price)
  setTotalPrice(newTotal);
   
}
   return( 
     <div id="form">
        <form >
         <label for="id">Product ID</label>
         <input type="number" name="id" value={id} onChange={idHandler}/>
         <label for="price">Product Price</label>
         <input type="number" name="price" value={price}onChange={priceHandler}/>
         <label for="name">Product name</label>
         <input type="text" name="name"value={name} onChange={nameHandler}/>
         <button onClick={submitHandler}>Add</button>
        </form>
     <div>
        <h1>Products::</h1>
        {products.map((product)=><li key={product.id}>product ID:{product.id}--product Price{product.price}-- product Name {product.name}</li>)}
     </div>
     <h3>Total Amount :${totalPrice}</h3>
     </div>
     
    )
}

export default InputForm;