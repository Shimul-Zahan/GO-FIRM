import Marquee from "react-fast-marquee";
import { IoMailUnreadOutline } from "react-icons/io5";

const SlideNavbar = () => {
    return (
        <div className="bg-[#ec6e55] py-2">
            <Marquee pauseOnHover={true} className="text-white">
                <div className="flex justify-center items-center gap-2 mr-16">
                    <IoMailUnreadOutline className="text-black" />
                    <h1>Welcome to FastCart the world of Grocerries.</h1>
                </div>
                <div className="flex justify-center items-center gap-2 mr-16">
                    <IoMailUnreadOutline className="text-black" />
                    <h1>Welcome to FastCart the world of Grocerries.</h1>
                </div>
                <div className="flex justify-center items-center gap-2 mr-16">
                    <IoMailUnreadOutline className="text-black" />
                    <h1>Welcome to FastCart the world of Grocerries.</h1>
                </div>
                <div className="flex justify-center items-center gap-2 mr-16">
                    <IoMailUnreadOutline className="text-black" />
                    <h1>Welcome to FastCart the world of Grocerries.</h1>
                </div>
                <div className="flex justify-center items-center gap-2 mr-16">
                    <IoMailUnreadOutline className="text-black" />
                    <h1>Welcome to FastCart the world of Grocerries.</h1>
                </div>
            </Marquee>
        </div>
    )
}

export default SlideNavbar