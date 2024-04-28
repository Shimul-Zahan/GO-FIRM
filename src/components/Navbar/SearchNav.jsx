import { IoMdSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";

const SearchNav = () => {
    return (
        <div className="flex justify-center items-center gap-10">
            <div className="h-11 w-[550px] flex justify-center items-center rounded-3xl relative">
                <input type="text" name="searchItem" placeholder="Search item here" className="h-full w-full rounded-2xl pl-10 outline-none border-none" />
                <div className="absolute top-0 left-0">
                    <div className="h-11 w-[45px] flex justify-center items-center text-2xl">
                        <IoMdSearch />
                    </div>
                </div>
                <div className="absolute top-0 right-0 cursor-pointer">
                    <div className="bg-black h-11 w-[105px] rounded-tr-2xl rounded-br-2xl text-white flex justify-center items-center text-base">
                        <p className="text-lg">Search</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <div className="flex justify-center items-center gap-2">
                    <div className="bg-[#7d9e77] text-2xl p-2 rounded-full text-white">
                        <LuUser2 />
                    </div>
                    <p className="text-white"><span className="text-[#92b08d]">Hello</span> <br /> Register</p>
                </div>
                <div className="bg-[#7d9e77] text-2xl p-2 rounded-full text-white relative">
                    <FaClipboardList />
                    <h1 className="absolute -top-1 -right-1 text-[10px] bg-white text-black h-4 w-4 rounded-full flex justify-center items-center">02</h1>
                </div>
                <div className="bg-[#7d9e77] text-2xl p-2 rounded-full text-white relative">
                    <MdOutlineShoppingBag />
                    <h1 className="absolute -top-1 -right-1 text-[10px] bg-white text-black h-4 w-4 rounded-full flex justify-center items-center">03</h1>
                </div>
            </div>
        </div>
    )
}

export default SearchNav