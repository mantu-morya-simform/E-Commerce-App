import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../hook/useCart";

const Cart = () => {
  const { cart, dispatch } = useCart();

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Shopping Cart</h1>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto rounded-lg shadow border">
        <table className="w-full min-w-[850px] border-collapse bg-white">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 text-sm md:text-base">Image</th>
              <th className="p-3 text-sm md:text-base">Name</th>
              <th className="p-3 text-sm md:text-base">Category</th>
              <th className="p-3 text-sm md:text-base">Brand</th>
              <th className="p-3 text-center text-sm md:text-base">Quantity</th>
              <th className="p-3 text-center text-sm md:text-base">Action</th>
              <th className="p-3 text-sm md:text-base">Price</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((product) => (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50 transition"
              >
                {/* Image */}
                <td className="p-3">
                  <img
                    className="h-14 w-14 md:h-16 md:w-16 object-contain rounded"
                    src={product.image}
                    alt={product.title}
                  />
                </td>

                {/* Name */}
                <td className="p-3 font-medium text-sm md:text-base">
                  {product.title}
                </td>

                {/* Category */}
                <td className="p-3 text-gray-600 text-sm md:text-base">
                  {product.category}
                </td>

                {/* Brand */}
                <td className="p-3 text-sm md:text-base">{product.brand}</td>

                {/* Quantity */}
                <td className="p-3 text-center text-sm md:text-base">
                  {product.quantity}
                </td>

                {/* Actions */}
                <td className="p-3">
                  <div className="flex justify-center gap-2 flex-wrap">
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      onClick={() =>
                        dispatch({
                          type: "INCREMENT",
                          payload: product.id,
                        })
                      }
                    >
                      +
                    </button>

                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      onClick={() =>
                        dispatch({
                          type: "DECREMENT",
                          payload: product.id,
                        })
                      }
                    >
                      -
                    </button>

                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product.id,
                        })
                      }
                    >
                      <AiOutlineDelete size={15} />
                    </button>
                  </div>
                </td>

                {/* Price */}
                <td className="p-3 font-semibold text-green-600 whitespace-nowrap text-sm md:text-base">
                  ₹{product.price * product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 && (
        <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
