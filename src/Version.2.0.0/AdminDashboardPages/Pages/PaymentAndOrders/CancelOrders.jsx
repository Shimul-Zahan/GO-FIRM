import React from "react";

const CancelOrders = () => {
    // Sample order data
    const orders = [
        {
            orderId: "ORD12345",
            customerName: "John Doe",
            email: "johndoe@example.com",
            phone: "+123456789",
            orderDate: "2025-01-20",
            deliveryDate: "2025-01-25",
            status: "cancel",
            paymentStatus: "Paid",
            paymentMethod: "Credit Card",
            totalAmount: "$150.00",
            address: "123 Main St, Cityville, USA",
            items: "T-shirt, Jeans",
            quantity: 3,
        },
        {
            orderId: "ORD12346",
            customerName: "Jane Smith",
            email: "janesmith@example.com",
            phone: "+987654321",
            orderDate: "2025-01-21",
            deliveryDate: "2025-01-26",
            status: "cancel",
            paymentStatus: "Pending",
            paymentMethod: "PayPal",
            totalAmount: "$200.00",
            address: "456 Elm St, Townsville, USA",
            items: "Shoes, Hat",
            quantity: 2,
        },
        // Add more orders as needed
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Cancel Orders Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="py-2 px-4 border">Order ID</th>
                            <th className="py-2 px-4 border">Customer Name</th>
                            <th className="py-2 px-4 border">Email</th>
                            <th className="py-2 px-4 border">Phone</th>
                            <th className="py-2 px-4 border">Order Date</th>
                            <th className="py-2 px-4 border">Delivery Date</th>
                            <th className="py-2 px-4 border">Status</th>
                            <th className="py-2 px-4 border">Payment Status</th>
                            <th className="py-2 px-4 border">Payment Method</th>
                            <th className="py-2 px-4 border">Total Amount</th>
                            <th className="py-2 px-4 border">Address</th>
                            <th className="py-2 px-4 border">Items</th>
                            <th className="py-2 px-4 border">Quantity</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr
                                key={index}
                                className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="py-2 px-4 border">{order.orderId}</td>
                                <td className="py-2 px-4 border">{order.customerName}</td>
                                <td className="py-2 px-4 border">{order.email}</td>
                                <td className="py-2 px-4 border">{order.phone}</td>
                                <td className="py-2 px-4 border">{order.orderDate}</td>
                                <td className="py-2 px-4 border">{order.deliveryDate}</td>
                                <td className="py-2 px-4 border">
                                    <span
                                        className={`px-2 py-1 rounded ${order.status === "Pending"
                                            ? "bg-yellow-200 text-yellow-700"
                                            : order.status === "Shipped"
                                                ? "bg-blue-200 text-blue-700"
                                                : "bg-green-200 text-green-700"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border">{order.paymentStatus}</td>
                                <td className="py-2 px-4 border">{order.paymentMethod}</td>
                                <td className="py-2 px-4 border">{order.totalAmount}</td>
                                <td className="py-2 px-4 border">{order.address}</td>
                                <td className="py-2 px-4 border">{order.items}</td>
                                <td className="py-2 px-4 border">{order.quantity}</td>
                                <td className="py-2 px-4 border">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                                        View
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CancelOrders;
