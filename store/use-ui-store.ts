import { create } from 'zustand';

interface UIState {
  lang: string;
  setLang: (lang: string) => void;
  isBookingOpen: boolean;
  setBookingOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
  isBookingOpen: false,
  setBookingOpen: (isBookingOpen) => set({ isBookingOpen }),
}));
