"use client"    

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
};

const Button: React.FC<ButtonProps> = ({ children, href, className = "", target = "_blank", rel = "noopener noreferrer" }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`px-6 py-3 rounded-lg text-lg font-semibold transition shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </a>
  );
};

const CrowdfundingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Support SmartEMI: Make Education Affordable</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Help us revolutionize education financing! Your contribution enables us to prepay colleges,
          allowing students to pay fees in affordable EMIs.
        </p>
        
        <div className="mt-8 flex flex-col space-y-4">
          <Button 
            href="https://www.gofundme.com/f/smartemi-education" 
            className="bg-blue-600 text-white hover:bg-blue-700 w-full py-4 rounded-xl"
          >
            Donate on GoFundMe
          </Button>
          <Button 
            href="https://www.ketto.org/fundraiser/smartemi-education"
            className="bg-green-600 text-white hover:bg-green-700 w-full py-4 rounded-xl"
          >
            Donate on Ketto
          </Button>
        </div>
        
        <div className="mt-10 text-gray-700 text-left">
          <h2 className="text-2xl font-semibold border-b pb-2">Why Support Us?</h2>
          <ul className="list-disc list-inside mt-4 space-y-3 text-lg">
            <li>Many students struggle with large upfront college fees.</li>
            <li>We provide a flexible EMI payment model to ease this burden.</li>
            <li>Your donations help us cover initial college payments while students pay over time.</li>
            <li>We ensure transparency and effective fund utilization.</li>
          </ul>
        </div>
        
        <div className="mt-10 text-gray-700">
          <h2 className="text-2xl font-semibold border-b pb-2">Other Ways to Help</h2>
          <p className="mt-4 text-lg">If you can't donate, consider sharing our campaign to spread the word!</p>
        </div>
      </div>
    </div>
  );
};

export default CrowdfundingPage;