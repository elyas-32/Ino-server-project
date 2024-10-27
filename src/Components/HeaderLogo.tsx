import { useNavigate } from "react-router-dom";
export default function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => {
        navigate("/");
      }}
    >
      <img
        className="size-[45px] rounded-full ml-[10px]"
        src="https://cdn.topmenumarket.com/storage/provider/11/conversions/logo/ArdDNVqceoP4lPvpLOajTQCIpYFLffhIjBfIW3Og-logo.webp"
        alt="شایان شاندیز"
      />
      <p className="font-medium text-[16px]">شایان شاندیز</p>
    </div>
  );
}
