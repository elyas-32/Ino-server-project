export default function Paragraph({ price, title }:{price:string,title:string}) {
  return (
    <div className="flex items-center mt-5">
      {title ? title : ""}{" "}
      <hr className="border-dashed grow border-white mx-4" />
      <p className="text-gray text-sm">
        <span className="text-lg text-white">{price ? price : 0} </span>
        تومان
      </p>
    </div>
  );
}
