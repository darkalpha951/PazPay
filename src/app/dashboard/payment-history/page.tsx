"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const payments = [
  { id: 1, date: "2025-04-01", amount: "$500", status: "Completed" },
  { id: 2, date: "2025-03-15", amount: "$300", status: "Pending" },
  { id: 3, date: "2025-02-28", amount: "$200", status: "Failed" },
  { id: 4, date: "2025-02-10", amount: "$400", status: "Completed" },
];

const PaymentHistory: React.FC = () => {

    const router = useRouter();
    const onLogout = async () => {
        try {
            const response = axios.get("/api/users/logout")
            router.push("/login")
        } catch (error:any) {
            console.log("Logout failed!", error.message)
        }
    }

  return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mt-18">
            <header className="flex justify-between items-center px-10 py-5 bg-white shadow-md fixed top-0 left-0 w-full">
                    {/* Logo */}
                    <h1 className="text-3xl font-extrabold">
                        <span className="text-red-500">Paz</span>
                        <span className="text-blue-600">Pay</span>
                    </h1>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-12 text-gray-600 font-medium">
                        <Link href="/" className="hover:text-blue-500 transition">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-500 transition">
                            About Us
                        </Link>
                        <Link href="/#faq" className="hover:text-blue-500 transition">
                            FAQs
                        </Link>
                        <Link href="/#help" className="hover:text-blue-500 transition">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Buttons */}
                    <div className="space-x-4 flex items-center">
                        <button className="cursor-pointer bg-pink-500 text-white px-6 py-2 text-sm font-semibold rounded-lg hover:bg-pink-600 transition" onClick={onLogout}>
                            Logout
                        </button>
                    </div>
            </header>
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Payment History</h1>
                <p className="mt-2 text-gray-600">Review your past transactions and their statuses.</p>
                
                <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Amount</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 px-4 py-2 text-black">{payment.date}</td>
                        <td className="border border-gray-300 px-4 py-2 text-black">{payment.amount}</td>
                        <td className={`border border-gray-300 px-4 py-2 font-semibold 
                            ${payment.status === "Completed" ? "text-green-600" : 
                            payment.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}
                        >
                            {payment.status}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;
