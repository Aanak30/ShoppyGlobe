import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/cart/cartSlice";
import { selectCartCount } from "../features/cart/cartSelectors";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  return (
    <header>
      <h2>ShoppyGlobe</h2>

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
};

export default Header;