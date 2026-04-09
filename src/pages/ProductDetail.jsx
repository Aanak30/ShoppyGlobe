import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);   //  VERY IMPORTANT
      }
    };

    fetchProduct();
  }, [id]);

  //  SHOW LOADING
  if (loading) return <h2>Loading...</h2>;

  // SHOW ERROR
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  // PREVENT BLANK SCREEN
  if (!product) return <h2>No product found</h2>;

  return (
  <div className="product-detail">
    <div className="detail-card">

      {/* IMAGE */}
      <div className="detail-img">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      {/* INFO */}
      <div className="detail-info">
        <h1>{product.title}</h1>

        <p className="price">₹{product.price}</p>

        <p className="category">Category: {product.category}</p>

        <p className="desc">{product.description}</p>

        <button>Add to Cart</button>
      </div>

    </div>
  </div>
);
  
};

export default ProductDetail;