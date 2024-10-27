import { SetStateAction } from "react";

export default function FilterItem({
  imgSrc,
  title,
  category,
  setCategory,
  catID,
}:{
  imgSrc:string,
  title:string,
  category:number,
  setCategory:React.Dispatch<SetStateAction<number>>,
  catID:number,
}) {
  return (
    <li
      className="w-[70px] rounded-xl flex justify-center items-center flex-col text-center cursor-pointer"
      onClick={() => setCategory(catID)}
    >
      <div className="size-[60px]">
        <img
          className={`rounded-xl size-full object-cover duration-300 transition ${
            category === catID && "border-[3px] border-primary"
          }`}
          src={imgSrc}
          alt="عکس فیلتر"
        />
      </div>
      <p
        dir="ltr"
        className="text-ellipsis w-[70px] overflow-hidden text-xs font-medium mt-1 text-nowrap capitalize"
      >
        {title}
      </p>
    </li>
  );
}
