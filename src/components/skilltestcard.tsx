"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { z } from "zod";
import { useSkillStore } from "@/store/useskillstore";

const numberSchema = z.number({
  required_error: "This field is required",
  invalid_type_error: "Must be a number",
});

export default function SkillTestCard() {
  const [modal, setShowModal] = useState(false);

  const { rank, percentile, score, setRank, setPercentile, setScore } = useSkillStore();

  const [localRank, setLocalRank] = useState<number | undefined>(rank);
  const [localPercentile, setLocalPercentile] = useState<number | undefined>(percentile);
  const [localScore, setLocalScore] = useState<number | undefined>(score);

  const [rankError, setRankError] = useState("");
  const [percentileError, setPercentileError] = useState("");
  const [scoreError, setScoreError] = useState("");

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setLocalRank(undefined);
      setRankError("required! should be number");
      return;
    }
    const numValue = Number(value);
    setLocalRank(numValue);

    const parsed = numberSchema.safeParse(numValue);
    setRankError(parsed.success ? "" : "required! should be number");
  };


  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setLocalPercentile(undefined);
      setPercentileError("required! percentile 0-100");
      return;
    }
    const numValue = Number(value);
    setLocalPercentile(numValue);

    const parsed = numberSchema.safeParse(numValue);
    setPercentileError(parsed.success ? "" : "required! percentile 0-100");
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setLocalScore(undefined);
      setScoreError("required! should be number");
      return;
    }
    const numValue = Number(value);
    setLocalScore(numValue);

    const parsed = numberSchema.safeParse(numValue);
    setScoreError(parsed.success ? "" : "required! should be number");
  };

  const handleSubmit = () => {
    if (!localRank || !localPercentile || !localScore) {
      alert("Fill all fields correctly!");
      return;
    }

    // Update the store only when Save is clicked
    setRank(localRank);
    setPercentile(localPercentile);
    setScore(localScore);

    console.log("Saved!", { rank: localRank, percentile: localPercentile, score: localScore });
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setLocalRank(rank);
    setLocalPercentile(percentile);
    setLocalScore(score);
    setShowModal(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-300">
      <div className="md:flex justify-between items-center">
        <div>
          <div className="flex items-center gap-5">
            <div>
              <Image src="/icons/html-5.png" alt="Html" width={50} height={50} />
            </div>
            <div>
              <h2 className="lg:text-lg font-semibold text-black">
                Hyper Text Markup Language
              </h2>
              <p className="text-gray-500 ">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0 flex">
        <button
          onClick={handleOpenModal}
          className=" px-8 py-3 hover:bg-blue-900 bg-blue-950 text-white rounded-md cursor-pointer"
        >
          Update
        </button>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[70%] xl:w-[40%] z-50">
            <div className="flex justify-between px-3 items-center">
              <h1 className="font-bold text-2xl">Update Scores</h1>
              <Image src="/icons/html-5.png" alt="html" width={50} height={50} />
            </div>

            <div className="mt-6 space-y-8">
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-full">
                    <p className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      1
                    </p>
                    <label>
                      Update your <span className="font-bold">Rank</span>
                    </label>
                  </div>
                  <div className="flex justify-end">
                  <input
                    placeholder="Rank"
                    type="text"
                    value={localRank ?? ""}
                    onChange={handleRankChange}
                    className={`h-10 w-[70%] md:w-full border rounded-lg p-2 outline-none ${
                      rankError ? "border-red-500" : "border-blue-600"
                    }`}
                  />
                  {rankError && <p className="text-red-500 text-sm">{rankError}</p>}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-full">
                    <p className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      2
                    </p>
                    <label>
                      Update your <span className="font-bold">Percentile</span>
                    </label>
                  </div>
                  <div className="flex justify-end">
                  <input
                    placeholder="Percentile"
                    type="text"
                    value={localPercentile ?? ""}
                    onChange={handlePercentileChange}
                    className={`h-10 w-[70%] md:w-full border rounded-lg p-2 outline-none ${
                      percentileError ? "border-red-500" : "border-blue-600"
                    }`}
                  />
                  {percentileError && (
                  <p className="text-red-500 text-sm">{percentileError}</p>
                  )}
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center w-full">
                    <p className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      3
                    </p>
                    <label>
                      Update your <span className="font-bold">current score (out of 15)</span>
                    </label>
                  </div>
                  <div className="flex justify-end">
                  <input
                    placeholder="Score"
                    type="text"
                    value={localScore ?? ""}
                    onChange={handleScoreChange}
                    className={`h-10 w-[70%] md:w-full border rounded-lg p-2 outline-none ${
                      scoreError ? "border-red-500" : "border-blue-600"
                    }`}
                    />
                    {scoreError && <p className="text-red-500 text-sm">{scoreError}</p>}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-end mt-6 gap-6">
              <button
                onClick={() => setShowModal(false)}
                className="border-2 border-blue-800 text-blue-800 p-3 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer"
              >
                cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={localRank === undefined || localPercentile === undefined || localScore===undefined}
                className={` px-12 ${localRank === undefined || localPercentile === undefined || localScore===undefined ? "bg-gray-400 cursor-not-allowed": "bg-blue-900 cursor-pointer"} rounded-lg font-bold text-white flex items-center gap-2`}
              >
                save <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
