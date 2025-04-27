"use client"
import Sidebar from "@/components/sidebar";
import SkillTestCard from "@/components/skilltestcard";
import SyllabusAnalysis from "@/components/syllabus_analysis";
import QuestionAnalysis from "@/components/question_analysis";
import QuickStats from "@/components/quickstats";
import ComparisonGraph from "@/components/comparion_graph";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { useSkillStore } from "@/store/useskillstore";

export default function Dashboard() {
  const {score} = useSkillStore();
  const [progress, setProgress]=useState<number | undefined>(undefined)
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const a = (score / 15) *100;
    if (score !== undefined) {
      setProgress(a);
    } else {
      setProgress(0);
    }
    console.log(score, a)
  }, [score]);

  
  return (
    <div className=" bg-white min-h-screen">
      <Navbar/>
      <div className="flex pb-2 bg-gray-50 ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 lg:px-8 w-full px-3">
        <p className="text-gray-600 text-xl mt-7 mb-7">Skill Test</p>
          <div className=" lg:flex gap-8">
            <div className=" lg:w-[80%]">
              <SkillTestCard />
              <div className="mt-6">
                <QuickStats />
                <ComparisonGraph />
              </div>
            </div>
            <div className="space-y-6">
              <SyllabusAnalysis />
              <QuestionAnalysis progress={progress || 0} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
