

const Banner = () => {
    return (
        <div className="flex justify-center mt-10 gap-9 ml-52">
            <div className="ml-24">
                <img src="https://shofi-grocery.vercel.app/images/slider/5/shape/shape-1.png" alt="" className="mt-16" />
                <h1 className="relative text-7xl mt-24 font-bold w-[500px]"> The Online
                    <span> <br />Grocery Store</span>
                    <img src="https://shofi-grocery.vercel.app/images/slider/5/shape/shape-4.png" alt="" className="absolute bottom-8 ml-[340px]" /></h1>
                <button className="btn mt-8 bg-[#678E61] px-5 rounded-full py-2 text-white ">Shop Now</button>
                <img src="https://shofi-grocery.vercel.app/images/slider/5/shape/shape-3.png" alt="" className="ml-96" />
            </div>
            <div>
                <img src="https://shofi-grocery.vercel.app/images/slider/5/slider-1.png" alt="" className="mt-24" />
            </div>
        </div>
    );
};

export default Banner;