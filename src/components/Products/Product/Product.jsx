import Navbar from "../../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";

const ShopPage = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-[1296px] mx-auto py-5">
                {/* <div>
                    <div><p className="text-[44px] font-medium">Shop Grid</p></div>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Shop Grid</a></li>
                        </ul>
                    </div>
                </div> */}

                <div className="grid grid-cols-4">
                    {/* Side bar */}
                    <div className="max-w-[330px] flex flex-col gap-10">
                        {/* Price Range */}
                        <div>
                            <p className="font-medium text-[18px] mb-3">Price Filter</p>
                            <input type="range" min={0} max="100" value="40" className="range range-success" />
                            <div className="flex justify-between items-center">
                                <span className="text-[#55585b] text-[14px]">$0 - $79</span>
                                <button className="bg-[#f5f5f5] text-[14px] px-5 py-1">Filter</button>
                            </div>
                        </div>
                        {/* Product status */}
                        <div>
                            <div className="mb-8">
                                <p className="font-medium text-[18px]">Product Status</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-none checkbox-accent" />
                                    <span className="text-[16px] text-[#55585b]">On sale</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer flex items-center gap-3">
                                    <input type="checkbox" className="checkbox h-[18px] w-[18px] rounded-none checkbox-accent" />
                                    <span className="text-[16px] text-[#55585b]">In Stock</span>
                                </label>
                            </div>
                        </div>
                        {/* Top Rated */}
                        <div>
                            <div className="mb-7">
                                <p className="font-medium text-[18px]">Top Rated Products</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-4">
                                    <div>
                                        <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <span className="text-xs text-[#55585b]">(5)</span>
                                        </div>
                                        <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                        <p className="text-[14px] text-[#55585b]">$55.00</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <span className="text-xs text-[#55585b]">(5)</span>
                                        </div>
                                        <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                        <p className="text-[14px] text-[#55585b]">$55.00</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <img className="h-[70px] w-[70px]" src="https://shofi-grocery.vercel.app/images/product/product-3.jpg" alt="" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <div className="rating rating-xs">
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                            </div>
                                            <span className="text-xs text-[#55585b]">(5)</span>
                                        </div>
                                        <h2 className="text-[16px] font-medium">Marshmallow Candy White</h2>
                                        <p className="text-[14px] text-[#55585b]">$55.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Popular brands */}
                        <div>
                            <div className="mb-7">
                                <p className="font-medium text-[18px]">Popular brands</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <img src="https://i.ibb.co/Ydf3C1H/brand-1.png" alt="" />
                                <img src="https://i.ibb.co/GTzWqnP/brand-2.png" alt="" />
                                <img src="https://i.ibb.co/YPzHpCD/brand-3.png" alt="" />
                                <img src="https://i.ibb.co/n3Wktzh/brand-4.png" alt="" />
                                <img src="https://i.ibb.co/xqTCvsL/brand-5.png" alt="" />
                                <img src="https://i.ibb.co/SfBRy61/brand-6.png" alt="" />
                            </div>
                        </div>
                        {/* Reset filter */}
                        <div>
                            <div className="mb-7">
                                <p className="font-medium text-[18px]">Popular brands</p>
                                <div className="divider m-0 h-0"></div>
                            </div>
                            <button className="bg-[#678e61] px-[48px] py-[9px] text-white rounded-full">Reset Filter</button>
                        </div>
                    </div>
                    <div className="mt-12 col-span-3 ml-8">
                        <div className="mb-7">
                            <div className="flex gap-2 items-center">
                                <button className="border border-black p-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3327 6.01341V2.98675C16.3327 2.04675 15.906 1.66675 14.846 1.66675H12.1527C11.0927 1.66675 10.666 2.04675 10.666 2.98675V6.00675C10.666 6.95341 11.0927 7.32675 12.1527 7.32675H14.846C15.906 7.33341 16.3327 6.95341 16.3327 6.01341Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3327 15.18V12.4867C16.3327 11.4267 15.906 11 14.846 11H12.1527C11.0927 11 10.666 11.4267 10.666 12.4867V15.18C10.666 16.24 11.0927 16.6667 12.1527 16.6667H14.846C15.906 16.6667 16.3327 16.24 16.3327 15.18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.33268 6.01341V2.98675C7.33268 2.04675 6.90602 1.66675 5.84602 1.66675H3.15268C2.09268 1.66675 1.66602 2.04675 1.66602 2.98675V6.00675C1.66602 6.95341 2.09268 7.32675 3.15268 7.32675H5.84602C6.90602 7.33341 7.33268 6.95341 7.33268 6.01341Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.33268 15.18V12.4867C7.33268 11.4267 6.90602 11 5.84602 11H3.15268C2.09268 11 1.66602 11.4267 1.66602 12.4867V15.18C1.66602 16.24 2.09268 16.6667 3.15268 16.6667H5.84602C6.90602 16.6667 7.33268 16.24 7.33268 15.18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <button className="border h-[40px] w-[40px] flex items-center justify-center">
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 7.11108H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 1H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 13.2222H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <p>Showing 1-9 of 17 results</p>
                            </div>
                            {/* Dropdown */}
                            <div>

                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPage;