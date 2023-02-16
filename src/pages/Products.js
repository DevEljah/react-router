import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>

      <div>
        {products.map((product) => {
          const { id, name } = product;
          return (
            <article key={id} /* className="section product" */>
              <h2>{name}</h2>
              {/*  <img src={image} /> */}
              <br />
              <Link to={`/products/${id}`} className="btn">
                more Info
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
