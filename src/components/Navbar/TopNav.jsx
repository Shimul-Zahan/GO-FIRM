import { TbTruckDelivery } from "react-icons/tb";
import { IoMailUnreadOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";

const TopNav = () => {
    return (
        <div className='bg-[#0d1b1a] lg:px-10 px-3 gap-1 py-3 flex flex-col lg:flex-row justify-between items-start lg:items-center text-white'>
            <div className="flex justify-center items-center gap-2">
                <IoMailUnreadOutline className="text-orange-500" />
                <h1>info.freshcart.org@hosmail.com</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
                <TbTruckDelivery className="text-orange-500" />
                <h1>Delivery on Next Day From 10.00 Am to 10.00 PM</h1>
            </div>
            <div className="flex justify-center items-center gap-2">
                <RiCustomerService2Fill className="text-orange-500" />
                <h1>+880 171425455</h1>
            </div>
        </div>
    )
}

export default TopNav