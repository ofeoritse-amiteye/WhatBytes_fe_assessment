
import { create } from 'zustand';

type SkillState = {
  rank: number | undefined;
  percentile: number | undefined;
  score: number | undefined;
  setRank: (rank: number) => void;
  setPercentile: (percentile: number) => void;
  setScore: (score: number) => void;
};

export const useSkillStore = create<SkillState>((set) => ({
  rank: undefined,
  percentile: undefined,
  score: undefined,
  setRank: (rank) => set({ rank }),
  setPercentile: (percentile) => set({ percentile }),
  setScore: (score) => set({ score }),
}));