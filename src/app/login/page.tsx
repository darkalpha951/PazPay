'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex h-screen">
      {/* Left Side: Login Form */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white p-10">
        <h2 className="text-2xl font-bold mb-6 text-black">LOGIN</h2>
        <div className="w-80">
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Username</label>
            <input 
              type="text" 
              className="w-full p-3 border-none rounded-lg bg-gray-100 focus:outline-none text-gray-500" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full p-3 border-none rounded-lg bg-gray-100 focus:outline-none text-gray-500" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password"
            />
          </div>
          <div className="flex justfiy-center items-center flex-col">
            <button className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600">Login Now</button>
            <p className='text-black mt-2'>Don't have an account? <Link href="/signup" className='text-blue-600'>Signup</Link></p>
          </div>
        </div>
      </div>

        {/* Right Side: Image Section */}
        <div className="w-1/2 flex items-center justify-center bg-blue-700 p-10 relative">
            <div className="bg-white/25 p-6 rounded-2xl shadow-lg text-center w-96 relative backdrop-blur-md">
                <p className="text-2xl text-white font-semibold mb-2 px-2 py-1 rounded-md inline-block">
                Apply Now !!!
                </p>
                <div className="rounded-lg overflow-hidden">
                <Image 
                    src="/login.jpg" 
                    alt="Apply Now" 
                    width={350} 
                    height={400} 
                    className="object-cover w-full h-full"
                />
                </div>
            </div>
        </div>

    </div>
  );
}
