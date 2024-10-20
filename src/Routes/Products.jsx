import FilterItem from "../Components/FilterItem.jsx";
import NavBar from "../Components/NavBar";
import ProductBox from "../Components/ProductBox";
import { useEffect, useState, useContext } from "react";
import {
  categoryAPI,
  productsAPI,
  categoryImages,
  fetchData,
  categoryIDs,
  splitNumber,
  calcTotalPrice,
} from "../assets/data.jsx";
import { useLocation } from "react-router-dom";
import { Basket } from "../main";
import CompletePayment from "../Components/CompletePayment.jsx";
export default function Products() {
  const Location = useLocation();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(
    Location.state ? Location.state.id : 4
  );
  const [products, setProducts] = useState([]);
  let renderingProducts = products.filter((p) => {
    if (category === 4) {
      return p;
    }
    return p.category === category;
  });
  const { basket, setBasket } = useContext(Basket);
  useEffect(() => {
    fetchData(setCategories, categoryAPI);
    fetchData(setProducts, productsAPI);
  }, []);
  return (
    <>
      <NavBar />
      <ul className="mt-[70px] flex gap-4 sticky top-[70px] p-2 bg-background overflow-auto scroll-hidden z-20">
        <FilterItem
          catID={categoryIDs[3]}
          category={category}
          setCategory={setCategory}
          imgSrc={categoryImages[3]}
          title="all products"
        />
        {categories.map((categoryItem, index) => {
          return (
            <FilterItem
              catID={categoryIDs[index]}
              category={category}
              setCategory={setCategory}
              imgSrc={categoryImages[index]}
              title={categoryItem.name}
              key={categoryItem.name}
            />
          );
        })}
      </ul>
      <section className="p-4 flex flex-col gap-4">
        {renderingProducts.map((product) => {
          return (
            <ProductBox
              product={product}
              basket={basket}
              setBasket={setBasket}
              key={product.id}
            />
          );
        })}
        {basket[0] && (
          <CompletePayment price={splitNumber(calcTotalPrice(basket))} />
        )}
      </section>
    </>
  );
}
