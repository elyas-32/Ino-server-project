import { SetStateAction, useState } from "react";
import BackBtn from "./Buttons/BackBtn";
import ToggleGrid from "./Buttons/ToggleGridBtn";
import { useLocation } from "react-router-dom";
import SearchBtn from "./Buttons/SearchBtn";
import Detail from "./Detail";
import ShareBtn from "./Buttons/ShareBtn";
import DetailBtn from "./Buttons/DetailBtn";
import HeaderLogo from "./HeaderLogo";
interface NavBarPropsGrid {
  setGrid: React.Dispatch<SetStateAction<boolean>>;
  grid: boolean;
  title?:string;
}
interface NavBarPropsTitle {
  title:string;
  setGrid?: React.Dispatch<SetStateAction<boolean>>;
  grid?: boolean;
}
type NavBarProps = NavBarPropsGrid | NavBarPropsTitle ;
export default function NavBar({ title, setGrid, grid }:NavBarProps) {
  const [show, setShow] = useState(false);
  const Location = useLocation();
  let showSomethingFlag =
    Location.pathname === "/" || Location.pathname === "/products"
      ? true
      : false;
  return (
    <>
      {showSomethingFlag && <Detail setShow={setShow} show={show} />}
      <nav className="w-full flex items-center justify-between h-[70px] fixed max-w-[700px] top-0 z-10 bg-background">
        {showSomethingFlag ? (
          <div className="flex items-center">
            {showSomethingFlag && <DetailBtn setShow={setShow} />}
            {Location.pathname === "/products" ? (
              <SearchBtn />
            ) : Location.pathname === "/" && grid && setGrid? (
              <ToggleGrid grid={grid} setGrid={setGrid} />
            ) : (
              ""
            )}
          </div>
        ) : Location.pathname.includes("/products/") ? (
          <ShareBtn />
        ) : (
          <div></div>
        )}
        {showSomethingFlag ? (
          <HeaderLogo />
        ) : (
          <h1 className="text-lg">{title}</h1>
        )}
        <BackBtn />
      </nav>
    </>
  );
}
