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
export async function fetchData(setState, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const result = await response.json();
    setState(result);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
export function splitNumber(number = 0) {
  let priceArr = Array.from(String(number));
  let finalPrice = [];
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
export function isInBasketFunc(basketArr, productObj) {
  return basketArr.some((basketItem) => {
    return basketItem.name === productObj.name;
  });
}
export function calcTotalPrice(basketArr) {
  return basketArr.reduce((prevItem, basketItem) => {
    return prevItem + basketItem.price * basketItem.count;
  }, 0);
}
