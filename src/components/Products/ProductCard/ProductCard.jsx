const ProductCard = () => {
    return (
        <div>
            <div>
                <img className="max-w-[306px] max-h-[353px] rounded-xl" src="https://shofi-grocery.vercel.app/images/product/product-1.jpg" alt="" />
            </div>
            <div className="mt-5">
                <p className="text-[#55585b]">Baby Food</p>
                <h3 className="text-[20px] hover:text-[#678e61] duration-150 transition-all ease-linear font-medium">Ergonomic Linen Pants</h3>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
                <p className="text-[16px] font-medium">$25.00</p>
            </div>
        </div>
    );
};

export default ProductCard;