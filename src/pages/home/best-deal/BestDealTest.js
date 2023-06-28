import React, { useEffect, useState } from 'react';
import { useGetProductQuery } from '../../../redux-box/api/featuredApi';

function BestDealTest() {
  const [products, setProducts] = useState([]);
  const { data, isLoading, isError } = useGetProductQuery();
  const category = "Electronic Accessories";

  useEffect(() => {
    if (data) {
      const allProducts = [];
      const totalPages = Math.ceil(data.response.records.pagination.total / data.response.records.pagination.rows_per_page);

      // Fetch products from all pages
      const fetchAllProducts = async () => {
        for (let page = 1; page <= totalPages; page++) {
          const response = await fetch(`https://staging.martvill.techvill.net/api/user/products?page=${page}`);
          const result = await response.json();
          const fetchedProducts = result.response.records.data.filter((product) =>
            product.categories?.includes(category)
          );
          allProducts.push(...fetchedProducts);
        }
        setProducts(allProducts);
      };

      fetchAllProducts();
    }
  }, [data]);

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {isError && <div>Error loading top categories</div>}
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <img src={product.featured_image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default BestDealTest;
