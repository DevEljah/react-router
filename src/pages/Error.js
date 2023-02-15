import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404 Page not found</h2>
      <Link to="/" className="btn">
        Back Home
      </Link>
    </section>
  );
};
export default Error;
