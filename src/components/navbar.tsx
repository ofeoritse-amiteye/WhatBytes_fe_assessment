"use client"
import Image from "next/image"
import Sidebar from "@/components/sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  
      const handleSidebarToggle = () => {
        setSidebarOpen(!isSidebarOpen);
      };

  return (
    <div className="bg-white h-20 border border-b-gray-200 flex items-center justify-between px-4">
        <motion.div
            initial={{ x: -300 }}
            animate={{ x: isSidebarOpen ? 0 : -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-[250px] bg-white text-gray-100 shadow-lg z-50 xl:hidden"
        >
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </motion.div>
        {isSidebarOpen && (
            <div onClick={handleSidebarToggle} className="absolute inset-0 bg-black opacity-65 z-40"></div>
        )}
        <div className="flex items-center gap-4 ">
        <button
            onClick={handleSidebarToggle}
            className="xl:hidden text-black p-2 rounded-lg hover:bg-blue-100"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
            <Image src="/images/whatbytes_logo.jpg" alt="logo" width={200} height={50} />
        </div>
        <div className="rounded-lg p-1 flex items-center border border-gray-200 gap-2">
            <div>
            <Image src="/images/profile.png" alt="logo" width={30} height={50} className="rounded-full" />
            </div>
            <div className="md:block hidden">
                <p className="text-black font-extrabold">Amiteye Ofe</p>
            </div>
        </div>
    </div>)
}
