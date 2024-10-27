import { useEffect, useState } from "react";
import FoodSection from "../Components/FoodSection";
import NavBar from "../Components/NavBar";
import {
  categoryImages,
  fetchData,
  categoryAPI,
  categoryIDs,
} from "../assets/data.jsx";
export interface CategoryItem {
      name: string
}
export default function Home() {
  const [grid, setGrid] = useState(false);
  const [categories, setCategories] = useState<CategoryItem[]>([]); 
  useEffect(() => {
    fetchData({ setState: setCategories, type: "GET", url: categoryAPI });
  }, []);
  return (
    <>
      <NavBar grid={grid} setGrid={setGrid} />
      <main
        className="mt-[70px] gap-[5px] m-[5px]"
        style={
          grid
            ? { display: "grid", gridTemplateColumns: "1fr 1fr" }
            : { display: "flex", flexDirection: "column" }
        }
      >
        {categories.map((category, index) => {
          return (
            <FoodSection
              image={categoryImages[index]}
              title={category.name}
              key={category.name}
              catID={categoryIDs[index]}
            />
          );
        })}
      </main>
    </>
  );
}
