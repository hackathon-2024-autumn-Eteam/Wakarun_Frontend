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
        litegreen: '#EFFFD1',
        blue: '#92DFD2',
        Lgreen: '#DAF55D',
        LLgreen: '#EDFDA6',
        skin: '#FEF7A8',
      },
      width: {
        '1055': '65.9375rem',
      },
      height: {},
      padding: {
        '72px': '72px',
      },
    },
  },
  plugins: [scrollbar],
} satisfies Config;
