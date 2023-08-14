import React from 'react';

const ProductCard = ({ product, onQuickViewClick  }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={product.featured_image} alt={product.name} className="w-full h-[320px] object-cover" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => onQuickViewClick(product)}
      >
        Quick View
      </button>
    </div>
  );
};

export default ProductCard;
