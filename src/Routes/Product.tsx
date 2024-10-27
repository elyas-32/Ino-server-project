import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useState, useEffect, useContext } from "react";
import { fetchData,ProductItem } from "../assets/data";
import { Basket } from "../main";
import { splitNumber, isInBasketFunc } from "../assets/data";
import ProductCountControl from "../Components/ProductCountControl";
import BottomButton from "../Components/Buttons/BottomButton";
export default function Product() {
  let  pIdObj  = useParams<{pID:string}>();
  let pID = Number(pIdObj.pID);
  let navigate = useNavigate();
  useEffect(() => {
    if (isNaN(pID) || pID > 9 || pID <= 0) {
      navigate("/products");
    }
  }, []);
  const [product, setProduct] = useState<ProductItem>({
    name: '',
    category: 0,
    price: 0,
    description: '',
    image: '',
    id: 0,})
  const { basket, setBasket } = useContext(Basket);
  useEffect(() => {
    fetchData({
      setState: setProduct,
      url: `http://185.181.182.21:8000/restaurant/api/v1/restaurant_product/${pID}.json`,
      type: "GET",
    });
  }, []);
  return (
    <>
      <NavBar title={product.name} />
      <main className="mt-[70px]">
        <div className=" relative after:absolute after:size-full max-h-[500px] after-image after:top-0 after:right-0">
          <img
            src={product.image}
            alt="عکس محصول"
            className="w-full object-cover max-h-[500px] bg-itemBacground"
          />
        </div>
        <div className="pt-7 px-4">
          <h2 className="text-center font-semibold text-2xl tracking-wider">
            {product.name}
          </h2>
          <h2 className="text-center font-semibold tracking-wide ">
            {product.name}
          </h2>
          <div className="flex justify-between items-center">
            <div className="w-32 mt-[10px] mb-[20px]">
              <ProductCountControl
                basket={basket}
                setBasket={setBasket}
                product={product}
                isInBasket={isInBasketFunc(basket, product)}
              />
            </div>
            <p>
              {splitNumber(product.price)}{" "}
              <span className="text-gray text-sm">تومان</span>
            </p>
          </div>
          <p className="text-sm text-gray">
            {product.description
              ? product.description
              : " در منبع هیچ توضیحاتی برای این محصول ثبت نشده و این یک متن تستی می باشد ."}
          </p>
        </div>
        <div className="fixed min-[700px]:mx-auto max-w-[700px] left-0 right-0 mx-4 flex bottom-[10px] flex-col gap-2">
          <BottomButton title={"مشاهده منو / فروشگاه"} to={"/products"} />
          {basket[0] && <BottomButton title={"تکمیل خرید"} to={"/payment"} />}
        </div>
      </main>
    </>
  );
}
