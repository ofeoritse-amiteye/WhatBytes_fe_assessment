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

  const [rankError, setRankError] = useState("");
  const [percentileError, setPercentileError] = useState("");
  const [scoreError, setScoreError] = useState("");

  const handleRankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setRank(undefined as unknown as number);
      setRankError("required! should be number");
      return;
    }
    const numValue = Number(value);
    setRank(numValue);

    const parsed = numberSchema.safeParse(numValue);
    setRankError(parsed.success ? "" : "required! should be number");
  };

  const handleRankBlur = () => {
    if (rank === undefined || isNaN(rank)) {
      setRankError("required! should be number");
      return;
    }
    const parsed = numberSchema.safeParse(rank);
    setRankError(parsed.success ? "" : parsed.error.issues[0]?.message || "Invalid Rank");
  };

  const handlePercentileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setPercentile(undefined as unknown as number);
      setPercentileError("required! percentile 0-100");
      return;
    }
    const numValue = Number(value);
    setPercentile(numValue);

    const parsed = numberSchema.safeParse(numValue);
    setPercentileError(parsed.success ? "" : "required! percentile 0-100");
  };

  const handlePercentileBlur = () => {
    if (percentile === undefined || isNaN(percentile)) {
      setPercentileError("required! percentile 0-100");
      return;
    }
    const parsed = numberSchema.safeParse(percentile);
    setPercentileError(parsed.success ? "" : parsed.error.issues[0]?.message || "Invalid Percentile");
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === "") {
      setScore(undefined as unknown as number);
      setScoreError("required! should be number");
      return;
    }
    const numValue = Number(value);
    setScore(numValue);

    const parsed = numberSchema.safeParse(numValue);
    setScoreError(parsed.success ? "" : "required! should be number");
  };

  const handleScoreBlur = () => {
    if (score === undefined || isNaN(score)) {
      setScoreError("required! should be number");
      return;
    }
    const parsed = numberSchema.safeParse(score);
    setScoreError(parsed.success ? "" : parsed.error.issues[0]?.message || "Invalid Score");
  };

  const handleSubmit = () => {
    if (!rank || !percentile || !score) {
      alert("Fill all fields correctly!");
      return;
    }

    console.log("Saved!", { rank, percentile, score });
    setShowModal(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-300">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-5">
            <div>
              <Image src="/icons/html-5.png" alt="Html" width={50} height={50} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-black">
                Hyper Text Markup Language
              </h2>
              <p className="text-gray-500">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-10 py-3 bg-blue-900 text-white rounded-md cursor-pointer"
        >
          Update
        </button>
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
          <div className="absolute inset-0 bg-black opacity-65"></div>
          <div className="bg-white rounded-lg p-6 w-[40%] z-50">
            <div className="flex justify-between px-3 items-center">
              <h1 className="font-bold text-2xl">Update Scores</h1>
              <Image src="/icons/html-5.png" alt="html" width={50} height={50} />
            </div>

            <div className="mt-6 space-y-8">
              {/* Rank */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      1
                    </p>
                    <label>
                      Update your <span className="font-bold">Rank</span>
                    </label>
                  </div>
                  <div>
                  <input
                    placeholder="Rank"
                    type="text"
                    value={rank ?? ""}
                    onChange={handleRankChange}
                    onBlur={handleRankBlur}
                    className={`h-10 border rounded-lg p-2 outline-none ${
                      rankError ? "border-red-500" : "border-blue-600"
                    }`}
                  />
                  {rankError && <p className="text-red-500 text-sm">{rankError}</p>}
                  </div>
                </div>
              </div>

              {/* Percentile */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      2
                    </p>
                    <label>
                      Update your <span className="font-bold">Percentile</span>
                    </label>
                  </div>
                  <div>
                  <input
                    placeholder="Percentile"
                    type="text"
                    value={percentile ?? ""}
                    onChange={handlePercentileChange}
                    onBlur={handlePercentileBlur}
                    className={`h-10 border rounded-lg p-2 outline-none ${
                      percentileError ? "border-red-500" : "border-blue-600"
                    }`}
                  />
                  {percentileError && (
                  <p className="text-red-500 text-sm">{percentileError}</p>
                  )}
                  </div>
                </div>
              </div>

              {/* Score */}
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      3
                    </p>
                    <label>
                      Update your <span className="font-bold">current score (out of 15)</span>
                    </label>
                  </div>
                  <div>
                  <input
                    placeholder="Score"
                    type="text"
                    value={score ?? ""}
                    onChange={handleScoreChange}
                    onBlur={handleScoreBlur}
                    className={`h-10 border rounded-lg p-2 outline-none ${
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
                className="bg-blue-900 px-12 rounded-lg font-bold text-white flex items-center gap-2 cursor-pointer"
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
