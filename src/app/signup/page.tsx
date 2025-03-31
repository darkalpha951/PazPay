'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {useRouter} from "next/navigation";
import axios from 'axios';

export default function SignupPage() {

    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onSignUp = async () => {
        try {
            if(buttonDisabled) {
                return;
            }

            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signed In User: ", response.data)
            setLoading(false);
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed!", error.message)
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.username && user.email && user.password) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex h-screen">
        {/* Left Side: Login Form */}
        <div className="flex flex-col justify-center items-center w-1/2 bg-white p-10">
            <h2 className="text-2xl font-bold mb-6 text-black">{loading ? "Processing" : "Signup"}</h2>
            <div className="w-80">
            <div className="mb-4">
                <label className="block text-gray-900 mb-2">Username</label>
                <input 
                type="text" 
                className="w-full p-3 border-none rounded-lg bg-gray-100 focus:outline-none text-gray-500" 
                value={user.username} 
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Username"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-900 mb-2">Email</label>
                <input 
                type="email" 
                className="w-full p-3 border-none rounded-lg bg-gray-100 focus:outline-none text-gray-500" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-900 mb-2">Password</label>
                <input 
                type="password" 
                className="w-full p-3 border-none rounded-lg bg-gray-100 focus:outline-none text-gray-500" 
                value={user.password} 
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password"
                />
            </div>
            <div className="flex justfiy-center items-center flex-col">
                <button className={`w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 ${buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"} `} onClick={onSignUp}>Signup</button>
                <p className='text-black mt-2'>Already have an account? <Link href="/login" className='text-blue-600'>Login</Link></p>
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
