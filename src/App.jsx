import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import CartList from "./components/ProductList/CartList";
import UserLayout from "./Layout/UserLayout";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
