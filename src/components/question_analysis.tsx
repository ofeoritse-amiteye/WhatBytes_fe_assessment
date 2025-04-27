"use client"
import Image from "next/image";
import { useSkillStore } from "@/store/useskillstore";

interface CircularProgressProps {
  progress: number;
}

export default function QuestionAnalysis({ progress }: CircularProgressProps) {
  const {score} = useSkillStore();
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-300">
        <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-black">Question Analysis</h3>
        <p className="text-blue-600 font-bold">{score}/15</p>
        </div>
        <p className=" text-gray-600 mt-2">
          You scored <strong>{score}</strong> questions correct out of <strong>15</strong>. However it still needs some improvements.
        </p>
        <div className="flex w-full justify-center">
        <div className="relative w-64 h-64">
          <svg className="w-full h-full rotate-[-290deg]">
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#E5E7EB" 
              strokeWidth="25"
              fill="transparent"
            />
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              stroke="#3B82F6" // blue progress
              strokeWidth="25"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/icons/target.png" alt="Target Icon" width={40} height={40} />
          </div>
        </div>
        </div>
      </div>
    );
  }
  