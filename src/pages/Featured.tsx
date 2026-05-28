import { FcRating } from "react-icons/fc";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

import { useCart } from "../hook/useCart";
import { useState } from "react";

const Featured = () => {
  const [range, setRange] = useState(4);
  const featuredProduct = products.slice(0, range);
  const navigate = useNavigate();
  const { dispatch } = useCart();

  function handleAddMore() {
    setRange((prev) => prev + 4);
  }

  function handleOpenProduct(id: number) {
    navigate(`/product/${id}`);
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize flex justify-center text-gray-700">
        Featured
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProduct.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            title={product.title}
          >
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>

              <p className="text-gray-500 text-sm mt-1">{product.brand}</p>

              <p className="text-sm mt-2">{product.description}</p>

              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-lg">
                  ₹{product.price.toLocaleString()}
                </p>

                <div className="flex items-center text-yellow-500 gap-1">
                  <FcRating />
                  <span>{product.rating}</span>
                </div>
              </div>
              <div className="w-full mt-4 flex gap-3">
                <button
                  className="flex-1 bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 hover:cursor-pointer"
                  onClick={() => handleOpenProduct(product.id)}
                >
                  View Product
                </button>

                <button
                  className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 hover:cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch({ type: "ADD_TO_CART", payload: product });
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {range < products.length && (
          <div className="col-span-full flex justify-center mt-6">
            <button
              className="w-40 bg-black text-white py-2 rounded-sm hover:opacity-90 cursor-pointer"
              onClick={handleAddMore}
            >
              More
            </button>
          </div>
        )}
      </div>

      {featuredProduct.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found</p>
      )}
    </div>
  );
};

export default Featured;
