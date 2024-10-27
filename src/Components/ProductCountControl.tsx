import { BasketItem } from "../assets/data";
import AddProductBtn from "./Buttons/AddProductBtn";
import ProductNumInput from "./ProductNumInput";
export default function ProductCountControl({ basket, isInBasket, ...props }:{basket:BasketItem[],isInBasket:boolean,[key:string]:any}) {
  return isInBasket ? (
    <ProductNumInput basket={basket} product={props.product} setBasket={props.setBasket} />
  ) : (
    <AddProductBtn basket={basket} product={props.product} setBasket={props.setBasket} />
  );
}
