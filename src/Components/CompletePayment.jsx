import BottomButton from "./Buttons/BottomButton";
export default function CompletePayment({ price }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background max-w-[700px] mx-auto flex justify-between py-5 px-[15px] items-center">
      <p className="text-gray text-sm basis-1/2">
        مجموع : <span className="text-white text-lg">{price}</span> تومان
      </p>
      <div className=" basis-1/2">
        <BottomButton title="تکمیل خرید" to="/payment" />
      </div>
    </div>
  );
}
