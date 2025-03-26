"use client"

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e:any) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(user);
        setUser({
            name: "",
            email: "",
            message: "",
        })
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-md">
        <motion.h1 
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 text-black">
          {/* Contact Form */}
          <motion.form 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              id="name"
              value={user.name}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({...user, name: e.target.value})}
            />
            <input
              type="email"
              id="email"
              value={user.email}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <textarea
              rows={4}
              id="message"
              value={user.message}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({...user, message: e.target.value})}
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={handleSubmit}
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-lg font-semibold">📍 Address:</span>
              <p className="text-gray-700">123 Main Street, City, Country</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-lg font-semibold">📞 Phone:</span>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-blue-600 text-lg font-semibold">✉️ Email:</span>
              <p className="text-gray-700">contact@yourwebsite.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
