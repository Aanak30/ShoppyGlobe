import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const search = useSelector(state => state.cart.search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      {filtered.map(product => (
        <ProductItem 
          key={product.id}   // ✅ UNIQUE KEY
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;