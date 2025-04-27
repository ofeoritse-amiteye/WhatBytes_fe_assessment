export default function SyllabusAnalysis() {
    const data = [
      { label: "HTML Tools, Forms, History", percent: 80, color: "bg-blue-500" ,text:"text-blue-500" },
      { label: "Tags & References in HTML", percent: 60, color: "bg-orange-400" ,text:"text-orange-500" },
      { label: "Tables & References in HTML", percent: 24, color: "bg-red-400",text:"text-red-500" },
      { label: "Tables & CSS Basics", percent: 96, color: "bg-green-500",text:"text-green-500" },
    ];
  
    return (
      <div className="bg-white p-6 rounded-xl border border-gray-300">
        <h3 className="text-lg font-semibold mb-10 text-black ">Syllabus Wise Analysis</h3>
        {data.map((item, idx) => (
          <div key={idx} className="mb-10">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-500">{item.label}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.percent}%` }}></div>
              </div>
              <span className={`text-sm font-semibold ${item.text} `}>{item.percent}%</span>            
            </div>
          </div>
        ))}
      </div>
    );
  }
  