// import { useSelector } from "react-redux";
// import CartItem from "../components/CartItem";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const items = useSelector((state) => state.cart.items);

//   // ✅ EMPTY CART UI
//   if (items.length === 0) {
//     return (
//       <div className="empty-cart">
//         <h2>Your Cart is Empty 🛒</h2>
//         <p>Looks like you haven’t added anything yet</p>

//         <Link to="/products">
//           <button>Start Shopping</button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>

//       {items.map((item) => (
//         <CartItem key={item.id} item={item} />
//       ))}

//       <Link to="/checkout">
//         <button>Proceed to Checkout</button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;


import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  // EMPTY CART
  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty 🛒</h2>
        <p>Start shopping to add items</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
    );
  }

  // ✅ TOTAL CALCULATION
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQty = items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* ✅ TOTAL BOX */}
      <div className="cart-summary">
        <h3>Total Items: {totalQty}</h3>
        <h2>Total Price: ₹{totalPrice}</h2>

        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;