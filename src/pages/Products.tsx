import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { FcRating } from "react-icons/fc";
import type { Product } from "../types/productType";

const Products = () => {
  const { item } = useParams();

  const filteredProducts: Product[] = products.filter(
    (prod) => prod.type === item,
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {filteredProducts.length > 0
          ? filteredProducts[0].category
          : "No products found"}
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.title}
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

              <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:opacity-90">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found</p>
      )}
    </div>
  );
};

export default Products;
