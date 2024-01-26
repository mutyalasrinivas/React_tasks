import React,{useState,createContext, useEffect} from "react";

const TotalContext=createContext({
    products:[],
    totalPrice: 0,
    setProducts: () => {},
    setTotalPrice: () => {},
})

const TotalContextProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(()=>{
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            const parsedProducts = JSON.parse(storedProducts);
            setProducts(parsedProducts);
            const totalFromStorage = parsedProducts.reduce((sum, product) => sum + parseFloat(product.price), 0);
            setTotalPrice(totalFromStorage);
          }
    },[]);
    return(
        <TotalContext.Provider value={{ products, totalPrice, setProducts, setTotalPrice }}>
            {children}
        </TotalContext.Provider>
    )
}
export {TotalContextProvider,TotalContext}