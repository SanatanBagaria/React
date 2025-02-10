import React from 'react';

function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      price: 45,
      seller: "Alex K.",
      condition: "Like New",
      image: "/api/placeholder/300/200"
    },
    // Add more sample products...
  ];

  return (
    <div>
      {/* Categories */}
      <div className="flex gap-4 py-6 overflow-x-auto">
        {['All', 'Textbooks', 'Electronics', 'Clothing', 'Furniture', 'Sports', 'Other'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full ${
              category === 'All'
                ? 'bg-purple-600 text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-sm text-gray-600">Seller: {product.seller}</p>
                </div>
                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {product.condition}
                </span>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                  Message Seller
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;