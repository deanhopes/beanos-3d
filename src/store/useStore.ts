import { create } from 'zustand'

export type Zone = 'landing' | 'projects' | 'about'

interface Store {
  currentZone: Zone
  isTransitioning: boolean
  setZone: (zone: Zone) => void
  setTransitioning: (v: boolean) => void
}

export const useStore = create<Store>((set) => ({
  currentZone: 'landing',
  isTransitioning: false,
  setZone: (zone) => set({ currentZone: zone }),
  setTransitioning: (v) => set({ isTransitioning: v }),
}))
