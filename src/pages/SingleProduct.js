import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  return (
    <section className="section product">
      <img src={product.image} alt={product.name} />
      <h4> Product ID: {productId} </h4>
      <Link to="/products" className="btn">
        back to Products
      </Link>
    </section>
  );
};

export default SingleProduct;
