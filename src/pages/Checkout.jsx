import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order placed");

    dispatch(clearCart());   // now it works

    navigate("/"); // redirect to home
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Address" />

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;