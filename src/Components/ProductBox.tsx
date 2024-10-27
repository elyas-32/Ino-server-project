import { useNavigate } from "react-router-dom";
import { splitNumber, isInBasketFunc,ProductItem,BasketItem } from "../assets/data";
import ProductCountControl from "./ProductCountControl";
export default function ProductBox({ product, basket, ...props }:{product:ProductItem,basket:BasketItem[],[key:string]:any}) {
  const navigate = useNavigate();
  let isInBasket = isInBasketFunc(basket, product);
  return (
    <div
      className={`flex bg-itemBacground shadow-lg p-[10px] rounded-lg hover:bg-[rgba(45,45,45,0.6)] transition duration-300 cursor-pointer hover:scale-[1.01] ${
        isInBasket &&
        "bg-gradient-to-b from-[rgba(0,0,0,0.4)] shadow-primary shadow-sm to-[rgba(133,18,10,0.7)]"
      }`}
      onClick={() => {
        navigate(`${product.id}`);
      }}
    >
      <div className="basis-[112px] ml-[10px] flex flex-col gap-[10px]">
        <div className="rounded-lg size-[112px]">
          <img
            src={product.image}
            alt="عکس محصول"
            className="rounded-lg size-full object-cover bg-background"
          />
        </div>
        <ProductCountControl
          product={product}
          basket={basket}
          {...props}
          isInBasket={isInBasket}
        />
      </div>
      <div className="grow flex flex-col justify-between">
        <div>
          <h3 className="font-medium text-lg">{product.name}</h3>
          <h4 className="font-semibold text- mt-[15px] text-gray" dir="ltr">
            {product.name}
          </h4>
          <p className="my-[5px] text-sm text-gray text-ellipsis overflow-hidden">
            {product.description
              ? product.description
              : " در منبع هیچ توضیحاتی برای این محصول ثبت نشده و این یک متن تستی می باشد ."}
          </p>
        </div>
        <p className="text-gray text-xs" dir="ltr">
          تومان{" "}
          <span className="text-white text-lg" dir="rtl">
            {splitNumber(product.price)}
          </span>
        </p>
      </div>
    </div>
  );
}
