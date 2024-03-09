import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(false);
    // setError(null);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        // setLoading(true);
      })
      .catch((error) => {
        // setError(error.message);
        // setLoading(true);
      });
  }, [id]);

  // if (loading) {
    // return <p>Loading...</p>;
  // }

  // if (error) {
    // return <p>Error: {error}</p>;
  // }

  if (!products) {
    return <p>No product found</p>;
  }

  return (
    <div>
      <h2>My Product Display</h2>
      <h3>{products.title}</h3>
      <p>Price: ${products.price}</p>
      <p>Description: {products.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
