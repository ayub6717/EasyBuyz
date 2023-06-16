import React from 'react';
import { useGetTopCategoriesQuery } from '../api/topCategoryApi';

const TopCategories = () => {
  const { data: category, isLoading, isError } = useGetTopCategoriesQuery();
//   console.log(useGetTopCategoriesQuery());

  if (isLoading) {
    return <div>Loadingsafdsfsdf...</div>;
  }

  if (isError) {
    return <div>Error loading top categories</div>;
  }

  const displayedCategory = category?.response?.records?.data?.slice(0, 5);

    console.log(category,'sdfdd' );

  if (!displayedCategory?.length) {
    return <div>zcvcvcvcvcv.</div>;
  }



  return (
    <div>
      {!isLoading && !isError && displayedCategory.length && displayedCategory.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Slug: {item.slug}</p>
          <p>Product URL: {item.product_url}</p>
        </div>
      ))}
    </div>
  );
};

export default TopCategories;
