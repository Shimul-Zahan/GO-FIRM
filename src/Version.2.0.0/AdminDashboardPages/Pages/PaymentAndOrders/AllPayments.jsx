import React from "react";

const AllPaymentTable = () => {
    // Sample payment data
    const payments = [
        {
            paymentId: "PAY12345",
            orderId: "ORD12345",
            customerName: "John Doe",
            status: "Completed",
            amount: "$150.00",
            method: "Credit Card",
            date: "2025-01-20",
        },
        {
            paymentId: "PAY12346",
            orderId: "ORD12346",
            customerName: "Jane Smith",
            status: "Pending",
            amount: "$200.00",
            method: "PayPal",
            date: "2025-01-21",
        },
        {
            paymentId: "PAY12347",
            orderId: "ORD12347",
            customerName: "Alice Johnson",
            status: "Failed",
            amount: "$75.00",
            method: "Debit Card",
            date: "2025-01-22",
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Payment Table</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="py-2 px-4 border">Payment ID</th>
                            <th className="py-2 px-4 border">Order ID</th>
                            <th className="py-2 px-4 border">Customer Name</th>
                            <th className="py-2 px-4 border">Status</th>
                            <th className="py-2 px-4 border">Amount</th>
                            <th className="py-2 px-4 border">Payment Method</th>
                            <th className="py-2 px-4 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr
                                key={payment.paymentId}
                                className={`text-center ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    }`}
                            >
                                <td className="py-2 px-4 border">{payment.paymentId}</td>
                                <td className="py-2 px-4 border">{payment.orderId}</td>
                                <td className="py-2 px-4 border">{payment.customerName}</td>
                                <td className="py-2 px-4 border">
                                    <span
                                        className={`px-2 py-1 rounded ${payment.status === "Completed"
                                            ? "bg-green-200 text-green-700"
                                            : payment.status === "Pending"
                                                ? "bg-yellow-200 text-yellow-700"
                                                : "bg-red-200 text-red-700"
                                            }`}
                                    >
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="py-2 px-4 border">{payment.amount}</td>
                                <td className="py-2 px-4 border">{payment.method}</td>
                                <td className="py-2 px-4 border">{payment.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPaymentTable;
