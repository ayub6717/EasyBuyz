import React from 'react';
import { useGetProductQuery } from '../../../redux-box/api/productApi';

function BestDealTest() {

    const { data, isLoading, isError } = useGetProductQuery();
    const products = data?.response?.records?.data?.slice(0.12);

  return (
    <div>
        {isLoading && <h1>loading..</h1>}
        {isError && <div>Error loading top categories</div>}
      {products?.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.summary}</p>
        </div>
      ))}
    </div>
  );
}

  export default BestDealTest;
