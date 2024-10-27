import { splitNumber,ProductItem,BasketItem } from "../assets/data";
import ProductNumInput from "./ProductNumInput";
import { SetStateAction } from "react";
interface ItemInPaymentProps {
  imgSrc:string;
  basket:BasketItem[];
  setBasket:React.Dispatch<SetStateAction<BasketItem[]>>;
  product: ProductItem;
}
export default function ItemInPayment({ imgSrc, basket, setBasket, product }:ItemInPaymentProps) {
  return (
    <li className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-2">
        <div className="rounded-[10px] size-10">
          <img
            src={imgSrc}
            alt="عکس محصول"
            className="rounded-[10px] object-cover size-full"
          />
        </div>
        <div className="w-[85px]">
          <ProductNumInput
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        </div>
        <h3>{product.name}</h3>
      </div>
      <p className="text-gray text-sm">
        <span className="text-lg text-white">{splitNumber(product.price)}</span>{" "}
        تومان
      </p>
    </li>
  );
}
