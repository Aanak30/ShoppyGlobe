import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Shop Smarter, Live Better</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <h3>🚚 Fast Delivery</h3>
          <p>Get your products delivered quickly</p>
        </div>

        <div className="feature">
          <h3>💳 Secure Payment</h3>
          <p>100% safe and secure transactions</p>
        </div>

        <div className="feature">
          <h3>⭐ Top Quality</h3>
          <p>Best products from trusted brands</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Explore Our Collection</h2>
        <Link to="/products">
          <button>Browse Products</button>
        </Link>
      </section>

    </div>
  );
};

export default Home;