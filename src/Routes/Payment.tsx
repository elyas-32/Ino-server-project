import { useContext, useEffect } from "react";
import NavBar from "../Components/NavBar";
import { Basket, Users } from "../main";
import { calcTotalPrice, splitNumber } from "../assets/data";
import ItemInPayment from "../Components/ItemInPayment";
import Paragraph from "../Components/Paragraph";
import { useNavigate } from "react-router-dom";
import BottomButton from "../Components/Buttons/BottomButton";
export default function Payment() {
  const { basket, setBasket } = useContext(Basket);
  const x = useContext(Users);
  console.log(basket);
  console.log(x);
  
  let navigate = useNavigate();
  useEffect(() => {
    if (!basket[0]) {
      navigate("/products");
    }
  }, [basket]);
  let basketTotalPrice = splitNumber(calcTotalPrice(basket));
  return (
    <>
      <NavBar title="تکمیل سفارش" />
      <ul className="max-w-[700px] mt-[70px] mx-4">
        {basket.map((basketItem) => {
          return (
            <ItemInPayment
              setBasket={setBasket}
              basket={basket}
              imgSrc={basketItem.image}
              product={basketItem}
              key={basketItem.id}
            />
          );
        })}
      </ul>
      <hr className="border-4 border-itemBacground" />
      <section className="mx-4">
        <label htmlFor="paymentDescription" className="mt-5 block mb-3">
          لطفا توضیحات خود را وارد کنید :{" "}
        </label>
        <textarea
          name=""
          id="paymentDescription"
          className="w-full bg-background border-white border rounded-lg resize-none px-4 py-2 mb-4"
          placeholder="لطفا توضیحات خود را یادداشت کنید ..."
        ></textarea>
      </section>
      <hr className="border-4 border-itemBacground" />
      <section className="mx-4">
        <Paragraph price={basketTotalPrice} title="جمع مبالغ" />
        <Paragraph price={basketTotalPrice} title="مبلغ پرداختی" />
      </section>
      <div
        className="fixed left-0 right-0 bottom-4 max-w-[700px] mx-4 min-[700px]:mx-auto"
        onClick={(e) => {
          x.setUsers([{hello:'flkasddddddddddddddddddddddddddddddddddddddddddddd'}])
          setBasket ? setBasket([]) : console.error('uncorrecct setState provided')
        }}
      >
        <BottomButton to="/products" title="ادامه و تصویه حساب" />
      </div>
    </>
  );
}
