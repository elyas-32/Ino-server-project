import React, {
  createContext,
  ReactNode,
  SetStateAction,
  StrictMode,
  useState,
} from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Layout from "./Routes/Layout";
import Products from "./Routes/Products";
import Search from "./Routes/Search";
import Product from "./Routes/Product";
import Payment from "./Routes/Payment";
import NotFound from "./Routes/NotFound";
import NewProduct from "../archive/NewProduct";
import { BasketItem } from "./assets/data";
interface basketContex {
  basket: BasketItem[];
  setBasket: React.Dispatch<SetStateAction<BasketItem[]>>|null;
}
export const Basket = createContext<basketContex>({
  basket: [],
  setBasket: null,
});
const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  return (
    <Basket.Provider value={{ basket, setBasket }}>{children}</Basket.Provider>
  );
};


interface UsersContex {
  users: object[];
  setUsers: React.Dispatch<SetStateAction<object[]>>;
}
export const Users = createContext<UsersContex>({
  users: [],
  setUsers: () => {},
});
const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<object[]>([]);
  return (
    <Users.Provider value={{ users, setUsers }}>{children}</Users.Provider>
  );
 };
createRoot(document.getElementById("root")!).render(
  // <StrictMode>

    <BasketProvider>
      <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:pID" element={<Product />} />
            <Route path="products/new" element={<NewProduct />} />
            <Route path="search" element={<Search />} />
            <Route path="payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UsersProvider>
    </BasketProvider>
  // </StrictMode>
);
