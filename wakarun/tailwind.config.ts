import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

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
        blue: '#92DFD2',
      },
      clipPath: {
        left_trapezoid: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
        right_trapezoid: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
        parallelogram: 'polygon(25% 0, 100% 0, 75% 100%, 0% 100%)',
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      api.addUtilities({
        '.clip-left-trapezoid': {
          'clip-path': 'polygon(0 0, 100% 0, 75% 100%, 0 100%)',
        },
        '.clip-right-trapezoid': {
          'clip-path': 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)',
        },
        '.clip-parallelogram': {
          'clip-path': 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)',
        },
      });
    },
  ],
} satisfies Config;
