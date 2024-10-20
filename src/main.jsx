import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";
import Products from "./Routes/Products";
import Search from "./Routes/Search";
import Profile from "../archive/Profile";
import Product from "./Routes/Product";
import Payment from "./Routes/Payment";
import NotFound from "./Routes/NotFound";
export const Basket = createContext();
const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  return (
    <Basket.Provider value={{ basket, setBasket }}>{children}</Basket.Provider>
  );
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BasketProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:pID" element={<Product />} />
          <Route path="search" element={<Search />} />
          <Route path="payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </BasketProvider>
  </StrictMode>,
);
