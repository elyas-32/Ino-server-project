import { useNavigate } from "react-router-dom";
interface FoodSectionProps {
  title:string, image:string, catID:number
}
export default function FoodSection({ title, image, catID }:FoodSectionProps) {
  let navigate = useNavigate();
  return (
    <section
      className={`flex justify-center items-center w-full h-[298px] bg-cover after:size-full after:bg-[rgba(0,0,0,0.7)] after:absolute relative rounded-xl  after:rounded-xl hover:scale-[1.01] bg-itemBacground cursor-pointer after:z-0`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => {
        navigate("products", { state: { id: catID } });
      }}
    >
      <p className="font-semibold text-2xl capitalize z-[1]">{title}</p>
    </section>
  );
}
