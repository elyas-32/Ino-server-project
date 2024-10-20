import AddProductBtn from "./Buttons/AddProductBtn";
import ProductNumInput from "./ProductNumInput";
export default function ProductCountControl({ basket, isInBasket, ...props }) {
  return isInBasket ? (
    <ProductNumInput basket={basket} {...props} />
  ) : (
    <AddProductBtn basket={basket} {...props} />
  );
}
