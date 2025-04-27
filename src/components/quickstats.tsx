"use client"
import Image from "next/image";
import { useSkillStore } from "@/store/useskillstore";

export default function QuickStats() {
  const { rank, percentile, score} = useSkillStore();
  return (
    <div className="bg-white p-3 rounded-xl border border-gray-300 space-y-1">
      <h3 className="text-lg font-semibold text-black">Quick Statistics</h3>
      <div className="flex px-4">
        <div className="flex items-center h-20 border-r border-gray-300 w-full gap-4 px-2">
          <div className="bg-gray-200 p-4 rounded-full">
            <Image src="/icons/trophy.png" alt="trophy" width={30} height={50}/>
          </div>
          <div className="">
            <p className="text-start font-bold text-black text-xl">{rank}</p>
            <p className="text-gray-500 text-xs">YOUR RANK</p>
          </div>
        </div>
        <div className="flex items-center h-20 border-r border-gray-300 w-full gap-4 px-2">
          <div className="bg-gray-200 p-4 rounded-full">
            <Image src="/icons/clipboard.png" alt="trophy" width={30} height={50}/>
          </div>
          <div className="px-2">
            <p className="text-start font-bold text-black text-xl">{percentile}%</p>
            <p className="text-gray-500 text-xs">PERCENTILE</p>
          </div>
        </div>
        <div className="flex items-center h-20 w-full gap-4 px-2">
          <div className="bg-gray-200 p-4 rounded-full">
            <Image src="/icons/square.png" alt="trophy" width={30} height={50}/>
          </div>
          <div className="">
            <p className="text-start font-bold text-black text-xl">{score}/15</p>
            <p className="text-gray-500 text-xs">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
