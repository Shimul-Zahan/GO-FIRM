import { IoMdSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Auth/AuthProvide";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchNav = () => {

    const { login_user, state } = useContext(MyContext);
    const [prods, setProds] = useState([]);
    const [white, setWhite] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://server-brown-tau.vercel.app/api/get-cart?email=${login_user?.email}`);
                setProds(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, [state]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://server-brown-tau.vercel.app/api/get-white?email=${login_user?.email}`);
                setWhite(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchData();
    }, [state]);

    return (
        <div className="flex justify-center items-center gap-10">
            <div className="h-11 w-[300px] flex justify-center items-center rounded-3xl relative">
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
                    <div className="bg-[#7d9e77] text-2xl p-1 rounded-full text-white">
                        {login_user && login_user.role !== 'google' ? (
                            <img src={`https://gofirm-server.vercel.app/api/image/${login_user.image}`} className="h-8 w-8 rounded-full" alt="" />
                        ) : login_user?.role === 'google' ? (
                            <img src={login_user.image} className="h-8 w-8 rounded-full" alt="" />
                        ) : (
                            <LuUser2 />
                        )}
                    </div>
                    {
                        login_user ? <p className="text-white"><span className="text-[#92b08d]">Hello</span> <br /> {login_user?.name}</p> :
                            <Link to='/reg' className="text-white"><span className="text-[#92b08d]">Hello</span> <br /> Register Now</Link>
                    }
                </div>
                <Link to='/wishlist' className="bg-[#7d9e77] text-2xl p-2 rounded-full text-white relative">
                    <FaClipboardList />
                    <h1 className="absolute -top-1 -right-1 text-[10px] bg-white text-black h-4 w-4 rounded-full flex justify-center items-center">{white?.length}</h1>
                </Link>
                <Link to="/cart" className="bg-[#7d9e77] text-2xl p-2 rounded-full text-white relative">
                    <MdOutlineShoppingBag />
                    <h1 className="absolute -top-1 -right-1 text-[10px] bg-white text-black h-4 w-4 rounded-full flex justify-center items-center">{prods?.length}</h1>
                </Link>
            </div>
        </div>
    )
}

export default SearchNav