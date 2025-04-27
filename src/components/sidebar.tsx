"use client"
import { MdBarChart} from "react-icons/md";
import { useState } from "react";
import { PiFile, PiMedalBold } from "react-icons/pi";

export default function Sidebar({ isOpen }: { isOpen: boolean; toggleSidebar: () => void }) {
  const [active, setactive] = useState("Skill Test")
  const handleclick=(item:string)=>{
    setactive(item)
  }

  if (!isOpen) {
    return (
      <div className="w-64 bg-white border border-r-gray-300 space-y-6 hidden xl:block">
      <nav className="space-y-3 mt-12 ">
        <div onClick={()=>handleclick("Dashboard")} className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 bg-gray-100 h-16 rounded-r-full w-[90%] px-3 ${active === "Dashboard" ? "text-blue-800 font-bold cursor-pointer hover:bg-gray-100 bg-gray-100":"text-gray-600 bg-transparent"}`}>
          <MdBarChart className="scale-x-[-1]"/> Dashboard
        </div>
        <div onClick={()=>handleclick("Skill Test")} className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 bg-gray-100 h-16 rounded-r-full w-[90%] px-3 ${active === "Skill Test" ? "text-blue-800 font-bold cursor-pointer hover:bg-gray-100 bg-gray-100":"text-gray-600 bg-transparent"}`}>
          < PiMedalBold className=" text-xl"/> Skill Test
        </div>
        <div onClick={()=>handleclick("Internship")} className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 bg-gray-100 h-16 rounded-r-full w-[90%] px-3 ${active === "Internship" ? "text-blue-800 font-bold cursor-pointer hover:bg-gray-100 bg-gray-100":"text-gray-600 bg-transparent"}`}>
          <PiFile className="text-xl" /> Internship
        </div>
      </nav>
    </div>
    )}

  return (
    <div
    className={`fixed top-0 left-0 w-[250px] max-w-xs h-full text-gray-100 shadow-2xl transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 z-50`}
    >
      <div className={`w-64 border-r-gray-300 space-y-6`}>
      <nav className="space-y-3 mt-12 ">
        <div onClick={()=>handleclick("Dashboard")} className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 bg-gray-100 h-16 rounded-r-full w-[90%] px-3 ${active === "Dashboard" ? "text-blue-800 font-bold cursor-pointer hover:bg-gray-100 bg-gray-100":"text-gray-600 bg-transparent"}`}>
          <MdBarChart className="scale-x-[-1]"/> Dashboard
        </div>
        <div onClick={()=>handleclick("Skill Test")} className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 bg-gray-100 h-16 rounded-r-full w-[90%] px-3 ${active === "Skill Test" ? "text-blue-800 font-bold cursor-pointer hover:bg-gray-100 bg-gray-100":"text-gray-600 bg-transparent"}`}>
          < PiMedalBold className=" text-xl"/> Skill Test
        </div>
        <div onClick={()=>handleclick("Internship")} className={`flex items-center gap-3 cursor-pointer hover:bg-gray-100 bg-gray-100 h-16 rounded-r-full w-[90%] px-3 ${active === "Internship" ? "text-blue-800 font-bold cursor-pointer hover:bg-gray-100 bg-gray-100":"text-gray-600 bg-transparent"}`}>
          <PiFile className="text-xl" /> Internship
        </div>
      </nav>
    </div>
    </div>
  );
}
