import React, { useState } from "react";
import { useGetProductQuery } from "../../../redux-box/api/bestDealApi";
import ProductCard from "./ProductCard";
import QuickViewModal from "../../../features/components/QuickViewModal ";

const BestShow = () => {
  const { data, isLoading, isError } = useGetProductQuery();
  const products = data?.response?.records?.data
    ?.slice(0, 3)
    .concat(data?.response?.records?.data?.slice(5, 10));
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 m-5">
        {isLoading && <h1>Loading...</h1>}
        {isError && <div>Error loading top categories</div>}
        {products?.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} onQuickViewClick={handleQuickView} />
          </React.Fragment>
        ))}
      </div>
      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default BestShow;
