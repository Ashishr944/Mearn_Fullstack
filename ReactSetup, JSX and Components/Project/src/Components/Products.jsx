
const Products = () => {
    const products = [ 
        {id: 1, name: "PS5",  price : 60000, inStock: true},
        {id: 2, name: "game 1",  price : 6000, inStock: false},
        {id: 3, name: "game 2",  price : 8000, inStock: true},
        {id: 4, name: "game 3",  price : 10000, inStock: false},
        {id: 5, name: "game 5",  price : 2000, inStock: true},

    ]

    // for ascending
    // const filter = "asc";

    // for decending
    const filter = "desc";


    // Show all the products that are inStocks
    // show all the products that are inStock according to the filter
    // that is if filter is "asc" show in ascending order and if its "desc" show in descending order

    const filteredProducts = products.filter((item) => item.inStock);
    console.log(filteredProducts);
    // for ascending order sorting of price
    // products.sort((a,b) => a.price - b.price);

    // for decending order sorting of price
    // products.sort((a,b) => b.price - a.price);
    // console.log(products);





    // sorting by coditionaly
    if(filter == "asc"){
        products.sort((a,b) => a.price - b.price)
    }
    else{
        products.sort((a,b) => b.price - a.price);
    }

  return (
    <div>
        {/* Method 1: */}
        {/* {filteredProducts.length > 0 && filteredProducts.map(item => <li key = {item.id}> {item.name} </li>)} */}


        {/* Method 2 */}
        {products.filter(item => item.inStock).map(item => <li key={item.id}>{item.name} - {item.price}</li>)}
    </div>
  )
}

export default Products
