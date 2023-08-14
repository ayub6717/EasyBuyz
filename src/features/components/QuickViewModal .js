import React from 'react';

const QuickViewModal = ({ product, onClose  }) => {
    if (!product) {
        return null;
      }
    
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 shadow-md rounded-md">
        <img src={product.featured_image} alt={product.name} className="w-44 object-cover" />
        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        {/* Additional product details here */}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => {
            onClose(); 
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default QuickViewModal;
