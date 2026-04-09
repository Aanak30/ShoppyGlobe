
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">

      {/* IMAGE */}
      <img src={item.thumbnail} alt={item.title} />

      {/* DETAILS */}
      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>

        {/* QUANTITY */}
        <div className="qty">
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>

        <p className="item-total">
          Total: ₹{item.price * item.quantity}
        </p>
      </div>

      {/* REMOVE */}
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>

    </div>
  );
};

export default CartItem;