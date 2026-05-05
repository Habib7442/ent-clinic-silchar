import { create } from 'zustand';

interface BookingState {
  step: number;
  selectedService: string | null;
  selectedDate: Date | null;
  selectedSlot: string | null;
  patientData: {
    name: string;
    phone: string;
    email: string;
    concern: string;
  };
  
  // Actions
  setStep: (step: number) => void;
  setService: (service: string) => void;
  setDate: (date: Date) => void;
  setSlot: (slot: string) => void;
  setPatientData: (data: Partial<BookingState['patientData']>) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  selectedService: null,
  selectedDate: null,
  selectedSlot: null,
  patientData: {
    name: '',
    phone: '',
    email: '',
    concern: '',
  },

  setStep: (step) => set({ step }),
  setService: (selectedService) => set({ selectedService, step: 2 }),
  setDate: (selectedDate) => set({ selectedDate, step: 3 }),
  setSlot: (selectedSlot) => set({ selectedSlot, step: 4 }),
  setPatientData: (data) => set((state) => ({ 
    patientData: { ...state.patientData, ...data } 
  })),
  resetBooking: () => set({
    step: 1,
    selectedService: null,
    selectedDate: null,
    selectedSlot: null,
    patientData: { name: '', phone: '', email: '', concern: '' }
  }),
}));
