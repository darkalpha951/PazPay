"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import { FaCreditCard, FaHistory, FaCalendarCheck, FaChevronDown } from 'react-icons/fa';

export default function Dashboard() {

    // Constants
    const router = useRouter();
    const [id, setId] = useState("Nothing");
    const [username, setUsername] = useState("Nothing");
    const [date, setDate] = useState("")
    const [feesOpen, setFeesOpen] = useState(false);
    const [datesOpen, setDatesOpen] = useState(false);
    const [balanceOpen, setBalanceOpen] = useState(false);


    // Functions
    const onLogout = async () => {
        try {
            const response = axios.get("/api/users/logout")
            router.push("/login")
        } catch (error:any) {
            console.log("Logout failed!", error.message)
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/users/me");
            setId(response.data.data._id);
            setUsername(response.data.data.username);
        } catch (error:any) {
            console.log("Error while fetching data", error.message)
        }
    }


    function getFormattedDate() {
        const date = new Date();
        
        // Get day, month, year, and weekday
        const day = date.getDate();
        const month = date.toLocaleString('en-GB', { month: 'long' });
        const year = date.getFullYear();
        const weekday = date.toLocaleString('en-GB', { weekday: 'long' });
    
        // Function to add ordinal suffix
        function getOrdinalSuffix(n:any) {
            if (n > 3 && n < 21) return "th"; // Covers 11th-19th
            switch (n % 10) {
                case 1: return "st";
                case 2: return "nd";
                case 3: return "rd";
                default: return "th";
            }
        }
    
        const ordinalSuffix = getOrdinalSuffix(day);
        
        setDate(`${day}${ordinalSuffix} ${month} ${year}, ${weekday}`);
    }

    useEffect(() => {
      fetchData();
      getFormattedDate();
    })
    
    

    return (
        <div className="min-h-screen bg-gray-50 p-6 pt-25">
            <header className="flex justify-between items-center px-10 py-5 bg-white shadow-md fixed top-0 left-0 w-full">
                {/* Logo */}
                <h1 className="text-3xl font-extrabold">
                    <span className="text-red-500">Smart</span>
                    <span className="text-blue-600">EMI</span>
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
      {/* Header */}
      <div className="flex justify-between items-center text-black font-semibold text-lg">
        <span>Welcome To Your Dashboard</span>
        <span className="text-gray-600">{date}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {/* Left Section */}
        <div className="md:col-span-2">
          {/* Greeting Section */}
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg flex items-center justify-between pl-20 pr-15">
            <div>
              <h2 className="text-3xl font-bold mb-4">Good Morning</h2>
              <p>Education should be a right, not a privilege!</p>
              <p>Pay flexibly, learn freely!</p>
            </div>
            <Image src="/study-illustration.png" alt="Study Illustration" width={300} height={300} />
          </div>

          {/* Payment Options */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <FaCreditCard />
              <span className="cursor-pointer">Make a Payment</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <FaHistory />
              <span className="cursor-pointer">Payment History</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <FaCalendarCheck />
              <span className="cursor-pointer">Installment Plans</span>
            </div>
          </div>

          {/* Funding & Support Buttons */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-green-600 text-white py-3 rounded-lg font-semibold cursor-pointer">SCHOLARSHIP</button>
            <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold cursor-pointer">APPLY FOR FUNDING</button>
            <button className="bg-red-600 text-white py-3 rounded-lg font-semibold cursor-pointer">AI CHAT SUPPORT</button>
          </div>
        </div>

        {/* Right Section - Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="flex flex-col items-center">
            <Image src="/profile.jpg" alt="User Profile" width={200} height={200} className="rounded-full object-cover aspect-square" />
            <h3 className="mt-5 mb-2 font-bold text-2xl text-black">{username}</h3>
            <p className="text-blue-600">Student</p>
          </div>
          
          {/* Fee Details */}
          <div className="mt-6 text-left text-gray-600 font-semibold">
                <div className="cursor-pointer hover:text-black" onClick={() => setFeesOpen(!feesOpen)}>
                ➤ Total Fees
                </div>
                {feesOpen && <p className="ml-6 text-sm mb-2 text-gray-500">Amount: $5000</p>}
                
                <div className="cursor-pointer hover:text-black mt-2" onClick={() => setDatesOpen(!datesOpen)}>
                ➤ Due Dates
                </div>
                {datesOpen && <p className="ml-6 text-sm mb-2 text-gray-500">Next Due: 15th July 2025</p>}
                
                <div className="cursor-pointer hover:text-black mt-2" onClick={() => setBalanceOpen(!balanceOpen)}>
                ➤ Balance
                </div>
                {balanceOpen && <p className="ml-6 text-sm mb-2 text-gray-500">Remaining: $2000</p>}
          </div>
        </div>
      </div>
    </div>
    );
}