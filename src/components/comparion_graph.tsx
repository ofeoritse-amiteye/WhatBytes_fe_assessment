"use client"

import { FaChartLine } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Label } from "recharts";
import { useSkillStore } from "@/store/useskillstore";

export default function ComparisonGraph() {
  const data = [
    { percentile: 0, students: 2 },
    { percentile: 20, students: 3 },
    { percentile: 24, students: 4 },
    { percentile: 25, students: 7 },
    { percentile: 27, students: 10 },
    { percentile: 35, students: 14 },
    { percentile: 40, students: 18 },
    { percentile: 45, students: 20 },
    { percentile: 50, students: 27 },
    { percentile: 55, students: 20 },
    { percentile: 60, students: 12 },
    { percentile: 65, students: 7 },
    { percentile: 70, students: 5 },
    { percentile: 75, students: 4 },
    { percentile: 80, students: 3 },
    { percentile: 85, students: 2 },
    { percentile: 90, students: 2 },
    { percentile: 95, students: 1 },
    { percentile: 100, students: 2 },
  ];
  const { percentile } = useSkillStore();
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-300 mt-6">
        <h3 className="text-lg font-semibold text-black">Comparison Graph</h3>
        <div className="flex gap-4 w-full justify-between">
          <div className="">
            <p className="text-gray-600 mt-2"> <span className="font-bold"> You scored 30% percentile</span> which is lower than the <br className="hidden md:block" /> average percentile 72% of all the engineers who took this assessment.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-full hidden md:block">
            <FaChartLine className="text-red-500 h-5 w-5"/>
          </div>
        </div>
        <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="percentile" ticks={[0, 25, 50, 75, 100]} />
          <YAxis hide />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const point = payload[0].payload;
                return (
                  <div className="bg-white p-2 border rounded shadow text-black">
                    <p className="font-bold">{point.percentile}</p>
                    <p className="text-blue-800">numberOfStudent : {point.students}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="students"
            stroke="#A9A9A9"
            strokeWidth={2}
            dot={({ cx, cy, payload, index }) => {
              if (payload.percentile === percentile) {
                return (
                  <circle
                    key={`dot-active-${index}`}
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill="blue"
                    stroke="blue"
                    strokeWidth={2}
                  />
                );
              }
              return (
                <circle
                  key={`dot-${index}`}
                  cx={cx}
                  cy={cy}
                  r={3}
                  fill="white"
                  stroke="#A9A9A9"
                  strokeWidth={2}
                />
              );
            }}
            activeDot={{ r: 6, fill: "gray" }}
          />
          <ReferenceLine x={percentile} stroke="gray" strokeDasharray="3 3">
            <Label value="your percentile" position="insideLeft" angle={0} style={{ fill: 'gray', fontSize: 12 }} />
          </ReferenceLine>
        </LineChart>
      </ResponsiveContainer>
        </div>
      </div>
    );
  }