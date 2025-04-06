"use client"

import React, {useState, useEffect} from "react";
import Link from "next/link";

export default function Home() {

    const [date, setDate] = useState(0);
    useEffect(
        () => setDate(new Date().getFullYear()), []
    );

    return (
        <div className="bg-white min-h-screen font-sans">
        {/* Header */}
        <header className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
            {/* Logo */}
            <h1 className="text-3xl font-extrabold">
                <span className="text-red-500">Paz</span>
                <span className="text-blue-600">Pay</span>
            </h1>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-12 text-gray-600 font-medium">
            <Link href="#" className="hover:text-blue-500 transition">
                Home
            </Link>
            <Link href="#about" className="hover:text-blue-500 transition">
                About Us
            </Link>
            <Link href="#faq" className="hover:text-blue-500 transition">
                FAQs
            </Link>
            <Link href="/contact" className="hover:text-blue-500 transition">
                Contact Us
            </Link>
            </nav>

            {/* Buttons */}
            <div className="space-x-4 flex items-center">
            <button className="cursor-pointer border border-black px-5 py-2 text-sm text-black rounded-lg hover:bg-gray-100 transition">
                <Link href="/dashboard">Dashboard</Link>
            </button>
            <button className="cursor-pointer border px-5 py-2 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-100 transition">
            <Link href="/login">Login</Link>
            </button>
            <button className="cursor-pointer bg-pink-500 text-white px-6 py-2 text-sm font-semibold rounded-lg hover:bg-pink-600 transition">
            <Link href="/signup">Register</Link>
            </button>
            </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between p-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-3xl shadow-lg mx-6 my-12 min-h-[70vh]">
            <div className="z-10">
            <h2 className="text-5xl font-bold leading-tight">
                Affordable College Fees, One installment at a time.
            </h2>
            <p className="mt-4 text-lg">
                Flexible payment plans for students. No heavy loans, No Stress!
            </p>
            <div className="mt-6 space-x-4">
                <button className="border border-white px-6 py-2 bg-transparent text-white rounded-lg hover:bg-white hover:text-blue-600 transition cursor-pointer">
                <Link href="/signup">Sign up for free</Link>
                </button>
                <button className="bg-red-500 px-6 py-2 rounded-lg text-white hover:bg-red-600 transition cursor-pointer">
                <Link href="/crowdfunding">Apply for CrowdFunding →</Link>
                </button>
            </div>
            </div>
            <div className="relative mt-6 md:mt-0 w-full flex justify-center">
            <div className="absolute inset-0 bg-blue-700 opacity-40 rounded-2xl"></div>
            <img
                src="/ChatAi.png"
                alt="Chat UI"
                className="rounded-2xl shadow-xl relative z-10"
            />
            </div>
        </section>

            {/* AI University Counselor Banner */}
            <section className="flex justify-center mt-10">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold py-6 px-10 rounded-2xl shadow-lg flex justify-between items-center w-[90%] max-w-4xl">
                <span>Access your AI university counselor now!</span>
                <button className="bg-yellow-400 text-black px-6 py-2 font-bold rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                <Link href="/signup"> Sign Up </Link>
                </button>
            </div>
            </section>

            {/* About Us Section */}
            <section className="text-center mt-30 mb-20" id="about">
                <h2 className="text-2xl text-black font-bold">About Us</h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    At <span className="font-bold">Paz<span className="text-blue-600">Pay</span></span>, we believe that financial constraints should never be a barrier to education.
                    We provide students with flexible fee payment options, making higher education more flexible and stress-free.
                </p>
            </section>

            {/* Testimonials Heading */}
            <section className="py-12 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center text-black mb-8">
                Testimonials
            </h2>
            
            {/* Testimonials Container */}
            <div className="relative flex items-center justify-center scrollbar-hide">
                {/* Left Arrow
                <button className="absolute left-0 z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition cursor-pointer">
                ◀
                </button> */}

                {/* Testimonials Scrollable List */}
                <div className="flex overflow-x-auto space-x-6 scrollbar-hide snap-x snap-mandatory w-full max-w-5xl px-12">
                {/* Testimonial 1 */}
                <div className="w-[350px] min-w-[350px] bg-white shadow-md rounded-lg p-6 border border-gray-300 snap-start">
                    <h3 className="text-xl font-bold text-blue-600">Sample Testimonial</h3>
                    <p className="font-semibold text-gray-700">XYZ University</p>
                    <p className="mt-2 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam saepe perspiciatis eum numquam harum ex eligendi in quo voluptas nihil animi, rerum impedit architecto veritatis maiores non dolorum nesciunt nisi nulla id debitis sit libero! Dolore nemo labore maiores, ducimus, obcaecati quod exercitationem possimus reiciendis consectetur, recusandae in inventore?
                    </p>
                    <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
                    <p className="mt-2 text-sm text-gray-600">Verified Student</p>
                    <p className="text-sm text-gray-600">🔵 2022 Batch</p>
                </div>

                {/* Testimonial 2 */}
                <div className="w-[350px] min-w-[350px] bg-white shadow-md rounded-lg p-6 border border-gray-300 snap-start">
                    <h3 className="text-xl font-bold text-blue-600">Sample Testimonial</h3>
                    <p className="font-semibold text-gray-700">XYZ University</p>
                    <p className="mt-2 text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora necessitatibus ratione quae natus explicabo eum impedit consectetur? Vel iure ipsa nemo dolorum doloribus totam mollitia? Omnis, numquam velit cupiditate quo quasi molestiae quaerat esse animi atque molestias pariatur reiciendis doloremque blanditiis quos quas in minima nihil id! Non, reprehenderit!
                    </p>
                    <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
                    <p className="mt-2 text-sm text-gray-600">Verified Student</p>
                    <p className="text-sm text-gray-600">🔵 2022 Batch</p>
                </div>

                {/* Testimonial 3 */}
                <div className="w-[350px] min-w-[350px] bg-white shadow-md rounded-lg p-6 border border-gray-300 snap-start">
                <h3 className="text-xl font-bold text-blue-600">Sample Testimonial</h3>
                    <p className="font-semibold text-gray-700">XYZ University</p>
                    <p className="mt-2 text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ipsam ad quod cum quam sed, velit aspernatur molestias repellendus ut, sunt fugiat? Rem consectetur laborum reprehenderit minus voluptatum quia quae praesentium molestiae ad recusandae officiis aliquid enim voluptatem amet, quos cupiditate debitis? Ex facilis architecto assumenda suscipit quam id magni.
                    </p>
                    <p className="mt-2 text-yellow-500">⭐⭐⭐⭐⭐</p>
                    <p className="mt-2 text-sm text-gray-600">Verified Student</p>
                    <p className="text-sm text-gray-600">🔵 2022 Batch</p>
                </div>
                </div>

                {/* Right Arrow
                <button className="absolute right-0 z-10 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition cursor-pointer">
                ▶
                </button> */}
            </div>
            </section>

            
            <div className="max-w-3xl mx-auto my-10 text-black p-6" id="faq">
                <h2 className="text-3xl font-bold  text-center mb-6">FAQ</h2>
                <div className="space-y-4">
                    <details className="p-4 border rounded-lg">
                    <summary className="font-semibold cursor-pointer">
                        What are the available installment plans?
                    </summary>
                    <p className="mt-2 text-gray-600">
                    We offer flexible installment plans tailored to students' financial needs. Typically, students can repay their education fees in 6, 12, 18, or 24-month EMIs, depending on their eligibility and the college's acceptance of the payment structure. Interest rates vary based on the plan chosen, with 5% annual interest on EMIs. Students may also have the option of zero-interest EMI if they qualify for specific financial aid programs.
                    </p>
                    </details>

                    <details className="p-4 border rounded-lg">
                    <summary className="font-semibold cursor-pointer">
                        What happens if I miss an installment?
                    </summary>
                    <p className="mt-2 text-gray-600">
                    If you miss an installment, you will be given a grace period of 7 days to make the payment without penalty. After this period, a late fee of 2% of the EMI amount will be charged. Repeated missed payments may lead to: 
                    <br />
                    <br />
                    <p>1. Increased interest rates on future payments.</p>
                    <p>2. Impact on credit history, affecting your ability to secure future loans.</p>
                    <p>3. If multiple payments are missed, the funding contract may be revoked, and legal action could be taken depending on the terms of your agreement.</p>
                    <br />
                    <p>However, if you are facing financial difficulties, we encourage you to contact our support team as soon as possible. We offer temporary relief options like deferred payments or crowdfunding assistance.</p>
                    </p>
                    </details>

                    <details className="p-4 border rounded-lg">
                    <summary className="font-semibold cursor-pointer">
                        How do I apply for funding assistance?
                    </summary>
                    <p className="mt-2 text-gray-600">
                    If you are struggling to make your EMI payments, you can apply for funding assistance through our platform. Here’s how:
                    <br />
                    <br />
                    <p>1. Submit an Application – Provide details about your financial situation, the amount needed, and supporting documents.</p>
                    <p>2. Verification Process – Our team will assess your case to ensure legitimacy.</p>
                    <p>3. Approval & Disbursement – Once approved, the required funds will be allocated to cover your EMI payments, reducing your financial burden.</p>
                    <br />
                    <p>To maximize your chances, ensure your application is transparent and well-documented. Let me know if you need further refinements!</p>
                    </p>
                    </details>
                </div>
            </div>


            <footer className="bg-gray-900 text-white py-10">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {/* Column 1 - About */}
                    <div>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-400">
                        We provide flexible installment plans for students to afford quality education without financial burdens.
                    </p>
                    </div>

                    {/* Column 2 - Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Education Loan Assistance</li>
                            <li className="text-gray-400">Flexible EMI Plans</li>
                            <li className="text-gray-400">Crowdfunding Support</li>
                            <li className="text-gray-400">College Partnerships</li>
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-gray-400">Email: garvitsingh006@gmail.com</p>
                    <p className="text-gray-400">Phone: +91 9876478293</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                        <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                        <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                        <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                    &copy; {date} Your Platform. All rights reserved.
                </div>
            </footer>


        </div>
    );
}
