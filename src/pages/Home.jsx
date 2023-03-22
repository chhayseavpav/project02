import React, { useState, useEffect } from "react";

const API_URL = "https://fakestoreapi.com/products?limit=12";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            New Arrivals
          </h1>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <svg
                className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 018 8v-2a6 6 0 00-6-6h-2zm-6 6a6 6 0 006-6H8a4 4 0 01 4 4v2zm6-6a6 6 0 00-6 6h2a4 4 0 014-4v-2z"
                />
              </svg>
              <p>Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white overflow-hidden shadow-md rounded-lg"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {product.title}
                    </h2>
                    <p className="text-gray-700 font-medium mt-2">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
