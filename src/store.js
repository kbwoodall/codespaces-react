// src/store.js
import create from 'zustand';

const useSharedStore = create((set) => ({
  sharedVariable: 0,
  increment: () => set((state) => ({ sharedVariable: state.sharedVariable + 1 })),
  decrement: () => set((state) => ({ sharedVariable: state.sharedVariable - 1 })),
}));

export default useSharedStore;
