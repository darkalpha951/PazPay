"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
    const router = useRouter();
    const onLogout = async () => {
        try {
            const response = axios.get("/api/users/logout")
            router.push("/login")
        } catch (error:any) {
            console.log("Logout failed!", error.message)
        }
    }

    const [id, setId] = useState("Nothing");
    const fetchData = async () => {
        try {
            const response = await axios.get("/api/users/me");
            setId(response.data.data._id);
        } catch (error:any) {
            console.log("Error while fetching data", error.message)
        }
    }
    

    return (
        <div className="flex h-screen">
            <div className="flex flex-col justify-center items-center w-full bg-white p-10">
                <h2 className="text-2xl font-bold mb-6 text-black">Dashboard</h2>
                <p className="text-gray-700">Welcome to the Dashboard!</p>
                <p className="text-gray-700">{id === "Nothing" ? "Nothing" : <Link href={`/dashboard/${id}`}>Go to ur real profile</Link>}</p>
                <button onClick={onLogout} className="bg-black text-white border cursor-pointer p-2 rounded-full mt-3">Logout</button>
                <button onClick={fetchData} className="bg-black text-white border cursor-pointer p-2 rounded-full mt-3">Get User Id</button>
            </div>
        </div>
    );
}