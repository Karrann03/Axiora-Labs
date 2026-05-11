import { create } from 'zustand';

interface AppState {
  theme: 'dark' | 'light';
  isMenuOpen: boolean;
  toggleTheme: () => void;
  toggleMenu: (isOpen?: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  isMenuOpen: false,
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  toggleMenu: (isOpen) => set((state) => ({ isMenuOpen: isOpen ?? !state.isMenuOpen })),
}));
