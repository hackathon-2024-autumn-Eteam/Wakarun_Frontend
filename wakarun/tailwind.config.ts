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
        litegreen: '#EFFFD1',
        blue: '#92DFD2',
      },
      borderRadius: {
        large: '35px',
      },
      width: {
        '1055': '65.9375rem',
      },
      height: {},
      padding: {
        '72px': '72px',
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
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
