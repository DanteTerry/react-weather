import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCityName = create(
  persist(
    (set) => ({
      cityName: "",
      setCityName: (e) => set({ cityName: e.target.value }),
      setCityNameFromSide: (city) => set({ cityName: city }),
    }),
    {
      name: "cityName",
    },
  ),
);
