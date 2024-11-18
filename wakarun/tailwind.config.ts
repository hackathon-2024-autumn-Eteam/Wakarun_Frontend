import type { Config } from 'tailwindcss';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: '#B4DA0A',
        Lgreen: '#DAF55D',
        LLgreen:'#EDFDA6'
      },
    },
  },
  plugins: [
    scrollbar
  ],
} satisfies Config;
