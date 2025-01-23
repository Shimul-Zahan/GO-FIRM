const BillingDetails = () => {
    const billingInfo = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 123-456-7890',
        address: '123 Main St, Springfield, USA',
        cardNumber: '**** **** **** 1234',
        expiryDate: '12/25',
        billingPlan: 'Premium Plan',
    };

    return (
        <>
            <div className="max-w-7xl mx-auto py-10 min-h-screen">
                {/* Main Content */}
                <div className="rounded-lg shadow-xl bg-white lg:col-span-2 p-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Billing Information</h1>
                        <div className="space-y-4 text-lg">
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Name:</span>
                                <span>{billingInfo.name}</span>
                            </div>
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Email:</span>
                                <span>{billingInfo.email}</span>
                            </div>
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Phone:</span>
                                <span>{billingInfo.phone}</span>
                            </div>
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Address:</span>
                                <span>{billingInfo.address}</span>
                            </div>
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Card Number:</span>
                                <span>{billingInfo.cardNumber}</span>
                            </div>
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Expiry Date:</span>
                                <span>{billingInfo.expiryDate}</span>
                            </div>
                            <div className="flex gap-20  justify-start items-center">
                                <span className="font-semibold">Billing Plan:</span>
                                <span>{billingInfo.billingPlan}</span>
                            </div>
                        </div>
                        <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                            Update All
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillingDetails;
