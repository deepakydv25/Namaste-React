import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="flex p-2 m-5">
        <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
        <button
          className="p-2 mx-5 bg-red-500"
          onClick={() => handleClearCart()}
        >
          Clear All
        </button>
      </div>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
