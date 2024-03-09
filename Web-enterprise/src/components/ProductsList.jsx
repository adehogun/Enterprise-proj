import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all products if searchTerm is empty, otherwise fetch products based on searchTerm
        const url = searchTerm ? `https://dummyjson.com/products/search?q=${searchTerm}` : 'https://dummyjson.com/products';
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Fetching products data failed');
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchData();
  }, [searchTerm]); // Add searchTerm as a dependency

  // Function to handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <h1>Products List</h1>
      {/* Render SearchBar and pass handleSearch function */}
      <SearchBar onSearch={handleSearch} />
      {/* Iterate over products array and render Product component for each product */}
      {products.map(products => (
        <div key={products.id}>
          {/* Render product details */}
          <h2>{products.title}</h2>
          <p>{products.description}</p>
          <p>Price: ${products.price}</p>
          {/* Add more product details as needed */}
        </div>
      ))}
    </>
  );
}

export default ProductsList;

























































// import React, { useEffect, useState } from "react";
// import SearchBar from "./SearchBar";

// const ProductsList = () => {
  // const [products, setProducts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState ('');

  // useEffect(() => {
    // const fetchData = async () => {
      // try {
        // const res = await fetch(`https://dummyjson.com/products`);
        // if (!res.ok) {
          // throw new Error('Fetching products data failed');
        // }
        // const data = await res.json();
        // setProducts(data);

        // const fetchProducts = () => {
          // fetch (`https://dummyjson.com/products/search?q=phone`);
          // .then((response) => response.json())
          // .then((data) => setProducts(data))
          // .catch((error) => console.error("Error fetching the products:", error));
        // };
     
    // fetchData();
  // }, []);
// 
  // return (
    // <>
      // <h1>Products List</h1>
      // {/* Iterate over products array and render Product component for each product */}
      // {Product.map(Product => (
        // <Product key={Product.id} product={Product} />
      // ))}
    // </>
  // );
// }

// export default ProductsList;
