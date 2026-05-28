import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Name</th>
            <th className="p-3">Categories</th>
            <th className="p-3">Brand</th>
            <th className="p-3 text-center">Quantity</th>
            <th className="p-3 text-center">Action</th>
            <th className="p-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            return (
              <tr
                key={product.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  <img
                    className="h-16 w-16 object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td className="p-3 font-medium">{product.title}</td>
                <td className="p-3 text-gray-600">{product.category}</td>
                <td className="p-3">{product.brand}</td>
                <td className="p-3 text-center">{product.quantity}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => {
                        dispatch({ type: "INCREMENT", payload: product.id });
                      }}
                    >
                      +
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => {
                        dispatch({ type: "DECREMENT", payload: product.id });
                      }}
                    >
                      -
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product.id,
                        });
                      }}
                    >
                      <AiOutlineDelete size={15} />
                    </button>
                  </div>
                </td>
                <td className="p-3 font-semibold text-green-600 w-50">
                  {product.price * product.quantity}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
