import { Link } from "react-router-dom";
export default function BottomButton({to, title}) {
    const isCompleteBtn = title === 'تکمیل خرید' ? true : false;
  return (
    <Link
      className={`text-center w-full block text-primary border border-primary rounded-[7px] leading-10 transition duration-300 ${
        to === '/products' ? 'bg-background text-primary hover:bg-[rgba(245,76,64,0.3)]' : 'bg-primary text-white font-semibold hover:bg-primaryDarker'
      }`}
      to={to}
    >{title}
    </Link>
  );
}
