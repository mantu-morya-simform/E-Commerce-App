import { useParams } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../types/productType";
import { FcRating } from "react-icons/fc";
import { useCart } from "../hook/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  const product: Product | undefined = products.find(
    (product) => product.id === Number(id),
  );

  if (!product) {
    return <h1 className="text-center mt-10">Product not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-cover rounded-lg shadow"
        />
      </div>

      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-blue-500">{product.brand}</p>

        <p className="text-gray-700">{product.description}</p>

        <p className="text-2xl font-semibold text-green-600">
          ₹{product.price.toLocaleString()}
        </p>

        <p className="text-red-500 flex gap-2 items-center">
          <FcRating /> <span>{product.rating}</span>
        </p>

        <p className="text-sm text-gray-500">Stock: {product.stock}</p>

        <div className="flex gap-4 mt-4">
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
  );
};

export default ProductDetails;
