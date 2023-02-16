import { Outlet } from "react-router-dom";

const SharedProduct = () => {
  return (
    <>
      <h2>Products</h2>
      <Outlet />
    </>
  );
};

export default SharedProduct;
