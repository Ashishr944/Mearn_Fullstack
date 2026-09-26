import React, { useEffect, useState } from 'react'
// https://fakestoreapi.com/products
// in a list show the tittle of the product and its title


const FetchingProduct = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchProducts = async() => {
            setLoading(true);
            setError(null);
            try{
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                console.log(data);
                setProduct(data);
            }
            catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[])
  return (
    <div>
      <ul>
        {products.map(item => <li key={item.id}>{item.title} {item.price}</li>)}
      </ul>
    </div>
  )
}

export default FetchingProduct
