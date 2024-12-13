import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface LoggingState {
  isLogging: boolean;
  setIsLogging: (value: boolean) => void;
}

const useLoggingStore = create<LoggingState>()(
  persist(
    (set) => ({
      isLogging: false, // Default value
      setIsLogging: (value: boolean) => set({ isLogging: value }),
    }),
    {
      name: 'logging-storage', // Name of the storage key
      getStorage: () => localStorage, // Use localStorage to persist
    }
  )
);

export default useLoggingStore;