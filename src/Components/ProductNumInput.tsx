import { SetStateAction } from "react";
import { BasketItem,ProductItem } from "../assets/data";
export interface NumProps {basket:BasketItem[],setBasket:React.Dispatch<SetStateAction<BasketItem[]>>|null,product:ProductItem}
export default function ProductNumInput({ basket, setBasket, product }:NumProps) {
  let basketArr = basket.slice().map((basketItem) => {
    return{ ...basketItem }
  }
  );
  let productIndex = basketArr.findIndex((basketItem) => {
    return basketItem.name === product.name;
  });
  return (
    <div className="flex items-center">
      <button
        className="size-8 bg-primary hover:bg-primaryDarker rounded-lg transition duration-300"
        onClick={(e) => {
          e.stopPropagation();
          basketArr[productIndex].count = basketArr[productIndex].count + 1;
          setBasket ? setBasket(basketArr) : console.error('uncorrecct setState provided')
        }}
      >
        <svg
          className="size-[22px] mx-auto"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
        </svg>
      </button>
      <p className="grow text-center">{basket[productIndex].count}</p>
      <button
        className="size-8 hover:bg-grayDarker fill-gray border-2 border-grayDarker rounded-lg transition duration-300"
        onClick={(e) => {
          e.stopPropagation();
          if (basketArr[productIndex].count > 1) {
            basketArr[productIndex].count = basketArr[productIndex].count - 1;
          setBasket ? setBasket(basketArr) : console.error('uncorrecct setState provided')
          } else {
            basketArr.splice(productIndex, 1);
          setBasket ? setBasket(basketArr) : console.error('uncorrecct setState provided')
          }
        }}
      >
        <svg
          className="size-[22px] mx-auto"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
        </svg>
      </button>
    </div>
  );
}
