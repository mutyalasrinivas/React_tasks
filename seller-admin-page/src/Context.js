import React,{useState,createContext, useEffect} from "react";

const TotalContext=createContext({
    products:[],
    totalPrice: 0,
    setProducts: () => {},
    setTotalPrice: () => {},
    handleDeleteProduct: () => {}
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
    },[])
    const handleDeleteProduct = (idToDelete) => {
        const filteredProducts=products.filter((product) => product.id !== idToDelete) 
        setProducts(filteredProducts);
        
         localStorage.setItem('products', JSON.stringify(filteredProducts));
 
    
        // Update the total price after removing the product
        const updatedTotalPrice = totalPrice - parseFloat(products.find((product) => product.id === idToDelete).price);
        setTotalPrice(updatedTotalPrice);
      };
    return(
        <TotalContext.Provider value={{ products, totalPrice, setProducts, setTotalPrice,handleDeleteProduct }}>
            {children}
        </TotalContext.Provider>
    )
}
export {TotalContextProvider,TotalContext}