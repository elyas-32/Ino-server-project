import { SetStateAction } from "react";
export interface ProductItem {
  name: string;
  category: number;
  price: number;
  description: string;
  image: string;
  id: number;
}
export interface BasketItem extends ProductItem {
  count: number;
}

export let categoryAPI =
  "http://185.181.182.21:8000/restaurant/api/v1/caffe_product.json";
export let productsAPI =
  "http://185.181.182.21:8000/restaurant/api/v1/restaurant_product.json";
export let categoryImages = [
  "https://www.azamara.com/static-assets/images/blogs/Traditional%20Turkish%20breakfast.jpg",
  "https://goirantours.com/wp-content/uploads/2019/04/iranian-food-Kebab-lamb-chicken-minced-meat-etc..jpg",
  "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg",
  "https://www.mowglistreetfood.com/wp-content/uploads/2023/01/Landing_image_Desktop.jpg",
];
export let categoryIDs = [1, 2, 3, 4];
export function splitNumber(number = 0) {
  let priceArr = Array.from(''+number);
  let finalPrice : string[] = [];
  priceArr.reverse().forEach((digit, index) => {
    if (!((index + 1) % 3) && index !== priceArr.length - 1) {
      finalPrice.push(digit);
      finalPrice.push(",");
    } else {
      finalPrice.push(digit);
    }
  });
  return finalPrice.reverse().join("");
}
interface FetDataParams<T> {
  url: string,
  type: string,
  setState: React.Dispatch<SetStateAction<T>>,
  sendingData?: object
}
export async function fetchData<T>({ url, type, setState, sendingData }:FetDataParams<T>) {
  switch (type) {
    case "GET":
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const result = await response.json();
        setState(result);
      } catch (err) {
        console.error("Fetch error:", err);
      }
      break;
    case "POST":
    case "PUT":
      try {
        const response = await fetch(url, {
          method: type,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(sendingData),
        });
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
      break;
    case "DELETE":
      try {
        const response = await fetch(url, {
          method: type,
        });
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
      break;
    default:
      console.error("invalid request type");
  }
}
export function isInBasketFunc(basketArr: BasketItem[], productObj : ProductItem) {
  return basketArr.some((basketItem) => {
    return basketItem.name === productObj.name;
  });
}
export function calcTotalPrice(basketArr: BasketItem[]) {
  return basketArr.reduce((prevItem, basketItem) => {
    return prevItem + basketItem.price * basketItem.count;
  }, 0);
}
