"use client"
import Image from "next/image";
import { useSkillStore } from "@/store/useskillstore";

export default function QuickStats() {
  const { rank, percentile, score } = useSkillStore();
  
  return (
    <div className="bg-white p-3 md:p-5 rounded-xl border border-gray-300 space-y-3">
      <h3 className="text-lg font-semibold text-black">Quick Statistics</h3>
      
      <div className="flex flex-col md:flex-row  gap-4 md:gap-0">
        <div className="flex items-center h-20 md:border-r border-gray-300 w-full gap-3 md:gap-4 px-2">
          <div className="bg-gray-200 p-3 md:p-4 rounded-full">
            <Image 
              src="/icons/trophy.png" 
              alt="trophy" 
              width={24} 
              height={24}
              className="w-6 h-6 md:w-7 md:h-7"
            />
          </div>
          <div className="">
            <p className="text-start font-bold text-black text-lg md:text-xl">{rank}</p>
            <p className="text-gray-500 text-xs font-semibold">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center h-20 md:border-r border-gray-300 w-full gap-3 md:gap-4 px-2">
          <div className="bg-gray-200 p-3 md:p-4 rounded-full">
            <Image 
              src="/icons/clipboard.png" 
              alt="clipboard" 
              width={24} 
              height={24}
              className="w-6 h-6 md:w-7 md:h-7"
            />
          </div>
          <div className="px-1 md:px-2">
            <p className="text-start font-bold text-black text-lg md:text-xl">{percentile}%</p>
            <p className="text-gray-500 text-xs font-semibold">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center h-20 w-full gap-3 md:gap-4 px-2">
          <div className="bg-gray-200 p-3 md:p-4 rounded-full">
            <Image 
              src="/icons/square.png" 
              alt="score" 
              width={24} 
              height={24}
              className="w-6 h-6 md:w-7 md:h-7"
            />
          </div>
          <div className="">
            <p className="text-start font-bold text-black text-lg md:text-xl">{score} / 15</p>
            <p className="text-gray-500 text-xs font-semibold">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}