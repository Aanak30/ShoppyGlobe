import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
  <Link to={`/product/${product.id}`}>
    <h3 className="title">{product.title}</h3>
  </Link>

  <div className="image-box">
    <img 
      src={product.thumbnail} 
      alt={product.title}
      loading="lazy"
    />
  </div>

  <p className="price">₹{product.price}</p>

  <button onClick={() => dispatch(addToCart(product))}>
    Add to Cart
  </button>
</div>
  );
};

export default ProductItem;

