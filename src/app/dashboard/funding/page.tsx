"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const FundingRequestForm: React.FC = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        parentName: "",
        annualIncome: "",
        amount: "",
        emiAmount: "",
        college: "",
        course: "",
        document: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
        setFormData({ ...formData, document: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const onLogout = async () => {
        try {
            const response = axios.get("/api/users/logout")
            router.push("/login")
        } catch (error:any) {
            console.log("Logout failed!", error.message)
        }   
    }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-18">
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
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Funding Request Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Parent/Guardian Name</label>
            <input 
              type="text" 
              name="parentName" 
              value={formData.parentName} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Annual Family Income (in INR)</label>
            <input 
              type="number" 
              name="annualIncome" 
              value={formData.annualIncome} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Requested Total Funding Amount (in INR)</label>
            <input 
              type="number" 
              name="amount" 
              value={formData.amount} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Requested Monthly EMI Amount (in INR)</label>
            <input 
              type="number" 
              name="emiAmount" 
              value={formData.emiAmount} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">College Name</label>
            <input 
              type="text" 
              name="college" 
              value={formData.college} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Course Name</label>
            <input 
              type="text" 
              name="course" 
              value={formData.course} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 rounded-lg" 
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium">Upload Supporting Document</label>
            <input 
              type="file" 
              name="document" 
              onChange={handleFileChange} 
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-400"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default FundingRequestForm;