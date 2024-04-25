import { IoMailUnreadOutline } from "react-icons/io5"
import { RiCustomerService2Fill } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"

const WhyChooseUS = () => {

    const items = [
        {
            icon: <TbTruckDelivery />,
            title: 'Free Delivery Across the US!',
            desc: 'Free delivery for all orders above $100'
        },
        {
            icon: <IoMailUnreadOutline />,
            title: '100% Satisfaction Guarantee!',
            desc: 'Providing help in case of dissatisfaction'
        },
        {
            icon: <RiCustomerService2Fill />,
            title: 'Top-Notch Support',
            desc: 'Chat with us if you’ve any questions'
        },
        {
            icon: <TbTruckDelivery />,
            title: 'Secure Payments',
            desc: 'We use safest payment technologies'
        },
    ]

    return (
        <div className='px-10 pb-10'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                    items && (
                        items?.map((item, index) =>
                            <div key={index} className="text-center flex flex-col justify-center items-center gap-4 text-3xl text-orange-500">
                                {item?.icon}
                                <h1 className="text-xl font-medium text-black">{item?.title}</h1>
                                <p className="text-base font-medium text-black">{item?.desc}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default WhyChooseUS