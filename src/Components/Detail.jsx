import { useEffect } from "react";
export default function Detail({ show, setShow }) {
  function handleDocClick(e) {
    setShow(false);
  }
  useEffect(() => {
    if (show) {
      document.addEventListener("click", handleDocClick);
      return () => {
        document.removeEventListener("click", handleDocClick);
      };
    }
  }, [show]);
  return (
    <ul
      className={` rounded-lg shadow-2xl absolute -top-12 text-sm font-semibold right-[10px] min-[1100px]:-right-40 bg-background z-50 ${
        show ? "" : "hidden"
      }`}
    >
      <li className="flex gap-[5px] py-[10px] px-5 hover:bg-itemBacground rounded-lg transition cursor-pointer">
        <svg
          className="size-[22px]"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ReceiptLongOutlinedIcon"
        >
          <path d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM15 20H6c-.55 0-1-.45-1-1v-1h10v2zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"></path>
          <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"></path>
        </svg>
        <p>سفارشات من</p>
      </li>
      <li className="flex gap-[5px] py-[10px] px-5 hover:bg-itemBacground rounded-lg transition cursor-pointer">
        <svg
          className="size-[22px]"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="StoreMallDirectoryOutlinedIcon"
        >
          <path d="m18.36 9 .6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z"></path>
        </svg>
        <p>درباره این مجموعه</p>
      </li>
      <li className="flex gap-[5px] py-[10px] px-5 hover:bg-itemBacground rounded-lg transition cursor-pointer">
        <svg
          className="size-[22px]"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="InfoOutlinedIcon"
        >
          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
        </svg>
        <p>درباره تاپ منو مارکت</p>
      </li>
      <li className="flex justify-between py-[10px] px-5 items-center hover:bg-itemBacground rounded-lg transition cursor-pointer">
        <div className="flex gap-[5px]">
          <svg
            className="size-[22px]"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AccountBoxIcon"
          >
            <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path>
          </svg>
          <p>تکمیل پروفایل</p>
        </div>
        <div className="size-3 bg-primary rounded-full"></div>
      </li>
    </ul>
  );
}
