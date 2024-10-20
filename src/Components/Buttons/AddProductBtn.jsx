export default function AddProductBtn({basket, product, setBasket}) {
  return (
    <button
      className="bg-primary flex gap-2 justify-center items-center w-full rounded-lg h-8 hover:bg-primaryDarker"
      onClick={(e) => {
        e.stopPropagation();
        let basketArr = basket.slice().map((basketItem) => ({ ...basketItem }));
        basketArr.push({...product, count: 1}); 
        setBasket(basketArr)
      }}
    >
      <svg
        className="size-[22px]"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path>
      </svg>
      <p className="font-semibold text-sm overflow-hidden text-ellipsis text-nowrap">اضافه کردن</p>
    </button>
  );
}
