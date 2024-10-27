import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <div className="w-full h-[100vh] flex flex-col items-center  justify-center text-primary gap-4">
            <h1 className="text-6xl">404</h1>
            <h2 className="text-white ">با عرض پوزش چنین صفحه ای وجود ندارد</h2>
            <Link to='/' className="border border-primary hover:bg-primaryDarker p-2 rounded-lg">بازگشت به صفحه اصلی</Link>       
        </div>
    )
};
