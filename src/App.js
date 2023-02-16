import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <footer className="section"> Footer </footer>
    </BrowserRouter>
  );
}

export default App;
