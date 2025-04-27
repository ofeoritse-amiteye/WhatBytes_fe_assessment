
import { create } from 'zustand';

type SkillState = {
  rank: number;
  percentile: number;
  score: number;
  setRank: (rank: number) => void;
  setPercentile: (percentile: number) => void;
  setScore: (score: number) => void;
};

export const useSkillStore = create<SkillState>((set) => ({
  rank: 1,
  percentile: 30,
  score: 12,
  setRank: (rank) => set({ rank }),
  setPercentile: (percentile) => set({ percentile }),
  setScore: (score) => set({ score }),
}));