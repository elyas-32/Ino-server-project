import { useState } from "react";
import NavBar from "../Components/NavBar";

export default function Search(params) {
  const [input, setInput] = useState("");
  return (
    <>
      <NavBar title="جست و جو" />
      <section className="mt-[70px] w-full">
        <input
          type="text"
          className="border outline-none focus:border-primary px-4 p-2 border-white bg-background w-full max-w-[calc(100%-32px)] h-[43px] rounded-lg mx-4"
          onInput={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
      </section>
    </>
  );
}
